// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/home/content2.webp"
import path from "media/path-2.webp"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-primary relative z-10 overflow-hidden">
                <Image src={path} alt="Click First SMM" className="absolute bottom-0 right-0 -z-10 opacity-30" />
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[24px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[42px] 2xl:text-[48px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-secondary w-max mb-1">Drive Results with Targeted</span>
                                <span className="block px-1 sm:px-2 py-1 bg-black w-max">Paid Campaigns</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-justify">
                                <p>
                                    Without the right strategies, you might waste resources and miss out on potential customers, which can be discouraging and hinder your brand’s success.
                                </p>
                                <p>
                                    Navigating the complexities of paid marketing, identifying the right niches, and reaching your ideal target audience can be overwhelming. Ineffective ad targeting, poor optimization, and lack of actionable insights can lead to subpar results and wasted investment.
                                </p>
                                <p>
                                    Release the full potential of your brand with Click First SMM's Paid Marketing Services. Our expert team creates and manages effective paid marketing campaigns tailored to your niche, ensuring you reach your target audience and achieve your marketing goals.
                                </p>
                                <p>
                                    Ready to take your brand to the next level? Contact Click First SMM today and start seeing real results!
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Read Case Study" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                        </div>
                        <div>
                            <Image src={one} alt="Click First SMM" className="animate-pulse mx-auto mt-10 xl:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}