import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";
import { error } from "console";

export const GET = async (
  req: NextRequest,
  { params }: { params: { floor: string; number: string } }
) => {
  const { floor, number } = params;

  if (!floor || !number) {
    return NextResponse.json({ message: "Missing floor or number parameter" }, { status: 400 });
  }

  try {
    // Query the RoomAccess table
    const { data, error } = await supabase
      .from('CardAccessLevel')
      .select('card_id')
      .eq('room_floor', floor)
      .eq('room_number', number);

    if (error) {
      throw error;
    }

    // Return only the card_id in an array format
    const cardIds = data.map((entry: { card_id: string }) => entry.card_id);

    return NextResponse.json({ cardIds }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Error", error: "An unknown error occurred" }, { status: 500 });
    }
  }
};
