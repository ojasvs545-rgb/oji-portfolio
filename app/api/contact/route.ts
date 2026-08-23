import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "RESEND_API_KEY is missing.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();

    const name = body.name;
    const email = body.email;
    const projectType = body.projectType;
    const budget = body.budget;
    const message = body.message;

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Oji Game Paglu <onboarding@resend.dev>",
      to: ["ojasvs545@gmail.com"],
      replyTo: email,
      subject: `New Project Request - ${projectType}`,
      html: `
        <h1>New Project Request</h1>

        <h2>Client Details</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Project Type:</strong> ${projectType}</p>

        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>

        <h2>Message</h2>

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message || "Email could not be sent.",
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data);

    return NextResponse.json({
      success: true,
      message: "Project sent successfully!",
    });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error.",
      },
      { status: 500 }
    );
  }
}