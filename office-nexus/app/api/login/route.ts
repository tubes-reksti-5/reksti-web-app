import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    const { data: users, error: userError } = await supabase
      .from('User')
      .select('email, hashed_password, first_name, last_name, is_admin, is_employee')
      .eq('email', email)
      .single();

    if (userError) {
      throw userError;
    }

    if (!users) {
      return NextResponse.json({ message: "Email atau kata sandi salah" }, { status: 401 });
    }

    if (password !== users.hashed_password) {
      return NextResponse.json({ message: "Email atau kata sandi salah" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login berhasil", user: users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Terjadi kesalahan saat login" }, { status: 500 });
  }
};