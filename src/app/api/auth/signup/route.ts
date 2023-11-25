import db from "@/lib/dbServer";
import { NextResponse } from "next/server";
import { ISignUpPayload, USER_TYPES } from "@/types/property";
import { APP_DATABASE } from "@/lib/dbNames";

export async function POST(request: Request) {
  try {
    const payload: ISignUpPayload = await request.json();
    const result = await db.register<any>(payload);
    const { id: user } = result;

    // Create favorite database
    db.client.collection(APP_DATABASE.FAVORITES).create({ user });

    // Create appropriate info type
    switch (payload.type) {
      case USER_TYPES.BROKER:
        db.client.collection(APP_DATABASE.BROKER_INFO).create({ user });
        break;
      case USER_TYPES.BUYER:
        db.client.collection(APP_DATABASE.BUYER_INFO).create({ user });
        break;
      case USER_TYPES.RENTER:
        db.client.collection(APP_DATABASE.RENTER_INFO).create({ user });
        break;
      default:
        break;
    }

    return NextResponse.json(result);
  } catch (err: any) {
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
