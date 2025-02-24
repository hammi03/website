import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
// @ts-ignore
import Spline from "@splinetool/react-spline/next";

export default function Home() {
    return (
        <section className=" h-full w-full">
            <div className="absolute inset-0 z-0">
                <Spline
                    className="pointer-events-auto" /* Ensures interaction is enabled */
                    scene="https://prod.spline.design/PEZfY0k3OPTGjkjP/scene.splinecode"
                />
            </div>

            <div
                className="relative z-10 flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full"
                style={{ pointerEvents: "none" }} // Disable pointer events for content container
            >
                <div
                    className="inline-block max-w-xl text-center justify-center"
                    style={{ pointerEvents: "auto" }} // Re-enable pointer events for child elements
                >
                    <span className={title()}>Test out the&nbsp;</span>
                    <Link href="/hammitron">
                        <span className={title({ color: "violet" })}>HAMMITRON&nbsp;</span>
                    </Link>
                    <br />

                </div>
                <div
                    className="flex gap-3"
                    style={{ pointerEvents: "auto" }}
                >
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "primary",
                            radius: "full",
                            variant: "shadow",
                        })}
                        href={siteConfig.links.docs}
                    >
                        Get started!
                    </Link>
                    <Link
                        isExternal
                        className={buttonStyles({ variant: "bordered", radius: "full" })}
                        href={siteConfig.links.github}
                    >
                        <GithubIcon size={20} />
                        View the code on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}