// Next
import Image from "next/image"
// Media
import bottom from "media/google-ads/hero/bottom.png"
import left from "media/google-ads/hero/left.png"
import right from "media/google-ads/hero/right.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary overflow-x-clip sm:mb-[20px] md:mb-[50px] lg:mb-[100px] pt-[100px] md:pt-[180px]">
                <Image src={left} priority alt="Click First SMM" className="absolute top-[150px] opacity-50 sm:opacity-100 left-[-150px] animate-awards" />
                <div className="container relative z-10 ">
                    <div className="text-center text-white max-w-[800px] lg:max-w-[1050px] mx-auto mb-7">
                        <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                            Google Ads (PPC)
                        </p>
                        <h1 className="text-[25px] sn:text-[30px] md:text-[36px] lg:text-[45px] xl:text-[50px] leading-snug font-semibold mb-4">
                            Maximize Your Online Visibility With Effective Google Ads (PPC)
                        </h1>
                        <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal">
                            Google Ads (PPC) is a powerful tool for driving targeted traffic to your website. By leveraging effective ad strategies, you can maximize your online visibility, attract more customers, and boost your business's growth rapidly.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                        <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                    </div>
                </div>
                <div className="relative z-10 -bottom-[20px] sm:-bottom-[40px] md:-bottom-[50px] lg:-bottom-[80px] xl:-bottom-[100px]">
                    <Image src={bottom} priority alt="Click First SMM" className="mx-auto animate-pulse" />
                </div>
                <Image src={right} priority alt="Click First SMM" className="absolute top-[150px] opacity-50 sm:opacity-100 right-[-150px] animate-awards" />
            </div>
        </section>
    )
}