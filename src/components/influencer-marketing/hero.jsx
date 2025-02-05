"use client"
// Next
import Image from "next/image"
// Media
import bg from "media/influencer-marketing/hero/bg.png"
// Components
import { AutoScrollSlider, CTA } from "@/components"
// React
import { useEffect, useState } from "react"

export default function Hero() {
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1200)
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <section>
            <div className="bg-primary pt-[150px] text-white relative z-10 overflow-hidden">
                <div className="container relative z-10">
                    <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal lg:absolute text-center max-w-[90%] mx-auto lg:mx-[inherit] mb-5 lg:mb-0 lg:max-w-[270px] lg:text-justify xl:text-left xl:max-w-[335px] 2xl:max-w-[300px] left-2 bottom-1 xl:bottom-[inherit] xl:top-[270px] 2xl:top-[400px]">
                        Boost your brand's presence with powerful influencer marketing strategies. Partner with key influencers to reach wider audiences, build trust, and drive meaningful engagement for lasting impact.
                    </p>
                    <div className="flex justify-center mb-10 flex-col sm:flex-row lg:mb-0 lg:flex-col items-center gap-5 lg:absolute bottom-5 xl:bottom-[inherit] xl:top-[280px] 2xl:top-[410px] right-2">
                        <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                    </div>
                    <Image src={bg} alt="Click First SMM" priority className="mx-auto -z-10 max-w-[90%] 2xl:max-w-full" />
                </div>
                {isLargeScreen &&
                    <>
                        <AutoScrollSlider direction="backward" emblaWrapper="flex [margin-left:calc(4rem_*_-1)] items-center" wrapperCss="rotate-[3deg] absolute bottom-[1.5rem] py-3 px-3 -ml-5 -mr-5 bg-secondary">
                            {
                                ["Twitter (X)", "Facebook", "Youtube", "Instagram", "Tiktok", "Twitter (X)", "Facebook", "Youtube", "Instagram", "Tiktok"].map((e, i) => (
                                    <div key={i} className="grow-0 shrink-0 basis-auto pl-16">
                                        <span className="text-[50px] font-bold leading-none uppercase">
                                            {e}
                                        </span>
                                    </div>
                                ))
                            }
                        </AutoScrollSlider>
                        <AutoScrollSlider emblaWrapper="flex [margin-left:calc(4rem_*_-1)] items-center" wrapperCss="rotate-[-6deg] absolute bottom-[8.5rem] py-3 px-3 -ml-5 -mr-5 bg-secondary z-10">
                            {
                                ["Twitter (X)", "Facebook", "Youtube", "Instagram", "Tiktok", "Twitter (X)", "Facebook", "Youtube", "Instagram", "Tiktok"].map((e, i) => (
                                    <div key={i} className="grow-0 shrink-0 basis-auto pl-16">
                                        <span className="text-[50px] font-bold leading-none uppercase">
                                            {e}
                                        </span>
                                    </div>
                                ))
                            }
                        </AutoScrollSlider>
                    </>
                }
            </div>
        </section>
    )
}
