import { NextResponse } from "next/server";

export function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  const value = searchParams.get("name");
  console.log(value);
  return NextResponse.json("Hello world!");
}
