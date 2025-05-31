import React from "react";
import { emailFromId } from "@/lib/supabase";
import { notFound } from "next/navigation";
import UnsubscribeClient from "@/components/Waitlist/UnsubscribeClient";
const Unsubscribe = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const email = await emailFromId(id);
  if (!email) {
    notFound();
  }
  return <UnsubscribeClient email={email} id={id} />;
};

export default Unsubscribe;
