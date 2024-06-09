import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { card_id, date, start_time, end_time, room_floor, room_number } = body;

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
        console.log(error)
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
