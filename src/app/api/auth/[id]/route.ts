import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    return NextResponse.json({ message: `GET request received for ID: ${id}` }, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const { username, password } = await request.json();

    const response = NextResponse.json({ message: `PUT request received for ID: ${id}`, data: { username, password } }, { status: 200 });

    response.cookies.set("token", "abc123", {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60,
    });

    return response;
}