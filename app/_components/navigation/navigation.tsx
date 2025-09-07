import { ChatBubbleOvalLeftIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline"
import NavlistItem from "./nav-list-item"
import NavList from "./nav-list"

function Navigation() {
  return (
    <nav className="flex justify-between w-full px-10 text-muted-foreground">
      <span className="pt-6 font-semibold">Beatriz Vidal</span>

      <NavList />

      <div className="flex items-center gap-2 pt-6">
        <GlobeAmericasIcon className="size-6" />
        <ChatBubbleOvalLeftIcon className="size-6" />
      </div>
    </nav>
  )
}

export default Navigation
