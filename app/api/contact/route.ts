import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, phone, service } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") || req.headers.get("referer") || "http://localhost:3000";

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
        service: service || "General Inquiry",
        message,
        _subject: `New Lead: ${name} - ${service || "Growth Inquiry"} (${email})`,
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
