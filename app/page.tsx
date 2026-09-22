"use client";

import { Badge } from "@/components/ui/badge";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import {
  BlueTitle,
  GrayTitle,
  SectionHeading,
  SectionLabel,
} from "@/components/reusable";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, lazy } from "react";
import { PricingTable, SignInButton, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { FEATURES, PLACEHOLDERS, STEPS, SUGGESTIONS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

// using lazy loading for StaticMockup to avoid hydration error since it uses window object
const StaticMockup = lazy(() => import("@/components/StaticMockup"));

export default function Home() {
  const { isSignedIn } = useAuth();

  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [prompt, setPrompt] = useState("");
  const [placeHolderIndex, setPlaceHolderIndex] = useState(0); // placeholder index for cycling through placeholders means the current placeholder being displayed
  const [isFocused, setIsFocused] = useState(false);

  // This useEffect is for cycling through the placeholders every 3 seconds if the textarea is not focused and has no text
  useEffect(() => {
    if (isFocused || prompt) return; // if the textarea is focused or has text, do not cycle placeholders

    const interval = setInterval(() => {
      setPlaceHolderIndex((prevIndex) => (prevIndex + 1) % PLACEHOLDERS.length);
    }, 3000); // change placeholder every 3 seconds
    return () => {
      clearInterval(interval);
    };
  }, [isFocused, prompt]); // run the effect when isFocused or prompt changes

  // This useEffect for max height of the textarea 200px and auto height for the textarea when the user types in it
  useEffect(() => {
    const el = textareaRef.current;
    console.log(el);
    if (!el) return;
    el.style.height = "auto"; // reset the height to auto to recalculate
    el.style.height = Math.min(el.scrollHeight, 200) + "px"; // set the height to the scrollHeight but not more than 200px
  }, [prompt]);

  const submitHandler = () => {
    if (!prompt.trim() || !isSignedIn) return; // if prompt is empty or user is not signed in, do nothing
    router.push(`/workspace?prompt=${encodeURIComponent(prompt)}`);
  };

  // SUbmit in Enter , allow Shift + Enter for new line
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      // Submit the prompt
      submitHandler();
    }
  };

  const handleSuggestion = (s: string) => {
    setPrompt(s);
    textareaRef.current?.focus();
  };

  // calculate date for copyright year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-white/20">
      <section className="relative flex flex-col items-center overflow-hidden px-4 pb-24 pt-40 text-center">
        {/* <HoleBackground
          strokeColor="rgba(255, 255, 255, 0.05)"
          className="absolute inset-0 h-full w-full"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          }}
        /> */}
        <Badge variant={"outline"} className="gap-2 p-4 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 rounded-full animate-pulse bg-emerald-400" />
          Powered by Gemini 3.5 Flash
        </Badge>
        <h1 className="sm:mt-7 mt-4 mx-auto max-w-3xl text-balance font-serif text-5xl leading-tight tracking-tight sm:text-5xl lg:text-7xl z-10 ">
          <GrayTitle>Describe it</GrayTitle>
          <br />
          <BlueTitle>We&apos;ll build it.</BlueTitle>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/40 z-10">
          Describe what you want to build . AI writes the code, picks the
          packages, and renders a live preview all inside your browser
        </p>

        {/* Prompt box */}

        <div className="relative mx-auto mt-12 w-full max-w-2xl">
          <div
            className={cn(
              "rounded-2xl border bg-[#111111] duration-200",

              isFocused
                ? "border-white/20 ring-1 ring-white/8"
                : "border-white/8",
            )}
          >
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              rows={1}
              className="w-full resize-none bg-transparent px-5 pb-4 pt-5 text-sm placeholder:text-white/20 focus:outline-none sm:text-base"
              style={{ minHeight: 56, maxHeight: 200 }}
              placeholder={PLACEHOLDERS[placeHolderIndex]}
            />

            <div className="relative min-h-12 flex items-center justify-between border-t border-white/6 px-4 py-2.5">
              <span className="hidden sm:block">
                Press{" "}
                <kbd className="rounded border bg-white/5 px-1.5 py-0.5 text-xs font-medium text-white/50">
                  Enter
                </kbd>{" "}
                to generate .{" "}
                <kbd className="rounded border bg-white/5 px-1.5 py-0.5 text-xs font-medium text-white/50">
                  Shift + Enter
                </kbd>{" "}
                for new line .
              </span>
              {isSignedIn ? (
                <Button
                  onClick={submitHandler}
                  disabled={!prompt.trim()}
                  variant={prompt.trim() ? "default" : "secondary"}
                  className="absolute sm:right-3 right-2"
                >
                  Generate
                </Button>
              ) : (
                <SignInButton mode="modal">
                  <Button className="absolute right-2 h-8 rounded-full bg-white px-5 font-semibold">
                    Sign in to Generate
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </SignInButton>
              )}
            </div>
          </div>

          <div className="sm:mt-8 mt-4 flex flex-wrap justify-center gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => handleSuggestion(s)}
                className="rounded-b-full border border-white/8 bg-wihte/4 px-4 py-1.5 text-xs text-white/40 hover:border-white/15 hover:bg-white/8 hover:text-white/70"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-white/20">
          Start for free — no credit card required. Get 10 free generations.
        </p>
      </section>

      {/* Static mockup  */}
      <StaticMockup />
      {/* Feature Section */}
      <section className="px-4 pb-32">
        <div className="mx-auto mb-14 max-w-5xl text-center rounded-2xl">
          <SectionLabel>Everything you need</SectionLabel>
          <SectionHeading greyText="From prompt" blueText="to production" />
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group bg-[#0a0a0a] p-7 hover:bg-[#0f0f0f]"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/4 group-hover:border-white/15 group-hover:bg-white/8">
                <Icon className="h-4 w-4 text-white/60 group-hover:text-blue-400/70" />
              </div>
              <p className="mb-2 text-sm font-semibold ">{label}</p>
              <p className="text-sm leading-relaxed text-white/40">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-32">
        <div className="mx-auto mb-14 max-w-5xl text-center rounded-2xl">
          <SectionLabel>How it works</SectionLabel>
          <SectionHeading greyText="Four steps" blueText="to a working app" />
        </div>

        <div className="mx-auto max-w-3xl">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4">
                  <span className="font-mono text-xs font-semibold text-white/50">
                    {step.number}
                  </span>
                </div>

                {i < STEPS.length - 1 && (
                  <div className="mt-2 h-9 w-px bg-white/10" />
                )}
              </div>

              <div className="pb-10 pt-1.5">
                <p className="mb-1.5 text-sm font-semibold sm:text-base">
                  {step.label}
                </p>
                <p className="text-sm leading-relaxed text-white/40">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-32">
        <div className="mx-auto mb-14 max-w-5xl text-center rounded-2xl">
          <SectionLabel>Simple pricing</SectionLabel>
          <SectionHeading greyText="Start free," blueText="scale when ready" />

          <p className="mx-auto mt-4 max-w-sm text-sm text-white/35">
            No credit card required. Upgrade to downgrade anytime.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <PricingTable
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: {
                    zIndex: 2000,
                  },
                },
              },
            }}
          />
        </div>
      </section>

      <section className="relative mx-auto mb-32 max-w-5xl overflow-hidden rounded-2xl border border-white/8 px-10 py-24 text-center">
        {/* <HoleBackground
          strokeColor="rgba(255, 255, 255, 0.05)"
          className="absolute inset-0 h-full w-full"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          }}
        /> */}

        <SectionHeading greyText="Start building" blueText="for free" />

        <p className="mb-8 text-sm leading-relaxed text-white/40">
          Get 10 free generations on sign-up . No credit card required.
          <br />
          Upgrade when you&apos;re ready.
        </p>

        <SignInButton mode="modal">
          <Button
            size="lg"
            className="relative h-11 rounded-full bg-white px-8"
          >
            Get started for free
            <ChevronRight className="h-4 w-4" />
          </Button>
        </SignInButton>
      </section>

      <footer className="relative z-10 border-t border-white/7 py-12 mx-auto px-6 flex flex-wrap items-center justify-center text-stone-400 gap-6">
        made with ❤️ by Samir Parvez
        <p className="text-xs text-white/35">
          &copy; {currentYear} all right reserved
        </p>
      </footer>
    </main>
  );
}
