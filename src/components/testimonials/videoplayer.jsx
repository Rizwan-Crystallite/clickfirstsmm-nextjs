"use client"
// React
import React, { useState, useRef } from "react"
// Next
import Image from "next/image"
// Media
import playBtn from "media/playbtn.webp"

export default function VideoPlayer({ src, thumbnail }) {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <>
            <video
                ref={videoRef}
                className={`${isPlaying ? "block" : "hidden"} w-full h-auto max-w-full`}
                autoPlay={isPlaying}
                preload="none"
                onClick={handlePlayPause}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {!isPlaying && (
                <div className="relative">
                    <Image src={thumbnail} alt="Click First SMM" className="mx-auto" />
                    <button
                        onClick={handlePlayPause}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        aria-label="Play Video"
                    >
                        <Image src={playBtn} alt="Click First SMM" />
                    </button>
                </div>
            )}
        </>
    )
}
