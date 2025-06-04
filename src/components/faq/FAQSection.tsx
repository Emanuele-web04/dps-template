import { NEXTJS_FAQS, SWIFTUI_FAQS } from "@/lib/faqs";
import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  return (
    <div className="section-container max-w-xs! xs:max-w-sm! sm:max-w-xl! md:max-w-3xl! lg:max-w-4xl!">
      <div className="text-section">
        <h1 className="title">FAQ</h1>
        <p className="p-section">Everything you need to know.</p>
      </div>
      <h6 className="h6-title">Next.js FAQ</h6>
      <div className="w-full items-center border-l pt-4 border-r border-dashed border-neutral-600 flex flex-col gap-4 divide-y divide-neutral-600 divide-dashed">
        {NEXTJS_FAQS.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <h6 className="h6-title mt-12">SwiftUI FAQ</h6>
      <div className="w-full items-center border-l pt-4 border-r border-dashed border-orange-900 flex flex-col gap-4 divide-y divide-orange-900 divide-dashed">
        {SWIFTUI_FAQS.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
