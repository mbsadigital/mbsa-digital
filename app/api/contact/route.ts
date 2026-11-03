import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
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
    } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const rawOrigin = req.headers.get("origin") || req.headers.get("referer") || "";
    const origin = rawOrigin.startsWith("http") && !rawOrigin.includes("localhost")
      ? rawOrigin
      : "https://mbsadigital.com";

    // Forward to FormSubmit to deliver the email to mbsadigitalsolutions@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/mbsadigitalsolutions@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: origin,
        Origin: origin,
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Not provided",
        company: company || "Not provided",
        website: website || "Not provided",
        helpWith: helpWith || "Free search & website audit",
        service: service || "Not specified",
        budget: budget || "Prefer not to say",
        message,
        _subject: `New Lead: ${name} (${company ? company + " - " : ""}${helpWith || service || "Growth Inquiry"}) [${email}]`,
        _replyto: email,
        _captcha: "false",
        _template: "table",
      }),
    });

    const data = await response.json().catch(() => null);

    // FormSubmit returns { success: 'true' } when active, or { success: 'false', message: "...needs Activation..." } on first setup
    if (data?.success === "true" || data?.success === true) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully to mbsadigitalsolutions@gmail.com!",
      });
    }

    if (data?.message && data.message.toLowerCase().includes("activation")) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message: "Sent! FormSubmit sent an activation email to mbsadigitalsolutions@gmail.com. Please open Gmail (or Spam folder) and click 'Activate Form' once.",
      });
    }

    if (response.ok && data) {
      return NextResponse.json({
        success: true,
        message: data.message || "Message sent successfully!",
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: data?.message || "Failed to deliver message via email service.",
      },
      { status: response.status || 500 }
    );
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
