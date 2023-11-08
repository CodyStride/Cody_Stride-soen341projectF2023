import { NextResponse } from "next/server";
import PocketBase from "pocketbase";
import { IPropertyData } from "@/types/property";

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
  console.log("Creating record");

  const pb = new PocketBase("http://127.0.0.1:8090");

  await pb.collection("properties").create({
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

export async function PUT(request: any) {
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
  
  const pb = new PocketBase("http://127.0.0.1:8090");

  await pb.collection("properties").update(id, {
    type,
    bathrooms,
    bedrooms,
    price,
    description,
    image,
    location,
  });

  return NextResponse.json({ message: "Topic edited" }, { status: 200 });
}

export async function GET() {}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  console.log(id);
  const pb = new PocketBase("http://127.0.0.1:8090");

  await pb.collection("properties").delete(id);

  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
