import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams.get('search');
    const page = request.nextUrl.searchParams.get('page');
    const limit = request.nextUrl.searchParams.get('limit');

    return NextResponse.json({ message: "Product API GET request", data: { search, page, limit } });
}