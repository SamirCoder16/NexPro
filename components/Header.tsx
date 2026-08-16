import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import PricingModal from "./PricingModal";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 h-16 w-full border-b border-white/6 bg-white/7 backdrop-blur-md ">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-3 sm:px-6">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Logo"
            height={100}
            width={100}
            className="h-10 w-auto rounded-md hover:scale-105 shadow-lg hover:shadow-white/15 transition-all duration-300"
            loading="eager"
          />
        </Link>

        <div className="flex items-center gap-5">
          <Show when="signed-in">
            <Link
              href={"/projects"}
              className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80"
            >
              Projects
            </Link>

            <PricingModal reason="upgrade" >
              <span className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/6 bg-white/10 px-3 py-1 text-[13px] font-medium text-white/70">
              <Zap className="h-3 w-3 fill-white/70" />3 / 40 credits
            </span>
            </PricingModal>


            <UserButton />
          </Show>

          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 rounded-full font-semibold active:scale-95 px-4 py-0.5"
              >
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                size="sm"
                className="h-8 rounded-full font-semibold active:scale-95 px-4 py-0.5"
              >
                Get started
                <ArrowRight className="h-3 w-3 opacity-60" />
              </Button>
            </SignUpButton>
          </Show>
        </div>
      </nav>
    </header>
  );
};

export default Header;
