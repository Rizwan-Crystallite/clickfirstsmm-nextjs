// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/youtube-optimization/content1.png"

export default function Content1() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[25px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[43px] 2xl:text-[50px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Channel Optimization for
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Maximum Impact
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Optimize your YouTube channel to boost visibility and engagement. Start with a keyword-rich channel description that clearly defines your niche and target audience. Ensure your channel art, including your banner and profile picture, is visually appealing and aligns with your brand. Organize your videos into well-structured playlists with descriptive, keyword-focused titles to make it easier for viewers to discover and navigate your content. Regularly update your channel with new, high-quality videos to maintain viewer interest and encourage repeat visits.
                                </p>
                                <p>
                                    Additionally, use YouTube Analytics to track key performance metrics like watch time, audience retention, and click-through rates. Analyze this data to identify what works and what needs improvement, allowing you to refine your content strategy and optimize future videos. By consistently applying these best practices, you’ll increase your channel’s reach, attract more subscribers, and enhance overall viewer engagement.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
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