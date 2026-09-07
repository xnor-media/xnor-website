"use client";

import { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactModal() {
  const { isOpen, close } = useContactModal();
  const [status, setStatus] = useState<Status>("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-[10000] flex items-center justify-center
        bg-black/70 backdrop-blur-sm px-4
      "
      onClick={close}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-[480px] rounded-[22px] border
          border-white/15 bg-[#150f15] p-6 text-white
          sm:p-8
        "
        style={{
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(144,10,156,0.15)",
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="
            absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center
            justify-center rounded-full border border-white/15
            text-white/70 transition hover:border-[#900a9c]/60
            hover:text-white
          "
        >
          <X size={16} />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle2 size={40} className="text-[#c34fd1]" />
            <h3 className="mt-4 text-lg font-semibold">Message sent!</h3>
            <p className="mt-2 text-sm text-white/60">
              Thanks for reaching out — we'll get back to you soon.
            </p>
            <button
              onClick={close}
              className="mt-6 rounded-full border border-white/20 px-5 py-2 text-sm cursor-pointer hover:border-[#900a9c]/60"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold sm:text-2xl">
              Let's Talk
            </h3>
            <p className="mt-2 text-sm text-white/55">
              Tell us a bit about your project and we'll be in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="
                  rounded-[12px] border border-white/15 bg-white/[0.04]
                  px-4 py-3 text-sm outline-none transition
                  placeholder:text-white/35 focus:border-[#900a9c]/70
                "
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="
                  rounded-[12px] border border-white/15 bg-white/[0.04]
                  px-4 py-3 text-sm outline-none transition
                  placeholder:text-white/35 focus:border-[#900a9c]/70
                "
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
                className="
                  rounded-[12px] border border-white/15 bg-white/[0.04]
                  px-4 py-3 text-sm outline-none transition
                  placeholder:text-white/35 focus:border-[#900a9c]/70
                "
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="What are you looking to create?"
                className="
                  resize-none rounded-[12px] border border-white/15
                  bg-white/[0.04] px-4 py-3 text-sm outline-none
                  transition placeholder:text-white/35
                  focus:border-[#900a9c]/70
                "
              />

              {/* Honeypot field to reduce spam — hidden from real users */}
              <input type="checkbox" name="botcheck" className="hidden" />

              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  mt-2 flex h-12 items-center justify-center gap-2
                  rounded-full bg-[#900a9c] text-sm font-medium
                  text-white transition hover:bg-[#a20cae]
                  disabled:opacity-60
                "
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {status !== "loading" && <Send size={15} />}
              </button>

              {status === "error" && (
                <p className="text-center text-xs text-red-400">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}