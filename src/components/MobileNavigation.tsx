"use client";

import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function MobileNavigation() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    return (
        <header className='mobile-header'>
            <Image
                src='/assets/icons/logo-full-brand.svg'
                alt='Logo'
                width={120}
                height={52}
                className='h-auto'
            />
            <Sheet
                open={open}
                onOpenChange={setOpen}
            >
                <SheetTrigger>
                    <Image
                        src='/assets/icons/menu.svg'
                        alt='Search'
                        width={30}
                        height={30}
                    />
                </SheetTrigger>
                <SheetContent className="shad-sheet h-screen px-3">
                    <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </header>
    );
}
