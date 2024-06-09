import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const GET = async (req: NextRequest, { params }: { params: { floor: string; number: string } }) => {
  const { floor, number } = params;

  if (!floor || !number) {
    return NextResponse.json({ message: "Missing floor or number parameter" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from("Room")
      .select()
      .eq("room_floor", floor)
      .eq("room_number", number);

    if (error) {
      throw error;
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err);
      return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Error", error: "An unknown error occurred" }, { status: 500 });
    }
  }
};
