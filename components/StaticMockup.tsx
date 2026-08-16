"use client"

import React from "react";

const StaticMockup: React.FC = () => {
  return (
    <section className="hidden sm:block relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0f] shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
        <div className="flex items-center gap-3 border-b border-white/8 bg-[#111214] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="ml-4 flex flex-1 items-center justify-center">
            <div className="flex w-full max-w-xl items-center gap-2 rounded-full border border-white/10 bg-[#1a1b1e] px-3 py-2 text-xs text-white/45">
              <span className="inline-block h-2.5 w-2.5 rounded-full border border-white/15 bg-emerald-400/80" />
              app.NexPro.dev/workspace
            </div>
          </div>
        </div>

        <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[1.07fr_1.4fr]">
          <div className="border-b border-white/6 bg-[#0f1115] lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-sm font-medium text-white/80">
                  AI
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    Workspace
                  </div>
                  <div className="text-[11px] text-white/35">
                    Project: branding-suite
                  </div>
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-white/3 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
                Live
              </div>
            </div>

            <div className="space-y-4 px-5 py-5">
              <div className="flex justify-end">
                <div className="max-w-[82%] rounded-2xl rounded-br-md bg-white/6 px-4 py-3 text-sm text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                  Create a premium startup landing page with strong CTAs and a
                  dark luxury aesthetic.
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-[86%] rounded-2xl rounded-bl-md bg-[#141922] px-4 py-3 text-sm text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                  I’ve drafted a polished landing page concept with a hero,
                  feature blocks, and pricing sections.
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-[#141922] px-4 py-3 text-sm text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                  <div className="mb-2 text-white/55">
                    I’m refining the layout and component hierarchy.
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white/55" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white/35 [animation-delay:0.15s]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-white/20 [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-[86%] rounded-2xl rounded-bl-md bg-[#141922] px-4 py-3 text-sm text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                  The next pass adds stronger contrast, motion, and
                  conversion-focused messaging.
                </div>
              </div>
            </div>

            <div className="mt-auto border-t border-white/8 bg-[#0d0f12] px-4 py-3">
              <div className="flex items-center gap-2 rounded-2xl border border-white/8 bg-[#12161d] px-3 py-2 text-sm text-white/35">
                <span className="text-lg text-white/60">✦</span>
                Design a modern SaaS homepage for a product launch
              </div>
            </div>
          </div>

          <div className="bg-[#0a0d12]">
            <div className="flex items-center justify-between border-b border-white/8 bg-[#101418] px-4 py-3">
              <div className="flex items-center gap-2 text-[11px] text-white/45">
                <span className="rounded bg-white/4 px-2 py-1 text-white/60">
                  app.tsx
                </span>
                <span className="rounded bg-white/4 px-2 py-1 text-white/60">
                  components.tsx
                </span>
                <span className="rounded bg-[#1d2430] px-2 py-1 text-white/80">
                  preview
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/25">
                <span>Preview</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-2xl border border-white/8 bg-[#0d1117] p-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-white/6 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/50">
                    Board
                  </div>
                  <div className="h-1.5 flex-1 rounded-full bg-white/6" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/8 bg-[#111821] p-3">
                    <div className="mb-3 flex items-center justify-between text-[11px] text-white/60">
                      <span>Todo</span>
                      <span className="rounded-full bg-white/6 px-1.5 py-0.5">
                        3
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg border border-white/8 bg-[#151d2a] p-2">
                        <div className="mb-2 h-2 w-16 rounded-full bg-white/12" />
                        <div className="h-2 w-28 rounded-full bg-white/8" />
                      </div>
                      <div className="rounded-lg border border-white/8 bg-[#151d2a] p-2">
                        <div className="mb-2 h-2 w-20 rounded-full bg-white/12" />
                        <div className="h-2 w-24 rounded-full bg-white/8" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/8 bg-[#111821] p-3">
                    <div className="mb-3 flex items-center justify-between text-[11px] text-white/60">
                      <span>In Progress</span>
                      <span className="rounded-full bg-white/6 px-1.5 py-0.5">
                        2
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg border border-white/8 bg-[#151d2a] p-2">
                        <div className="mb-2 h-2 w-20 rounded-full bg-white/12" />
                        <div className="h-2 w-24 rounded-full bg-white/8" />
                      </div>
                      <div className="rounded-lg border border-white/8 bg-[#151d2a] p-2">
                        <div className="mb-2 h-2 w-16 rounded-full bg-white/12" />
                        <div className="h-2 w-28 rounded-full bg-white/8" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/8 bg-[#111821] p-3">
                    <div className="mb-3 flex items-center justify-between text-[11px] text-white/60">
                      <span>Done</span>
                      <span className="rounded-full bg-white/6 px-1.5 py-0.5">
                        5
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg border border-white/8 bg-[#151d2a] p-2">
                        <div className="mb-2 h-2 w-20 rounded-full bg-white/12" />
                        <div className="h-2 w-24 rounded-full bg-white/8" />
                      </div>
                      <div className="rounded-lg border border-white/8 bg-[#151d2a] p-2">
                        <div className="mb-2 h-2 w-18 rounded-full bg-white/12" />
                        <div className="h-2 w-28 rounded-full bg-white/8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-[#0d1117] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-white/50">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Live preview
                  </div>
                  <div className="rounded-full border border-white/8 bg-white/3 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Build
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-3 w-2/3 rounded-full bg-white/10" />
                  <div className="h-3 w-1/2 rounded-full bg-white/8" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-xl bg-white/6" />
                    <div className="h-20 rounded-xl bg-white/5" />
                    <div className="h-20 rounded-xl bg-white/6" />
                  </div>
                  <div className="h-28 rounded-xl bg-gradient-to-br from-[#1e293b] via-[#111827] to-[#0a0d12]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Make it memoized so that it doesn't re-render every time the parent component re-renders
export default React.memo(StaticMockup);
