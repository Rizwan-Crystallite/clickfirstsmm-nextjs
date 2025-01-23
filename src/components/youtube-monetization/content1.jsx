// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/youtube-monetization/content1.png"

export default function Content1() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[25px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[43px] 2xl:text-[50px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Monetization Strategies
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    for Maximum Revenue
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Monetize your YouTube channel effectively to maximize revenue and grow your audience. Start by enabling AdSense and ensuring your content adheres to YouTube's monetization policies. Create engaging, high-quality videos that encourage viewer retention and interaction. Use keyword-rich titles, descriptions, and tags to optimize each video for searchability.
                                </p>
                                <p>
                                    Incorporate diverse revenue streams such as Super Chats, channel memberships, and merchandise sales. Promote these options actively within your videos and through your channel’s community tab. Collaborate with brands for sponsorship deals, offering value to both your viewers and the sponsors.
                                </p>
                                <p>
                                    Leverage YouTube Analytics to monitor key metrics like CPM (Cost Per Mille), watch time, and audience demographics. Use this data to refine your content strategy, focusing on what resonates most with your audience. By consistently applying these monetization strategies, you’ll increase your channel’s income potential and build a sustainable, thriving YouTube presence.
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