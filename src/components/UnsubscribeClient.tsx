"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMail } from "react-icons/lu";
import { TbMailCheck } from "react-icons/tb";
import { TbArrowRightToArc } from "react-icons/tb";
import { TbMessageCircle } from "react-icons/tb";
import { useRouter } from "next/router";

interface UnsubscribeClientProps {
  email: string;
  id: string;
}

const LoadingSpinner = () => (
  <div className="min-h-screen min-w-screen flex bg-black/10 items-center justify-center">
    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
  </div>
);

const UnsubscribeClient = ({ email, id }: UnsubscribeClientProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<
    "unsubscribe" | "feedback" | "success" | "resubscribed"
  >("unsubscribe");
  const [feedback, setFeedback] = useState("");
  const [selectedReason, setSelectedReason] = useState("");

  const feedbackOptions = [
    "Too many emails",
    "Content not relevant",
    "Found a better alternative",
    "Other",
  ];

  const handleUnsubscribe = async () => {
    setCurrentStep("feedback");
  };

  const handleFeedbackSubmit = async () => {
    setIsLoading(true);
    try {
      const feedbackRes = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          selection: selectedReason,
          description: feedback,
        }),
      });
      console.log("Feedback response status:", feedbackRes.status);
      const responseData = await feedbackRes.json();
      console.log("Feedback response data:", responseData);

      if (!feedbackRes.ok) {
        throw new Error(responseData.error || "Failed to submit feedback");
      }

      const unsubRes = await fetch("/api/unsubscribe", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!unsubRes.ok) {
        throw new Error("Failed to unsubscribe");
      }
      setCurrentStep("success");
    } catch (error) {
      console.error("Error:", error);
      // Handle error (show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  const handleResubscribe = async () => {
    setIsLoading(true);
    const response = await fetch("/api/resubscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      console.log("Unsubscribed succeded");
      setIsLoading(false);
      setCurrentStep("resubscribed");
    }
  };

  const handleSkipFeedback = () => {
    setCurrentStep("success");
  };

  // Success State
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (currentStep === "success") {
    return (
      <div className="min-h-screen  bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full p-6 md:p-12 bg-white rounded-2xl ring-1 ring-neutral-300 max-w-xl text-center space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col gap-7 w-full justify-center items-center">
              <div className="bg-green-100 rounded-full">
                <TbMailCheck className="text-3xl m-4 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-sans tracking-tight font-semibold text-black">
                Unsubscribed Successfully
              </h1>
            </div>
            <p className="text-gray-700 font-inter tracking-tight">
              You've been successfully unsubscribed from our emails.
            </p>
            <div className="flex w-full justify-center items-center gap-4 pt-3">
              <button
                className="font-inter cursor-pointer font-semibold tracking-tight p-2 ring-1 ring-neutral-200 rounded-xl"
                onClick={handleResubscribe}
              >
                Resubscribe
              </button>
              <Link href={"/"}>
                <div className="flex items-center font-inter tracking-tight gap-2">
                  Go to Home Page
                  <TbArrowRightToArc className="text-lg" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep == "resubscribed") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full p-6 md:p-12 bg-white rounded-2xl ring-1 ring-neutral-300 max-w-xl text-center space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col gap-7 w-full justify-center items-center">
              <div className="bg-green-100 rounded-full">
                <TbMailCheck className="text-3xl m-4 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-sans tracking-tight font-semibold text-black">
                Welcome Back!
              </h1>
            </div>
            <p className="text-gray-700 font-inter tracking-tight">
              You've been successfully resubscribed to our emails. We're excited
              to have you back!
            </p>
            <div className="flex w-full justify-center items-center gap-4 pt-3">
              <Link href={"/"}>
                <div className="flex items-center font-inter tracking-tight gap-2 cursor-pointer hover:text-blue-600 transition-colors">
                  Go to Home Page
                  <TbArrowRightToArc className="text-lg" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Feedback State
  if (currentStep === "feedback") {
    return (
      <div className="h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full h-full overflow-y-scroll p-6 md:p-12 bg-white rounded-2xl ring-1 ring-neutral-300 max-w-xl text-center space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col gap-7 w-full justify-center items-center">
              <div className="bg-blue-100 rounded-full">
                <TbMessageCircle className="text-3xl m-4 text-blue-600" />
              </div>
              <h1 className="text-3xl font-sans tracking-tight font-semibold text-black">
                Help Us Improve
              </h1>
            </div>
            <p className="text-gray-700 font-inter tracking-tight">
              We'd love to know why you're leaving. Your feedback helps us
              improve our emails for everyone.
            </p>
          </div>

          {/* Reason Selection */}
          <div className="space-y-4 text-left">
            <p className="text-xs tracking-wider text-gray-500 uppercase">
              Why are you unsubscribing?
            </p>
            <div className="grid grid-cols-1 gap-2">
              {feedbackOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-3 rounded-xl cursor-pointer transition-colors ${
                    selectedReason === option
                      ? "bg-blue-50 ring-2 ring-blue-200"
                      : "bg-gray-50 hover:bg-gray-100 ring-1 ring-neutral-300"
                  }`}
                >
                  <input
                    type="radio"
                    value={option}
                    checked={selectedReason === option}
                    onChange={(e) => setSelectedReason(e.target.value)}
                    className="sr-only"
                  />
                  <span className="font-inter text-sm tracking-tight text-black">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Feedback */}
          <div className="space-y-2 text-left">
            <p className="text-xs tracking-wider text-gray-500 uppercase">
              Additional Comments (Optional)
            </p>
            <textarea
              style={{ fontSize: "16px" }}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us more about your experience..."
              className="w-full p-3 bg-gray-50 rounded-xl ring-1 ring-neutral-300 font-inter text-sm tracking-tight resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={handleFeedbackSubmit}
              disabled={isLoading || !selectedReason}
              className="w-full cursor-pointer p-3.5 md:p-4 bg-gradient-to-b from-neutral-700 via-neutral-800 ring-1 ring-gray-700 to-black text-white font-inter rounded-2xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit Feedback"}
            </button>

            <button
              onClick={handleSkipFeedback}
              className="w-full p-3.5 md:p-4 ring-1 ring-gray-300 text-black font-inter rounded-2xl font-medium hover:bg-gray-50 transition-colors"
            >
              Skip Feedback
            </button>
          </div>

          {/* Footer */}
          <span className="inline-flex w-full h-[1px] bg-gray-200"></span>
          <div className="flex text-sm font-inter tracking-tight items-center w-full justify-center gap-2">
            Need Help?
            <Link
              href="mailto:emandipietro@gmail.com"
              className="text-xs text-gray-500 hover:text-black transition-colors underline"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Initial Unsubscribe State
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full p-6 md:p-12 bg-white rounded-3xl ring-1 ring-neutral-300 max-w-xl text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-col gap-7 w-full justify-center items-center">
            <div className="bg-gray-100 rounded-full">
              <LuMail className="text-3xl m-4 text-gray-600" />
            </div>
            <h1 className="text-3xl font-sans tracking-tight font-semibold text-black">
              Unsubscribe
            </h1>
          </div>
          <p className="text-gray-700 font-inter tracking-tight">
            We're sorry to see you go. You can unsubscribe from our emails at
            any time.
          </p>
        </div>

        {/* Email Display */}
        <div className="py-2.5 md:py-3 px-4 bg-gray-50 rounded-2xl ring-1 ring-neutral-300">
          <p className="text-xs tracking-wider text-gray-500 uppercase mb-1">
            Email Address
          </p>
          <p className="font-inter font-semibold text-base tracking-tight text-black">
            {email}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleUnsubscribe}
            disabled={isLoading}
            className="w-full cursor-pointer py-3.5 md:py-4 px-4 bg-gradient-to-b from-neutral-700 via-neutral-800 ring-1 ring-gray-700 to-black text-white font-inter rounded-2xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? "Unsubscribing..." : "Confirm Unsubscribe"}
          </button>

          <Link href="/">
            <button className="cursor-pointer w-full py-3.5 md:py-4 px-4 ring-1 ring-gray-300 text-black font-inter rounded-2xl font-semibold hover:bg-gray-50 transition-colors">
              Keep Subscription
            </button>
          </Link>
        </div>

        {/* Footer */}
        <span className="inline-flex w-full h-[1px] bg-gray-200"></span>
        <div className="flex text-sm font-inter tracking-tight items-center w-full justify-center gap-2">
          Need Help?
          <Link
            href="mailto:emandipietro@gmail.com"
            className="text-xs text-gray-500 hover:text-black transition-colors underline"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnsubscribeClient;
