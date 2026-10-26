import { NextRequest, NextResponse } from "next/server";

const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || "admin123";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { success: false, error: "Password is required" },
        { status: 400 }
      );
    }

    if (password === ADMIN_SECRET) {
      return NextResponse.json({
        success: true,
        token: ADMIN_SECRET,
        message: "Admin authenticated successfully! Full CRUD privileges enabled.",
      });
    }

    return NextResponse.json(
      { success: false, error: "Incorrect admin password. Access denied." },
      { status: 401 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
