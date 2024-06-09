import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../utils/supabase/client';
import bcrypt from 'bcryptjs';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, password, first_name, last_name, card_id } = body;

    //const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password;

    const { data, error } = await supabase
      .from('User')
      .insert([
        {
          first_name,
          last_name,
          email,
          hashed_password: hashedPassword,
          is_admin: false,
          is_employee: true,
          card_id,
        },
      ]);

    if (error) {
      console.log(error.message);
      return NextResponse.json({ message: "Error", error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "User registered successfully", body }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
    } 
  }
};
