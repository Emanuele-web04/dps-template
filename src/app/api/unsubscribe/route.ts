import { unsubscribe } from "@/lib/supabase";
import { NextResponse } from "next/server"

export async function DELETE(req: Request) {
    try {
        const { email, error } = await req.json()
        
        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }
        
        const result = await unsubscribe(email);
        
        // Check if unsubscribe function returned an error
        if (!result.ok) {
            return NextResponse.json({ error: error }, { status: 400 });
        }
        
        // Return success response
        return NextResponse.json({ message: 'Successfully unsubscribed' }, { status: 200 });
        
    } catch (error) {
        console.error('Unsubscribe error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}