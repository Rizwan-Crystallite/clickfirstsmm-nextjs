// Next
import Image from "next/image"
// Media
import bg from "media/email-marketing/hero/bg.png"
import right from "media/email-marketing/hero/right.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary pt-[150px] pb-[50px] lg:pb-[100px]">
                <Image src={bg} alt="Click First SMM" fill placeholder="blur" sizes="100vw" className="object-cover -z-10" />
                <div className="container">
                    <div className="lg:flex items-center gap-x-5 xl:gap-x-10">
                        <div className="text-white md:max-w-[550px] xl:max-w-[640px]">
                            <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                                Email Marketing
                            </p>
                            <h1 className="text-[25px] sm:text-[40px] xl:text-[50px] leading-snug font-semibold mb-4">
                                Transform Your Outreach With Effective Email Campaigns
                            </h1>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal mb-7">
                                Unlock the full potential of your marketing strategy with targeted email campaigns. Our email marketing solutions are designed to drive engagement, boost conversions, and build lasting customer relationships.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div>
                            <Image src={right} alt="Click First SMM" className="animate-pulse max-w-[300px] sm:max-w-[400px] mx-auto lg:max-w-full mt-10 lg:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}