import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello from the auth API!" });
}

export async function POST(request: NextRequest) {
    //basic search params
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    //modern search params
    const page = request.nextUrl.searchParams.get('page');
    const limit = request.nextUrl.searchParams.get('limit');

    //cookies
    const cookiesToken = request.cookies.get("token")?.value;

    //headers
    const authHeader = request.headers.get('Authorization');

    //body
    const { username, password } = await request.json();


    return NextResponse.json({ message: "Request Success", data: { username, password, search, page, limit, cookiesToken, authHeader } }, { status: 200 });
}