// Next
import Image from "next/image"
// Media
import bg from "media/social-media-management/hero/bg.png"
import one from "media/social-media-management/hero/slides/1.png"
import two from "media/social-media-management/hero/slides/2.png"
import three from "media/social-media-management/hero/slides/3.png"
import four from "media/social-media-management/hero/slides/4.png"
import five from "media/social-media-management/hero/slides/5.png"
import left from "media/social-media-management/hero/left.png"
import right from "media/social-media-management/hero/right.png"
// Components
import { AutoScrollSlider, CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary pt-[70px] lg:pt-[150px] mb-[100px]">
                <Image src={bg} alt="Click First SMM" fill placeholder="blur" sizes="100vw" className="object-cover -z-10" />
                <div className="container relative -bottom-[100px] z-10">
                    <Image src={left} alt="Click First SMM" className="absolute left-0 -z-20 top-0 animate-bounce-slow opacity-25 xl:opacity-100" />
                    <div className="text-center text-white max-w-[600px] lg:max-w-[750px] mx-auto mb-7">
                        <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                            Social Media Management
                        </p>
                        <h1 className="text-[25px] sm:text-[40px] lg:text-[50px] leading-snug font-semibold mb-4">
                            Social Media Management Is Our Core Strength!
                        </h1>
                        <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal">
                            Expand your audience and boost engagement with expert social media advertising. Target the right demographics and connect with potential customers like never before.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                        <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                    </div>
                    <Image src={right} alt="Click First SMM" className="absolute right-0 -z-20 top-0 animate-bounce-slow opacity-25 xl:opacity-100" />
                </div>
                <div className="relative -bottom-[150px]">
                    <AutoScrollSlider>
                        {
                            [one, two, three, four, five, one, two, three, four, five].map((e, i) => (
                                <div key={i} className="grow-0 shrink-0 basis-[300px] pl-4">
                                    <Image src={e} alt="Click First SMM" className=" h-auto" />
                                </div>
                            ))
                        }
                    </AutoScrollSlider>
                </div>
            </div>
        </section>
    )
}