import React from "react";

export default function AboutLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (

        <section className="flex flex-col items-center justify-center gap-4  w-full">
            <div className="w-full max-w-screen-xl text-center">
                {children}
            </div>
        </section>
    );
}