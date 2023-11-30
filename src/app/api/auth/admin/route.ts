import db from "@/lib/dbServer";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log("form:", { email, password });
    await db.authenticateAdmin(email, password);
    cookies().set("pb_auth", db.client.authStore.exportToCookie());

    return NextResponse.json({ isValid: true });
  } catch (err: any) {
    console.log(err);
    return new Response(
      JSON.stringify({ error: err.message || err.toString() }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
