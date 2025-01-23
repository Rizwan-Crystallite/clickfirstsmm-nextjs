// Next
import Image from "next/image"
// Media
import bottom from "media/youtube-optimization/hero/bottom.png"
import left from "media/youtube-optimization/hero/left.png"
import right from "media/youtube-optimization/hero/right.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary mb-[30px] sm:mb-[50px] xl:mb-[80px] 2xl:mb-[100px] overflow-x-clip">
                <Image src={left} alt="Click First SMM" className="absolute top-[150px] opacity-50 sm:opacity-100 left-[-100px] animate-awards" />
                <div className="container relative z-10 bottom-[-100px] sm:bottom-[-150px] xl:bottom-[-180px] 2xl:bottom-[-200px] pb-[50px] ">
                    <div className="text-center text-white max-w-[800px] lg:max-w-[1050px] mx-auto mb-7">
                        <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                            Youtube Optimization
                        </p>
                        <h1 className="text-[25px] sn:text-[30px] md:text-[36px] lg:text-[45px] xl:text-[50px] leading-snug font-semibold mb-4">
                            Elevate Your Youtube Presence With Our Proven Optimization Techniques
                        </h1>
                        <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal">
                            Elevate your YouTube presence with our proven optimization techniques. Increase visibility, boost engagement, and grow your subscribers to reach a wider audience and achieve greater impact.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                        <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                    </div>
                </div>
                <div className="relative z-10 bottom-[-80px] sm:bottom-[-130px] lg:bottom-[-150px] xl:bottom-[-180px] 2xl:bottom-[-220px]">
                    <Image src={bottom} priority alt="Click First SMM" className="mx-auto animate-pulse" />
                </div>
                <Image src={right} alt="Click First SMM" className="absolute top-[150px] opacity-50 sm:opacity-100 right-[-100px] animate-awards" />
            </div>
        </section>
    )
}