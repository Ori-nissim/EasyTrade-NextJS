import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body from the request
    const data = await req.json();

    // Extract the `id` parameter from the URL
  
    if (!data.email || !data.title || !data.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log(data)
    return NextResponse.json(data)

  } catch (error) {
    console.error("Error adding record:", error);
    return NextResponse.json({ error: "Failed to add record" }, { status: 500 });
  }
}
