import { cn } from "@/lib/utils"

function NavlistItem({ label, isActive = false }: { label: string, isActive?: boolean }) {
    return (
        <li className={cn("group flex flex-col items-center justify-start h-full gap-2 hover:text-foreground transition-all duration-300", isActive && "text-foreground italic")}><span className={cn("w-[1px] h-3 bg-muted-foreground group-hover:h-6 group-hover:bg-foreground transition-all duration-500", isActive && "h-6 bg-foreground")}></span>{label}</li>
    )
}

export default NavlistItem
