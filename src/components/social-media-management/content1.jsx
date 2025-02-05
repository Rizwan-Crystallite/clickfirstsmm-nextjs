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
                                    Take Control of Your 
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Brand’s Social Presence
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-4 text-text">
                                <p>
                                    Social media is no longer just an option—it’s a business necessity. Your audience is online every day, scrolling, engaging, and making purchasing decisions. If your brand isn’t showing up where they are, you’re missing out on valuable opportunities to connect, engage, and convert.
                                </p>
                                <p>
                                    At ClickFirstSMM, we don’t believe in random posts or generic content. We craft tailored social media strategies that align with your business goals, attract the right audience, and create meaningful interactions that drive results. Whether you’re looking to build brand authority, increase customer engagement, or drive website traffic, our expert team ensures every post, comment, and ad serves a purpose.
                                </p>
                            </div>
                            <h3 className="text-[16px] sm:text-[20px] font-semibold leading-tight text-black mb-3">
                                Why Social Media Management Matters
                            </h3>
                            <ul className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text list-image-li-dot list-inside">
                                <li>Brand Awareness That Converts</li>
                                <li>Customer Engagement & Loyalty</li>
                                <li>More Visibility, More Website Traffic</li>
                            </ul>
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