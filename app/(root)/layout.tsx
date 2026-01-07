import React, { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";

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
