import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const GET = async (req: NextRequest) => {
  try {
    const { data }: { data: any } = await supabase
      .from("Room")
      .select();


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

export const POST = async (req: NextRequest) => {
  const roomData = await req.json();

  try {
    const { data, error } = await supabase
      .from("Room")
      .upsert(roomData)
      .eq("room_floor", roomData.room_floor) 
      .eq("room_number", roomData.room_number); 

    if (error) {
      throw error;
    }

    return NextResponse.json({ roomData }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
    } else {
        console.log(err)
      return NextResponse.json({ message: "Error", error: "An unknown error occurred" }, { status: 500 });
    }
  }
};
