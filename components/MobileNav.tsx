"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";
import {usePathname} from "next/dist/client/components/navigation";

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-66">
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/icons/hamburger.svg"
                        width={36}
                        height={36}
                        alt="hamburger icon"
                        className="cursor-pointer sm:hidden"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-dark-1">
                    <Link href="/" className="flex items-center gap-1 p-6">
                        <Image
                            src="/icons/logo.svg"
                            width={32}
                            height={32}
                            alt="Logo"
                        />
                        <p className="text-[26px] font-extrabold text-white">Yoom</p>
                    </Link>

                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 p-6 pt-16 text-white">
                                {sidebarLinks.map((link) => {
                                    const isActive = pathname === link.route;

                                    return(
                                        <SheetClose asChild key={link.route}>
                                            <Link
                                                href={link.route}
                                                key={link.label}
                                                className={cn('flex gap-4 items-center p-4 rounded-lg w-full', {
                                                    'bg-blue-1': isActive, /*only trigger if is active*/
                                                })}
                                            >
                                                <Image
                                                    src={link.imgUrl}
                                                    alt={link.label}
                                                    width={20}
                                                    height={20}
                                                />
                                                <p className="font-semibold">
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}
export default MobileNav
