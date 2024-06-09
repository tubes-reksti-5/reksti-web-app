import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const GET = async (req: NextRequest) => {
    try {
      // Fetch data from the Employee table
      const { data: employees }: { data: any } = await supabase.from("Employee").select("*");
  
      // Fetch data from the User table
      const { data: users }: { data: any } = await supabase.from("User").select("user_id, first_name, last_name");
  
      // Merge the data based on the user_id
      const mergedData = employees.map((employee: any) => {
        const user = users.find((user: any) => user.user_id === employee.user_id);
        return {
          ...employee,
          full_name: user ? `${user.first_name} ${user.last_name}` : 'Unknown User'
        };
      });
  
      return NextResponse.json({ employees: mergedData }, { status: 200 });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err);
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
      .from("Employee")
      .upsert(roomData)
      .eq("user_id", roomData.room_floor) 

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
