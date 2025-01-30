// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/social-media-advertising/content2.png"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[19px] sm:text-[31px] md:text-[40px] lg:text-[50px] xl:text-[32px] 2xl:text-[37px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Social Media Advertising That Puts
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Your Brand in the Spotlight
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text text-justify">
                                <p>
                                    In today’s digital world, visibility isn’t enough; your brand needs to engage, build trust, and drive action. With billions of people scrolling daily, social media is a necessity, not an option. Businesses that thrive don’t just exist in feeds; they create impact, spark conversations, and turn passive viewers into loyal customers.
                                </p>
                                <p>
                                    At ClickFirstSMM, we don’t just run ads; we craft high-converting campaigns that capture attention, build trust, and drive measurable growth. Our data-driven approach ensures your brand stays top-of-mind while maximizing engagement and ROI.
                                </p>
                                <p>
                                    A strong social presence means more than just likes; it’s about turning awareness into action. We help you connect with your audience, create meaningful interactions, and establish long-term relationships that keep customers coming back. Our strategies also boost website traffic and SEO, ensuring your brand ranks higher on search engines while driving qualified leads.
                                </p>
                                <p>
                                    With precise targeting, A/B testing, and performance analytics, we optimize every campaign for maximum impact.
                                </p>
                                <p><strong>Your customers are scrolling, let’s make them stop for YOU.</strong></p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
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