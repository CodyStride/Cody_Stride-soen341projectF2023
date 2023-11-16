import { NextResponse } from "next/server";
import { IPropertyData } from "@/types/property";
import db from "@/lib/dbServer";
import { cookies } from "next/headers";

export async function POST(request: any) {
  try {
    const cookieStore = cookies();
    const user = await db.getUser(cookieStore);

    if (!user) throw "User not authenticated";

    const {
      type,
      bathrooms,
      bedrooms,
      price,
      description,
      image,
      location,
    }: IPropertyData = await request.json();

    await db.client.collection("properties").create({
      type,
      owner: user.id,
      bathrooms,
      bedrooms,
      price,
      description,
      image,
      location,
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

export async function PUT(request: any) {
  try {
    const cookieStore = cookies();
    const user = await db.getUser(cookieStore);

    if (!user) throw "User not authenticated";
    const {
      id,
      type,
      bathrooms,
      bedrooms,
      price,
      description,
      image,
      location,
    }: IPropertyData = await request.json();

    await db.client.collection("properties").update(id, {
      type,
      owner: user.id,
      bathrooms,
      bedrooms,
      price,
      description,
      image,
      location,
    });

    return NextResponse.json({ message: "Topic edited" }, { status: 200 });
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

export async function GET() {}

export async function DELETE(request: any) {
  try {
    const id = request.nextUrl.searchParams.get("id");
  
    await db.client.collection("properties").delete(id);
  
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
  } catch(err: any) {
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
