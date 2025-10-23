import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Delay response by 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      message: body.message,
    });

    return NextResponse.json(
      {
        message: `${body.name}, Your message has been sent successfully!`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
