import { ArrowRight, BookOpenText, PersonStanding } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 p-8 relative flex items-center justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="text-gray-100 text-4xl sm:text-5xl font-bold text-center md:text-left">
            Seja bem-vindo à maior perda de tempo da sua semana.
          </h1>

          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <BookOpenText className="text-white h-4 w-4" />
                <span className="text-gray-200 text-sm sm:text-base">Se quer conteúdo relevante, boa sorte.</span>
              </div>
              <div className="flex items-center gap-2">
                <PersonStanding className="text-white h-4 w-4" />
                <span className="text-gray-200 text-sm sm:text-base">Pensamentos do Carlos.</span>
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start lg:items-start">
            <Button className="w-50 h-10" asChild>
              <Link href="/pensamentos">
                Boa sorte <ArrowRight />
              </Link>
            </Button>
            <p className="text-gray-200 text-xs sm:text-sm text-center md:text-left">
              Não espero que você goste. Mas se se identificar, senta aí e lê.
            </p>
          </div>
        </div>

        <div className="relative h-[15rem] md:h-[20rem] lg:h-full hidden md:flex items-center justify-center">
          <Image src="/hero-section.png" alt="Ilustração" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}
