import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase/client";

export const GET = async (
  req: NextRequest,
  { params }: { params: { user_id: string } }
) => {
  const { user_id } = params;

  if (!user_id) {
    return NextResponse.json({ message: "Missing user_id parameter" }, { status: 400 });
  }

  try {
    // Query the Employee table
    const { data, error } = await supabase
      .from('Employee')
      .select('*')
      .eq('user_id', user_id);

    if (error) {
      throw error;
    }

    return NextResponse.json({ employee: data[0] }, { status: 200 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err);
      return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "Error", error: "An unknown error occurred" }, { status: 500 });
    }
  }
};
