"use client";

import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarProps = {
    fullName: string;
    avatar: string;
    email: string;
};

export default function Sidebar({ fullName, avatar, email }: SideBarProps) {
    const pathname = usePathname();
    return (
        <aside className='sidebar'>
            <Link href='/'>
                <Image
                    src='/assets/icons/logo-full-brand.svg'
                    alt='Logo'
                    width={160}
                    height={50}
                    className='hidden h-auto lg:block'
                />

                <Image
                    src='/assets/icons/logo-brand.svg'
                    alt='Logo'
                    width={52}
                    height={52}
                    className='lg:hidden'
                />
            </Link>
            <nav className='sidebar-nav'>
                <ul className='flex flex-1 flex-col gap-6'>
                    {navItems.map(({ url, icon, name }) => (
                        <Link
                            href={url}
                            key={name}
                            className='lg:w-full'
                        >
                            <li
                                className={cn(
                                    "sidebar-nav-item",
                                    pathname === url && "shad-active"
                                )}
                            >
                                <Image
                                    src={icon}
                                    alt={name}
                                    width={24}
                                    height={24}
                                    className={cn(
                                        "nav-icon",
                                        pathname === url && "nav-item-active"
                                    )}
                                />
                                <p className='hidden lg:block'>{name}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
            <Image
                src='/assets/images/files-2.png'
                alt='File'
                width={506}
                height={418}
                className='w-full'
            />

            <div className='sidebar-user-info'>
                <Image
                    src={avatar}
                    alt='Avatar'
                    width={44}
                    height={44}
                    className='sidebar-user-avatar'
                />
                <div className='hidden lg:block'>
                    <p className='subtitle-2 capitalize'>{fullName} </p>
                    <p className='caption'>{email} </p>
                </div>
            </div>
        </aside>
    );
}
