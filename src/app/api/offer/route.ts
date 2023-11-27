import { NextResponse } from "next/server";
import db from "@/lib/dbServer";
import { cookies } from "next/headers";
import { APP_DATABASE } from "@/lib/dbNames";
import { IPropertyOfferPayload, OFFER_STATUS } from "@/types/property";

interface OfferDBPayload {
  property: string;
  offeror: string;
  offeree: string;
  status: OFFER_STATUS;
  amount: number;
  message?: string;
}

export async function POST(request: any) {
  try {
    const cookieStore = cookies();
    const user = await db.getUser(cookieStore);

    if (!user) throw "User not authenticated";

    const { message, property, amount, offeree }: IPropertyOfferPayload =
      await request.json();

    const entry: OfferDBPayload = {
      message,
      property,
      amount,
      offeror: user.id,
      offeree,
      status: OFFER_STATUS.PENDING,
    };

    await db.client.collection(APP_DATABASE.PROPERTY_OFFERS).create(entry);

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
