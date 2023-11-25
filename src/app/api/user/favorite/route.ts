import { APP_DATABASE } from "@/lib/dbNames";
import db from "@/lib/dbServer";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(request: any) {
  try {
    const cookieStore = cookies();
    const user = await db.getUser(cookieStore);

    if (!user) throw "User not authenticated";
    const { propertyId } = await request.json();

    console.log(propertyId);

    const { id, properties } = await db.client
      .collection(APP_DATABASE.FAVORITES)
      .getFirstListItem(`user = "${user.id}"`);

    const isFavorite = properties.some((id: string) => id === propertyId);

    await db.client.collection(APP_DATABASE.FAVORITES).update(id, {
      ["properties" + (isFavorite ? "-" : "+")]: propertyId,
    });

    return NextResponse.json({ message: "Topic edited" }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return new Response(
      JSON.stringify({ error: err.message || err.toString() }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
