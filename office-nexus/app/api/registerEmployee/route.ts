import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabase/client';
import bcrypt from 'bcryptjs';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, password, first_name, last_name } = body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Register user with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password: hashedPassword,
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ message: "Error", error: error.message }, { status: 400 });
    }

    const user = data.user;

    if (!user) {
      return NextResponse.json({ message: "Error", error: "User registration failed" }, { status: 400 });
    }

    // Insert user details into the database
    const { error: dbError } = await supabase
      .from('users')
      .insert([
        {
          username: user.id,
          first_name,
          last_name,
          email,
          is_admin: false,
          is_employee: true,
        },
      ]);

    if (dbError) {
      console.log(error);
      return NextResponse.json({ message: "Error", error: dbError.message }, { status: 400 });
    }

    return NextResponse.json({ message: "User registered successfully", user }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Error", error: "An unknown error occurred" }, { status: 500 });
    }
  }
};
