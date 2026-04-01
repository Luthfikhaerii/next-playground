import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    // const token = request.cookies.get("token")?.value;
    // console.log("Token from cookies:", token||"No token found");
    return NextResponse.next();
}