import React, { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Zoom Clone",
    description: "Video calling app",
    icons: {
        icon: '/icons/logo.svg'
    }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>
                {children} {/*Wrap all the other pages within it*/}
            </StreamVideoProvider>
        </main>
    )
}
export default RootLayout
