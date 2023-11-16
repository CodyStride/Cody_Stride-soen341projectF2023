import { NextResponse } from "next/server";
import db from "@/lib/dbServer";
import { cookies } from "next/headers";
import { APP_DATABASE } from "@/lib/dbNames";

export interface IRequestVisit {
  date: string;
  message: string;
  owner: string;
  propertyId: string;
}

export async function POST(request: any) {
  try {
    const cookieStore = cookies();
    const user = await db.getUser(cookieStore);

    if (!user) throw "User not authenticated";

    const { date, message, owner, propertyId }: IRequestVisit =
      await request.json();

    const data = {
      sender: "RELATION_RECORD_ID",
      receiver: "RELATION_RECORD_ID",
      description: "test",
      hasAccepted: true,
      hasRead: true,
      date: "2022-01-01 10:00:00.123Z",
    };

    const [datePart, timePart] = date.split("T");
    const customFormat = `${datePart} ${timePart.slice(0, -1)}`;
    console.log(customFormat)

    await db.client.collection(APP_DATABASE.REQUESTS_VISIT).create({
      sender: user.id,
      receiver: owner,
      date: customFormat,
      message,
      property: propertyId,
      hasAccepted: false,
      hasRead: false,
    });

    return NextResponse.json({ message: "Property Created" }, { status: 201 });
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
