// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/influencer-marketing/content2.png"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-accent">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[21px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[40px] 2xl:text-[45px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Maximize Impact with
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Influencer Marketing
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Transform your brand’s presence with our influencer marketing expertise. We provide strategic connections with key influencers to amplify your message and engage your target audience effectively.
                                </p>
                                <p>
                                    Our team handles all aspects of influencer partnerships, ensuring seamless campaign execution and measurable success. Leverage our comprehensive approach to achieve outstanding results and elevate your brand’s impact.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div>
                            <Image src={One} alt="Click First SMM" className="animate-pulse mx-auto mt-10 xl:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}