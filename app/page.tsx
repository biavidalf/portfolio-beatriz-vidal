import Image from "next/image";
import Navigation from "@/app/_components/navigation/navigation";
import { navItemsLabels } from "./_components/navigation/nav-items-labels";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 lg:gap-20 min-h-screen max-h-screen overflow-hidden w-full">
      <Navigation />

      <main className="w-full justify-center flex flex-col-reverse md:flex-row gap-6 lg:gap-10">
        <Image src="/home-photo-3.jpg" width={1200} height={1000} className="self-end w-[250px] h-[400px] lg:w-[350px] lg:h-[500px] object-cover overflow-hidden" alt="Foto Beatriz Vidal" />
        
        {/* Navegação inicial para mobile */}
        <div className="md:hidden w-[250px] ml-auto mt-10">
          <ul className="flex flex-col text-lg gap-2">
            {navItemsLabels.map(item => <div className={cn("flex items-center gap-2 opacity-90", item.label === "Início" && "italic font-medium opacity-100")}>{item.label} <ArrowRightIcon className={cn("size-6", item.label === 'Início' && 'hidden')} /> </div>)}
          </ul>
        </div>
        
        <div className="flex flex-col justify-between px-10 md:px-0 gap-6 md:gap-8">
          <div className="italic font-medium uppercase tracking-tight text-6xl leading-18 lg:text-8xl lg:leading-26">
            <h1>Beatriz</h1>
            <h1>Vidal</h1>
          </div>

          <div className="flex md:flex-col flex-wrap text-lg lg:text-2xl gap-y-1 gap-x-4">
            <h2>Pessoas</h2>
            <h2>Tecnologia</h2>
            <h2>Gestão</h2>
            <h2>Design</h2>
            <h2>Desenvolvimento</h2>
          </div>

        </div>
      </main>
    </div>
  );
}
