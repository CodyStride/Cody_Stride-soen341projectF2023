import { NextResponse } from "next/server";
import { IBrokerData } from "@/types/property";
import db from "@/lib/dbServer";
import { cookies } from "next/headers";
import { APP_DATABASE } from "@/lib/dbNames";

export async function PUT(request: any) {
  try {
    const cookieStore = cookies();
    const user = await db.getUser(cookieStore);

    if (!user) throw "User not authenticated";

    const { id, license, agency }: IBrokerData = await request.json();

    const { id: id_info } = await db.client
      .collection(APP_DATABASE.BROKER_INFO)
      .getFirstListItem(`user = "${id}"`);
    
    await db.client.collection(APP_DATABASE.BROKER_INFO).update(id_info, {
      license,
      agency,
    });

    return NextResponse.json(
      { message: "Broker Info edited" },
      { status: 200 }
    );
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

export async function DELETE(request: any) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    await db.client.collection(APP_DATABASE.USERS).delete(id);

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (err: any) {
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
