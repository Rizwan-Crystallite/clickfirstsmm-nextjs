// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/social-media-management/content3.png"

export default function Content3() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[24px] sm:text-[34px] md:text-[45px] lg:text-[50px] xl:text-[40px] 2xl:text-[48px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    The 5 Pillars of High-Impact
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Social Media Management
                                </span>
                            </h2>
                            <ul className="text-[14px] sm:text-[16px] leading-relaxed grid grid-cols-1 gap-y-3 mb-7 text-text list-image-li-dot list-inside">
                                <li>
                                    <span className="text-primary underline underline-offset-4">Results-Driven Strategy</span> A well-crafted, goal-oriented plan ensures your brand message is clear, targeted, and designed to convert.
                                </li>
                                <li>
                                    <span className="text-primary underline underline-offset-4">Thumb-Stopping Content Creation</span> Consistently sharing engaging, visually compelling, and value-driven content keeps your audience hooked and your brand relevant.
                                </li>
                                <li>
                                    <span className="text-primary underline underline-offset-4">Active Social Listening & Community Monitoring</span> Tracking conversations around your brand helps you understand audience sentiment, respond quickly, and strengthen your online reputation.
                                </li>
                                <li>
                                    <span className="text-primary underline underline-offset-4">Authentic Engagement & Interaction</span> Social media is a two-way street. Engaging with your audience through meaningful conversations, comments, and real-time interactions fosters trust and loyalty.
                                </li>
                                <li>
                                    <span className="text-primary underline underline-offset-4">Performance Tracking & Optimization</span> Success is measurable. Analyzing key metrics before, during, and after campaigns helps you refine your strategy, optimize performance, and maximize ROI.
                                </li>
                            </ul>
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