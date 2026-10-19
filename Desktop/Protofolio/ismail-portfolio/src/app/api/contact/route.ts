import { NextResponse } from "next/server";

export interface ContactRequestBody {
  name: string;
  email: string;
  organization?: string;
  inquiryType: "enterprise" | "freelance" | "saas" | "advisory";
  timeline?: string;
  budget?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    const { name, email, organization, inquiryType, timeline, budget, message } = body;

    // 1. Basic validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "ismailxmamad@gmail.com";
    const subject = `[Portfolio Lead] ${inquiryType.toUpperCase()} Inquiry from ${name.trim()}${organization ? ` (${organization.trim()})` : ""}`;

    // 2. Format message content for email
    const emailText = `
New Portfolio Inquiry Received:

Name: ${name.trim()}
Email: ${email.trim()}
Organization: ${organization?.trim() || "Not specified"}
Inquiry Type: ${inquiryType}
Target Timeline: ${timeline || "Not specified"}
Budget: ${budget || "Not specified"}

Message:
${message.trim()}
    `.trim();

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0f172a; margin-top: 0; font-size: 20px; border-bottom: 2px solid #6366f1; padding-bottom: 12px;">New Portfolio Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;"><strong>Name:</strong></td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${name.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Email:</strong></td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${email.trim()}" style="color: #6366f1; text-decoration: none;">${email.trim()}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Organization:</strong></td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${organization?.trim() || "None"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Inquiry Type:</strong></td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><span style="display: inline-block; background-color: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 6px; font-size: 12px; font-weight: 600;">${inquiryType.toUpperCase()}</span></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Timeline:</strong></td>
            <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${timeline || "Immediate"}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #6366f1;">
          <h4 style="margin: 0 0 8px 0; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Brief</h4>
          <p style="margin: 0; color: #0f172a; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</p>
        </div>
      </div>
    `;

    // 3. Dispatch to live service if configured

    // Option A: Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
          to: recipientEmail,
          reply_to: email.trim(),
          subject: subject,
          text: emailText,
          html: emailHtml,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json();
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to dispatch email via Resend service." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        provider: "resend",
        message: "Inquiry successfully delivered via Resend.",
      });
    }

    // Option B: Formspree endpoint
    const formspreeUrl = process.env.FORMSPREE_ENDPOINT || (process.env.FORMSPREE_ID ? `https://formspree.io/f/${process.env.FORMSPREE_ID}` : null);
    if (formspreeUrl) {
      const formspreeRes = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organization: organization?.trim() || "N/A",
          inquiryType,
          timeline,
          budget,
          message: message.trim(),
          _subject: subject,
        }),
      });

      if (!formspreeRes.ok) {
        const errJson = await formspreeRes.json().catch(() => ({}));
        console.error("Formspree error:", errJson);
        return NextResponse.json(
          { error: "Failed to dispatch inquiry via Formspree." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        provider: "formspree",
        message: "Inquiry successfully delivered via Formspree.",
      });
    }

    // Option C: Web3Forms endpoint
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: name.trim(),
          email: email.trim(),
          subject: subject,
          organization: organization?.trim() || "N/A",
          inquiryType,
          message: emailText,
        }),
      });

      if (!web3Res.ok) {
        console.error("Web3Forms error");
        return NextResponse.json(
          { error: "Failed to dispatch inquiry via Web3Forms." },
          { status: 502 }
        );
      }

      return NextResponse.json({
        success: true,
        provider: "web3forms",
        message: "Inquiry successfully delivered via Web3Forms.",
      });
    }

    // Fallback: If no external email service API key is set yet in environment
    console.log("=== INCOMING PORTFOLIO INQUIRY (Logged server-side) ===");
    console.log(emailText);
    console.log("=====================================================");

    return NextResponse.json({
      success: true,
      provider: "local-logged",
      message: "Inquiry logged. Configure RESEND_API_KEY or FORMSPREE_ID in .env for external delivery.",
    });
  } catch (error: any) {
    console.error("Contact API route unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your inquiry." },
      { status: 500 }
    );
  }
}
