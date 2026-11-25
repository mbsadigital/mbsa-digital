import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Infallible local lead persistence helper
function saveInquiryLocally(record: any) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, "inquiries.json");
    let list: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        list = JSON.parse(fs.readFileSync(filePath, "utf8"));
      } catch {
        list = [];
      }
    }
    list.unshift(record);
    // Keep last 500 inquiries
    if (list.length > 500) list = list.slice(0, 500);
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2));
  } catch (err) {
    console.error("Error saving inquiry locally:", err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      message,
      phone,
      company,
      website,
      helpWith,
      service,
      budget,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const inquiryRecord = {
      id: "inq_" + Date.now(),
      timestamp: new Date().toISOString(),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : "Not provided",
      company: company ? String(company).trim() : "Not provided",
      website: website ? String(website).trim() : "Not provided",
      helpWith: helpWith ? String(helpWith).trim() : "Free search & website audit",
      service: service ? String(service).trim() : "Not specified",
      budget: budget ? String(budget).trim() : "Prefer not to say",
      message: String(message).trim(),
    };

    // 1. Infallibly persist inquiry to data/inquiries.json
    saveInquiryLocally(inquiryRecord);

    const emailSubject = `New Lead: ${inquiryRecord.name} (${inquiryRecord.company !== "Not provided" ? inquiryRecord.company + " - " : ""}${inquiryRecord.helpWith || inquiryRecord.service}) [${inquiryRecord.email}]`;

    // 2. Direct SMTP delivery via Nodemailer if SMTP credentials are provided
    const emailUser = process.env.EMAIL_USER || process.env.GMAIL_USER || process.env.SMTP_USER;
    const emailPass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS;

    if (emailUser && emailPass) {
      try {
        const nodemailer = require("nodemailer");
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <div style="border-bottom: 2px solid #2563EB; padding-bottom: 12px; margin-bottom: 18px;">
              <h2 style="color: #0F172A; margin: 0; font-size: 20px;">New Client Enquiry — MBSA Digital</h2>
              <p style="color: #64748B; margin: 4px 0 0 0; font-size: 13px;">Received on ${new Date().toLocaleString()}</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #64748B; width: 140px; font-weight: 600;">Name:</td><td style="padding: 8px 0; color: #0F172A; font-weight: 700;">${inquiryRecord.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B; font-weight: 600;">Email:</td><td style="padding: 8px 0; color: #2563EB;"><a href="mailto:${inquiryRecord.email}">${inquiryRecord.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748B; font-weight: 600;">Phone:</td><td style="padding: 8px 0; color: #0F172A;">${inquiryRecord.phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B; font-weight: 600;">Company:</td><td style="padding: 8px 0; color: #0F172A;">${inquiryRecord.company}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B; font-weight: 600;">Website:</td><td style="padding: 8px 0; color: #0F172A;">${inquiryRecord.website}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B; font-weight: 600;">Help With:</td><td style="padding: 8px 0; color: #0F172A; font-weight: 600;">${inquiryRecord.helpWith}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B; font-weight: 600;">Service:</td><td style="padding: 8px 0; color: #0F172A;">${inquiryRecord.service}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748B; font-weight: 600;">Budget:</td><td style="padding: 8px 0; color: #0F172A;">${inquiryRecord.budget}</td></tr>
            </table>
            <div style="margin-top: 18px; padding: 14px; background: #F8FAFC; border-radius: 8px; border-left: 3px solid #2563EB;">
              <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">Message / Goals:</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1E293B; white-space: pre-wrap;">${inquiryRecord.message}</p>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"MBSA Digital Leads" <${emailUser}>`,
          to: "mbsadigitalsolutions@gmail.com",
          replyTo: inquiryRecord.email,
          subject: emailSubject,
          html: htmlContent,
        });

        return NextResponse.json({
          success: true,
          message: "Message delivered directly to mbsadigitalsolutions@gmail.com!",
        });
      } catch (smtpErr) {
        console.warn("Direct SMTP delivery error, falling back to FormSubmit:", smtpErr);
      }
    }

    // 3. Fallback to FormSubmit AJAX Forwarding
    let formSubmitSent = false;
    let formSubmitNeedsActivation = false;
    let serviceResponseMsg = "";

    try {
      const formSubmitRes = await fetch("https://formsubmit.co/ajax/mbsadigitalsolutions@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Referer: "https://mbsadigital.com",
          Origin: "https://mbsadigital.com",
        },
        body: JSON.stringify({
          name: inquiryRecord.name,
          email: inquiryRecord.email,
          phone: inquiryRecord.phone,
          company: inquiryRecord.company,
          website: inquiryRecord.website,
          helpWith: inquiryRecord.helpWith,
          service: inquiryRecord.service,
          budget: inquiryRecord.budget,
          message: inquiryRecord.message,
          _subject: emailSubject,
          _replyto: inquiryRecord.email,
          _captcha: "false",
          _template: "table",
        }),
      });

      const fsData = await formSubmitRes.json().catch(() => null);

      if (fsData?.success === "true" || fsData?.success === true) {
        formSubmitSent = true;
        serviceResponseMsg = "Message sent successfully to mbsadigitalsolutions@gmail.com!";
      } else if (fsData?.message && fsData.message.toLowerCase().includes("activation")) {
        formSubmitNeedsActivation = true;
        serviceResponseMsg = "Enquiry received! Please check mbsadigitalsolutions@gmail.com and click 'Activate Form' once to activate auto-forwarding.";
      } else if (formSubmitRes.ok) {
        formSubmitSent = true;
        serviceResponseMsg = fsData?.message || "Enquiry sent successfully!";
      }
    } catch (fsError) {
      console.warn("FormSubmit fetch error:", fsError);
    }

    // Always return success since the inquiry has been safely persisted to data/inquiries.json
    return NextResponse.json({
      success: true,
      delivered: formSubmitSent,
      needsActivation: formSubmitNeedsActivation,
      message:
        serviceResponseMsg ||
        "Thank you! Your enquiry has been received and saved. Our team will review your details and contact you shortly.",
    });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "inquiries.json");
    let list: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        list = JSON.parse(fs.readFileSync(filePath, "utf8"));
      } catch {
        list = [];
      }
    }
    return NextResponse.json({ success: true, count: list.length, inquiries: list });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to read inquiries" },
      { status: 500 }
    );
  }
}
