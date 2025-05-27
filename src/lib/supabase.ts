import { supabase } from "@/utils/supabase/server";
import { SupabaseClient } from "@/types/supabaseClient";
import { NextResponse } from "next/server";

export const INSERT = async (email: string) => {
    const { data, error } = await supabase
    .from('client_waitlist')
    .insert({ email })
    .select()

    if(error) {
        return console.log(error)
    } else {
        return console.log(data)
    }
}

export const SELECTALL = async () => {
    const { data, error } = await supabase
    .from("client_waitlist")
    .select("*")

    if (error) return console.log(error)

    return data as SupabaseClient[]
}

export const checkIfEmailAlreadyExists = async (email: string) => {
    const { data, error } = await supabase
    .from("client_waitlist")
    .select("email")
    .eq("email", email)

    if (error) return console.log(error)

    if (data.length > 0) {
        console.log("Email Already Exists")
        return true
    }

    return false
}

export const idFromEmail = async (email: string) => {
    const { data, error } = await supabase
    .from("client_waitlist")
    .select("*")
    .eq("email", email)
    .single()

    if (error) {
        throw Error("Email not found")
    }

    const client = data as SupabaseClient
    return client.id
}

export const emailFromId = async (id: string) => {
    const { data, error } = await supabase
      .from("client_waitlist")
      .select("*")
      .eq("id", id)
      .single();
  
    if (error) {
      // Check if it's specifically a "no rows" error
      if (error.code === 'PGRST116') {
        // Record not found - return null to trigger notFound()
        return null;
      }
      // For other database errors, you can still throw or return null
      console.error("Database error:", error);
      return null; // This will also trigger notFound()
    }
    
    const email = data as SupabaseClient;
    return email.email;
  };

export const unsubscribe = async (email: string) => {
    const { data, error } = await supabase
    .from("client_waitlist")
    .delete()
    .eq("email", email)

    if (error) {
        return NextResponse.json(error)
    }
    if (data) {
        return NextResponse.json({status: 201})
    } else {
        return NextResponse.json({status: 404})
    }
}

export const feedback = async (email: string, selection: string, description: string) => {
    const { data, error } = await supabase
        .from("feedback")
        .insert({email, selection, description})
        .select()

    if (error) {
        return NextResponse.json(
            { error: error.message || "Failed to submit feedback" }, 
            { status: 400 }
        )
    }

    // Successful insert
    return NextResponse.json(
        { message: "Feedback submitted successfully", data }, 
        { status: 201 }
    )
}