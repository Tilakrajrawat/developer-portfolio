import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Just log the data to your terminal window
        console.log("---------------------------------");
        console.log("📧 NEW CONTACT FORM SUBMISSION:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        console.log("---------------------------------");

        // Return success to the frontend
        return NextResponse.json({ ok: true, message: "Message received" });
    } catch (err) {
        return NextResponse.json(
            { ok: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}