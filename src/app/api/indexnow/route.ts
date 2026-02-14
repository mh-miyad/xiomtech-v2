import { NextResponse } from "next/server";

const API_KEY = "xiomtech491496a950f4f3d1as9012kjhjaYt84dbe0f";
const HOST = "xiomtech.vercel.app"; // TODO: Change to xiomtech.net when domain is live
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

export async function POST(request: Request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide a non-empty array of URLs." },
        { status: 400 },
      );
    }

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: HOST,
        key: API_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      message: `Pinged IndexNow with ${urls.length} URL(s).`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to ping IndexNow." },
      { status: 500 },
    );
  }
}
