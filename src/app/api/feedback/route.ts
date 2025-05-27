import { feedback } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { email, selection, description } = await req.json()
        
        // Validate required field
        if (!email) {
            return NextResponse.json(
                { error: "Email is required" }, 
                { status: 400 }
            )
        }

        // Call feedback function
        const result = await feedback(email, selection || "", description || "")
        return result
        
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request body" }, 
            { status: 400 }
        )
    }
}