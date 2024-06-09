import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const GET = async (req: NextRequest) => {
  try {
    const { data, error } = await supabase
      .from("RoomAccess")
      .select();

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