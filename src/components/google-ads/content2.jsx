// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/google-ads/content2.png"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-primary relative z-10 overflow-hidden">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[24px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[42px] 2xl:text-[48px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-secondary w-max mb-1">Why Choose Click First</span>
                                <span className="block px-1 sm:px-2 py-1 bg-black w-max">for PPC?</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    Your ads shouldn’t just drive traffic; they should drive results. We solve real business problems and eliminate wasted ad spend with strategic, performance-driven PPC campaigns tailored for maximum ROI.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Read Case Study" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div>
                            <Image src={one} alt="Click First SMM" className="mx-auto mt-10 xl:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}