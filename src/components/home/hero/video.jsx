"use client"
// Next 
import Image from "next/image"
// React
import { useEffect, useState } from "react"
// Media
import clouds from "media/home/hero/clouds.webp"
import left from "media/home/hero/left.webp"
import right from "media/home/hero/right.webp"

export default function Video() {
    const [isLargeScreen, setIsLargeScreen] = useState(true)

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth >= 992 ? setIsLargeScreen(true) : setIsLargeScreen(false)
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    if (!isLargeScreen) return (
        <>
            <Image src={left} priority alt="Click First SMM" className="absolute top-[100px] left-0 -z-10 w-[200px] opacity-30 animate-bounce-slow" />
            <Image src={clouds} priority alt="Click First SMM" className="absolute -bottom-[100px] left-0 right-0 -z-10 mx-auto opacity-30 animate-bounce-slow" />
            <Image src={right} priority alt="Click First SMM" className="absolute top-[100px] right-0 -z-10 w-[200px] opacity-30 animate-bounce-slow" />
        </>
    )

    if (isLargeScreen) return (
        <>
            <video
                preload="none"
                loop
                autoPlay
                muted
                playsInline
                aria-label="Video"
                poster="/home/hero/poster.webp"
                className="w-full h-full max-w-full max-h-full object-cover object-bottom -z-[1]"
            >
                <source
                    src="https://player.vimeo.com/progressive_redirect/playback/1045101087/rendition/1080p/file.mp4?loc=external&log_user=0&signature=1764f34a2b55a4172a69ce3bfb2f3a0b3ce83d2d84e9281ddd715d50c6f9e690"
                    type="video/mp4"
                />
            </video>
        </>
    )
}