import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ActiveLink } from "@/components/active-link";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black backdrop-blur supports-[backdrop-filter]:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80 lg:py-2">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Vivências</ActiveLink>
            <Button variant="default" asChild>
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
