import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { card_id, room_floor, room_number } = body;

    // Current date and time in UTC+7
    const now = new Date();
    const nowUTC7 = new Date(now.getTime() + 7 * 60 * 60 * 1000); // Adjusting for UTC+7
    const date = nowUTC7.toISOString().split('T')[0]; // Format YYYY-MM-DD
    const start_time = nowUTC7.toISOString().split('T')[1].slice(0, 5); // Format HH:MM
    const end_time = new Date(nowUTC7.getTime() + 2 * 60 * 60 * 1000).toISOString().split('T')[1].slice(0, 5); // 2 hours later, Format HH:MM

    // Find the user_id associated with the card_id
    const { data: user, error: userError } = await supabase
      .from('User')
      .select('user_id')
      .eq('card_id', card_id)
      .single();

    if (userError) {
      return NextResponse.json({ message: "Card ID tidak valid" }, { status: 400 });
    }

    const user_id = user.user_id;

    // Insert the new access record
    const { data, error } = await supabase
      .from('RoomAccess')
      .insert([
        {
          user_id,
          date,
          start_time,
          end_time,
          room_floor,
          room_number,
        },
      ]);

    if (error) {
      console.log(error);
      return NextResponse.json({ message: "Error", error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Akses Berhasil Diberikan", body }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Error", error: "An unknown error occurred" }, { status: 500 });
    }
  }
};
