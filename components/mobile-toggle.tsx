import { Menu } from "lucide-react"

import {
    Sheet,
    SheetTrigger,
    SheetContent
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import NavigationSidebar from "./navigation/navigation-sidebar"
import ServerSidebar from "./server/server-sidebar"

interface MobileToggleProps{
    serverId: string;
}

export const MobileToggle = ({serverId}: MobileToggleProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost"
                    size="icon"
                    className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 flex gap-0">
                <div className="w-[72px]">
                    <NavigationSidebar/>
                </div>
                <ServerSidebar
                serverId={serverId}/>
            </SheetContent>
        </Sheet>
    )
}