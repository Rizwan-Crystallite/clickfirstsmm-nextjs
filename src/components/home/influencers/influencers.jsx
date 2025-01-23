"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
// React
import React, { useState, useEffect, useCallback } from "react"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "@/components/sliders/sliderarrows"
import { Thumbs } from "./thumbs"
import { CTA } from "@/components"
// Media
import thumb1 from "media/home/influencer/1.webp"
import thumb2 from "media/home/influencer/2.webp"
import thumb3 from "media/home/influencer/3.webp"
import thumb4 from "media/home/influencer/4.webp"
import thumb5 from "media/home/influencer/5.webp"
import thumb6 from "media/home/influencer/6.webp"
import mobile from "media/home/influencer/mobile.webp"
import tiktok from "media/home/influencer/tiktok.webp"
import instagram from "media/home/influencer/instagram.webp"
import facebook from "media/home/influencer/facebook.webp"
import youtube from "media/home/influencer/youtube.webp"
// Next
import Image from "next/image"
// Css
import "./influencers.css"

const slides = [
    {
        img: thumb1,
        video: "https://player.vimeo.com/progressive_redirect/playback/1025063978/rendition/540p/file.mp4?loc=external&log_user=0&signature=02ebd2a8fbff11f6fe06adbfe189adf9506dfbda21df41aeb83f26c7502783b8",
        name: "@kyleecampbell"
    },
    {
        img: thumb2,
        video: "https://player.vimeo.com/progressive_redirect/playback/1025066224/rendition/540p/file.mp4?loc=external&log_user=0&signature=589bc503bbfb3377f50a87e596df64f3543a90ca101848e92666e8cbfdb9e24e",
        name: "@micheleonstyle"
    },
    {
        img: thumb3,
        video: "https://player.vimeo.com/progressive_redirect/playback/1025066183/rendition/540p/file.mp4?loc=external&log_user=0&signature=d60b9c6c1be26d9bfcd089e1b0aebe6f3bc4911e72cc4d57b2292c4ddc69e5bf",
        name: "@ListingWithLexi"
    },
    {
        img: thumb4,
        video: "https://player.vimeo.com/progressive_redirect/playback/1025066071/rendition/540p/file.mp4?loc=external&log_user=0&signature=fbbac44e3d0eeb333a532fceac85f85874950d743f06bf085bd4bc9f0d184d10",
        name: "@jaime_gabaldoni"
    },
    {
        img: thumb5,
        video: "https://player.vimeo.com/progressive_redirect/playback/1025066007/rendition/540p/file.mp4?loc=external&log_user=0&signature=04557d6ef0d237fc372457c09cf4310b9bdbfd7d5b731e6fd00ce0d964d5b467",
        name: "@blissedhappiness"
    },
    {
        img: thumb6,
        video: "https://player.vimeo.com/progressive_redirect/playback/1025066285/rendition/540p/file.mp4?loc=external&log_user=0&signature=478c00d417bc2876a742d265cac88b2ecf8d8c9dccb0ec195779ab357cae78a3",
        name: "@pbadvancedaesthetics"
    }
]

export default function Influencers() {
    const [selectedIn, setSelectedIn] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaApi || !emblaThumbsApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaApi || !emblaThumbsApi) return
        setSelectedIn(emblaApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
    }, [emblaApi, emblaThumbsApi, setSelectedIn])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()

        emblaApi.on("select", onSelect).on("reInit", onSelect)
    }, [emblaApi, onSelect])

    return (
        <section>
            <div className="py-[100px] influencers_slider">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                        <div className="lg:col-span-7">
                            <h2 className="text-[27px] sm:text-[35px] md:text-[40px] lg:text-[40px] xl:text-[42px] 2xl:text-[48px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">Skyrocket Your Brand</span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">with Influencer Stardom</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Boost your brand's visibility with influencer marketing from Click First SMM. Our expert strategists excel in creating genuine, impactful partnerships with top niche influencers. By tapping into their loyal followers and leveraging their trust, we'll help you reach your target audience, build credibility, and drive a surge in website traffic and conversions.
                                </p>
                                <p>
                                    Eliminate the guesswork with Click First SMM's data-driven influencer marketing approach. We'll connect you with the ideal influencers, design engaging campaigns, and deliver measurable results that elevate your business. Amplify your reach and enhance your brand with Click First SMM's influencer marketing expertise.
                                </p>
                            </div>
                            <CTA css="hover:bg-secondary" theme="primary" size="large" />
                            <div className="overflow-hidden" ref={emblaThumbsRef}>
                                <div className="flex [margin-left:calc(1rem_*_-1)] mt-7">
                                    {slides.map(({ img, name }, i) => (
                                        <div key={i} className="grow-0 shrink-0 basis-[272px] sm:basis-1/2 md:basis-1/3 lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4 pl-4">
                                            <Thumbs
                                                onClick={() => onThumbClick(i)}
                                                selected={i === selectedIn}
                                                index={i}
                                                img={img}
                                                name={name}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-5 justify-end mt-5">
                                <div className="flex gap-5 justify-end">
                                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 mt-[50px] lg:mt-0">
                            <div className="overflow-x-clip" ref={emblaRef}>
                                <div className="flex [margin-left:calc(1rem_*_-1)]">
                                    {slides.map(({ video }, i) => (
                                        <div key={i} className="grow-0 shrink-0 pl-4 basis-full">
                                            <div className="max-w-[240px] sm:max-w-[373px] h-[480px] sm:h-[746px] mx-auto  relative">
                                                <Image src={tiktok} alt="Click First SMM" className="lg:hidden xl:block absolute -top-[20px] -left-[50px] z-10 animate-bounce-slow" />
                                                <Image src={instagram} alt="Click First SMM" className="lg:hidden xl:block absolute top-0 -right-[50px] 2xl:-right-[60px] z-10 animate-bounce-slow" />
                                                <Image src={facebook} alt="Click First SMM" className="lg:hidden xl:block absolute top-[400px] -left-[50px] 2xl:-left-[60px] z-10 animate-bounce-slow" />
                                                <Image src={youtube} alt="Click First SMM" className="lg:hidden xl:block absolute bottom-0 -right-[50px] 2xl:-right-[80px] z-10 animate-bounce-slow" />
                                                <Image src={mobile} alt="Click First SMM" fill={true} sizes="100vh" className="object-contain object-center" />
                                                <video
                                                    preload="none"
                                                    loop
                                                    autoPlay
                                                    muted
                                                    playsInline
                                                    aria-label="Video"
                                                    loading="lazy"
                                                    className="w-full h-full object-cover rounded-[60px]"
                                                >
                                                    <source
                                                        src={video}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}