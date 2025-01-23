// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/social-media-management/content1.png"

export default function Content1() {
    return (
        <section>
            <div className="py-[100px] bg-accent">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[21px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[35px] 2xl:text-[42px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Don't Miss Out on Social Media
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Management for Your Business
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Increases Brand awareness and provides businesses with opportunities to connect with their target customers and establish themselves as thought leaders in their industry. Hire our social media management agency to build trust and credibility with potential customers, which can ultimately lead to increased sales.
                                </p>
                                <p>
                                    Improves Customer Engagement and Relationships – Social media platforms allow businesses to engage directly with their customers and respond to any concerns or feedback in real-time. This enables them to build stronger relationships with their target audience, which helps to improve satisfaction and loyalty over time. Increases Web Traffic and SEO Benefits – Social media platforms can help drive traffic to your website, improving your search engine ranking and visibility. Additionally, social media signals are increasingly being used by Google as a ranking factor, so businesses that are active on social media tend to perform better in search results.
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