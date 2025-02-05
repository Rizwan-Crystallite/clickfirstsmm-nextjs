// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/influencer-marketing/content1.png"
import left from "media/influencer-marketing/content1/left.png"
import right from "media/influencer-marketing/content1/right.png"

export default function Content1() {
    return (
        <section>
            <div className="pt-[100px] bg-primary text-white lg:mb-[100px] xl:mb-[200px]">
                <div className="container relative z-10">
                    <Image src={left} alt="Click First SMM" className="hidden lg:block lg:absolute left-0 bottom-[-100px] xl:bottom-[-200px] max-w-[20%] xl:max-w-[25%] 2xl:max-w-full" />
                    <div className="max-w-[850px] mx-auto">
                        <h2 className="text-[25px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[43px] 2xl:text-[50px] font-semibold leading-snug mb-5">
                            <span className="block px-1 sm:px-2 py-1 bg-secondary text-white w-max mx-auto mb-1">
                                Connect With Us
                            </span>
                            <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max mx-auto">
                                Influencer Partnerships
                            </span>
                        </h2>
                        <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-center">
                            <p>
                                Looking to elevate your brand with influencer marketing? Reach out to us today and discover how we can create impactful collaborations that drive results and boost your brand's visibility.
                            </p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row gap-5 justify-center">
                            <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                            <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                        </div>
                        <Image src={One} alt="Click First SMM" className="mx-auto mt-10 max-w-full lg:max-w-[70%] 2xl:max-w-full" />
                    </div>
                    <Image src={right} alt="Click First SMM" className="hidden lg:block lg:absolute right-0 bottom-[-100px] xl:bottom-[-200px] max-w-[20%] xl:max-w-[25%] 2xl:max-w-full" />
                </div>
            </div>
        </section>
    )
}