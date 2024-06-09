import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase/client';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    const { data: user, error: userError } = await supabase
      .from('User')
      .select('email, hashed_password, first_name, last_name, is_admin, is_employee')
      .eq('email', email)
      .single();

    if (userError) {
      throw userError;
    }

    if (!user) {
      return NextResponse.json({ message: 'Email salah' }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashed_password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Kata sandi salah' }, { status: 401 });
    }

    const sessionToken = uuidv4();
    const tokenExpiration = new Date();
    tokenExpiration.setDate(tokenExpiration.getDate() + 7); // Set cookie to expire in 7 days

    // Here you should save the sessionToken to your database and associate it with the user
    // For demonstration purposes, we're skipping this step.

    const response = NextResponse.json({ message: 'Login berhasil', user }, { status: 200 });
    response.cookies.set('sessionToken', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      expires: tokenExpiration,
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Terjadi kesalahan saat login' }, { status: 500 });
  }
};
