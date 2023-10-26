import { NextResponse } from "next/server";
import PocketBase from "pocketbase";
import { IPropertyData } from "../PropertyTable";

export async function POST(request: any) {
  const {
    type,
    bathrooms,
    bedrooms,
    price,
    description,
    image,
    location,
  }: IPropertyData = await request.json();
  console.log('Creating record')
  
  const db = new PocketBase("http://127.0.0.1:8090");

  await db.collection("properties").create({
    type,
    bathrooms,
    bedrooms,
    price,
    description,
    image,
    location,
  });

  return NextResponse.json({ message: "Property Created" }, { status: 201 });
}

export async function GET() {}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  const db = new PocketBase("http://127.0.0.1:8090");

  await db.collection("properties").delete(id);

  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
