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

export const POST = async (req: NextRequest) => {
    try {
      const accessData = await req.json();
  
      // Ensure all required fields are provided
      const requiredFields = ["room_number", "room_floor", "user_id", "date", "start_time", "end_time"];
      for (const field of requiredFields) {
        if (!(field in accessData)) {
          return NextResponse.json(
            { message: `Missing required field: ${field}` },
            { status: 400 }
          );
        }
      }
  
      const { data, error } = await supabase
        .from("RoomAccess")
        .upsert(accessData);
  
      if (error) {
        throw error;
      }
  
      return NextResponse.json({ accessData }, { status: 201 });
    } catch (err: unknown) {
      if (err instanceof Error) {
        //console.log(err);
        return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
      }
    }
  };