"use client";

import { type SetStateAction, useState, useRef, useEffect } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { IoIosAlert } from "react-icons/io";
import Button3D from "../ui/neumorphism-button/button-3d";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "exists">(
    "idle"
  );
  const [validation, setValidation] = useState(false);
  const [showValidationError, setShowValidationError] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [touched, setTouched] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (status === "success") {
      setIsVisible(true); // trigger animazione entrata
    }
  }, [status]);

  // Debounced validation effect
  useEffect(() => {
    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Only set up debounced validation if user has typed something and it's not valid
    if (email.length > 0 && touched) {
      const isValid = validateEmail(email);
      setValidation(isValid);

      if (!isValid) {
        debounceTimerRef.current = setTimeout(() => {
          setShowValidationError(true);
          setValidationMessage("Please enter a valid email address");
        }, 800); // 800ms delay
      } else {
        setShowValidationError(false);
        setValidationMessage("");
      }
    } else if (email.length === 0) {
      setValidation(false);
      setShowValidationError(false);
      setValidationMessage("");
    }

    // Cleanup timer on unmount
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [email, touched]);

  const handleEmail = (e: { target: { value: SetStateAction<string> } }) => {
    const emailValue = String(e.target.value);
    setEmail(emailValue);
    setTouched(true);

    // Immediately hide validation error when user starts typing
    setShowValidationError(false);
    setValidationMessage("");

    // Reset status when user starts typing again
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleBlur = () => {
    if (email.length > 0 && !validation) {
      // Clear debounce timer and show error immediately on blur
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      setShowValidationError(true);
      setValidationMessage("Please enter a valid email address");
    }
  };

  const postEmail = async () => {
    if (!buttonRef.current) return;

    // Check validation before submitting
    if (!validation) {
      setShowValidationError(true);
      setValidationMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setShowValidationError(false);

    try {
      buttonRef.current.disabled = true;

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.ok) {
        console.log(email);
        setStatus("success");
        setEmail("");
        setValidation(false);
        setTouched(false);
      } else if (response.status == 409) {
        setStatus("exists");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatus("error");
    } finally {
      if (buttonRef.current) {
        buttonRef.current.disabled = false;
      }
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsVisible(false); // fade out
    setTimeout(() => {
      setStatus("idle"); // dopo 300ms (durata animazione), smonta
    }, 300);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (status === "success") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [status]);

  // Close modal with escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (status === "success") {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [status]);

  const disabled = email.length === 0 || !validation;

  return (
    <div className="relative">
      <div className="p-2 bg-white/90 ring-2 ring-neutral-200/50 rounded-2xl flex items-center transition-all shadow-lg shadow-neutral-300/50 focus-within:outline-none focus-within:ring-5 focus:ring-gray-300/70">
        <input
          type="email"
          inputMode="email"
          required
          value={email}
          placeholder="Enter your email"
          onChange={handleEmail}
          onBlur={handleBlur}
          style={{ fontSize: "16px" }}
          className="w-fit sm:w-[300px] text-sm md:text-base font-sans tracking-tight px-3 text-left text-gray-800 placeholder-gray-400 focus:outline-none overflow-hidden text-ellipsis"
          disabled={isSubmitting}
        />
        <Button3D
          ref={buttonRef}
          id={"join"}
          onclick={postEmail}
          disabled={isSubmitting || disabled}
          content={isSubmitting ? "Submitting..." : "Join the Waitlist"}
        />
      </div>

      {/* Validation error message */}
      {showValidationError && touched && (
        <p className="error-message">{validationMessage}</p>
      )}

      {/* Error message */}
      {status === "error" && (
        <p className="error-message">Something went wrong. Please try again.</p>
      )}

      {/* Error message */}
      {status === "exists" && (
        <p className="error-message flex gap-2 items-center">
          <IoIosAlert className="text-base" />
          This email has already been used. Please use another one.
        </p>
      )}

      {/* Thank you modal */}
      {status === "success" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
          <div
            ref={modalRef}
            className={`bg-white rounded-2xl shadow-xl max-w-md w-full p-3 transform transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
          >
            <span className="inline-flex overflow-clip items-center backdrop-blur-md justify-center w-full h-28 rounded-xl bg-gradient-to-br from-neutral-100 via-orange-100 to-pink-100">
              <div className="flex flex-col w-full items-center text-neutral-600 backdrop-blur-md opacity-15">
                {/* <p className="absolute text-4xl font-bold font-inter tracking-tighter">
                  Check your inbox
                </p> */}
                <IoIosMailOpen className=" text-9xl relative top-4" />
              </div>
            </span>

            <div className="flex flex-col p-3">
              <div className="flex mt-1 mb-3 justify-between items-start ">
                <h3 className="text-xl font-sans tracking-tight font-bold text-gray-900">
                  🎉 Thank You!
                </h3>
              </div>

              <div className="mb-6 font-inter tracking-tight text-base">
                <p className="text-gray-700  mb-4">
                  Thanks for joining my waitlist! I'll keep you updated on when
                  this will be available.
                </p>
                <p className="text-gray-700  mb-4">
                  Check your Inbox (or Spam if you can't see my email).
                </p>
                <p className="text-gray-700">
                  Follow me on social media for more updates:
                </p>
              </div>
              <div className="flex w-full justify-between items-end">
                <div className="flex w-full gap-3">
                  <a
                    href="https://x.com/emadpt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="ring-1 ring-neutral-200 rounded-lg p-2">
                      <BsTwitterX className="text-black" />
                    </div>
                  </a>

                  <div className="">
                    <a
                      href="https://www.youtube.com/@emanueledpt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2  rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="rounded-lg ring-1 ring-neutral-200 p-2">
                        <FaYoutube className="text-black" />
                      </div>
                    </a>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="rounded-lg tracking-tight font-inter font-medium text-sm bg-transparent hover:bg-neutral-100 ring-1 transition-colors ring-neutral-200 px-3 py-1"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
