"use client"
// Next
import Image from "next/image"
// Media
import bg from "media/social-media-marketing/hero/bg.png"
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
                    <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal lg:absolute text-center max-w-[90%] mx-auto lg:mx-[inherit] mb-5 lg:mb-0 lg:max-w-[360px] lg:text-justify xl:text-left xl:max-w-[320px] 2xl:max-w-[350px] left-2 bottom-1 xl:bottom-[inherit] xl:top-[330px] 2xl:top-[400px]">
                        ClickFirstSMM helps ambitious brands and emerging entrepreneurs to tap the untapped marketing opportunities through the power of SOCIAL. With its celebrated team of advertising gurus and storytellers, the company sets the bar high in taking the marketing game to the next level.
                    </p>
                    <div className="flex justify-center mb-10 flex-col sm:flex-row lg:mb-0 lg:flex-col items-center gap-5 lg:absolute bottom-5 xl:bottom-[inherit] xl:top-[350px] 2xl:top-[410px] right-2">
                        <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                    </div>
                    <Image src={bg} alt="Click First SMM" priority className="mx-auto -z-10 max-w-[90%] 2xl:max-w-full" />
                </div>
                {isLargeScreen &&
                    <>
                        <AutoScrollSlider direction="backward" emblaWrapper="flex [margin-left:calc(4rem_*_-1)] items-center" wrapperCss="rotate-[5deg] absolute bottom-14 py-3 px-3 -ml-5 -mr-5 bg-secondary">
                            {
                                ["Social Media Marketing", "Social Media Marketing", "Social Media Marketing", "Social Media Marketing"].map((e, i) => (
                                    <div key={i} className="grow-0 shrink-0 basis-auto pl-16">
                                        <span className="text-[50px] font-bold leading-none">
                                            {e}
                                        </span>
                                    </div>
                                ))
                            }
                        </AutoScrollSlider>
                        <AutoScrollSlider emblaWrapper="flex [margin-left:calc(4rem_*_-1)] items-center" wrapperCss="rotate-[-5deg] absolute bottom-14 py-3 px-3 -ml-5 -mr-5 bg-secondary z-10">
                            {
                                ["Social Media Marketing", "Social Media Marketing", "Social Media Marketing", "Social Media Marketing"].map((e, i) => (
                                    <div key={i} className="grow-0 shrink-0 basis-auto pl-16">
                                        <span className="text-[50px] font-bold leading-none">
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
