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
                            <h2 className="text-[19px] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[33px] 2xl:text-[39px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Your Views Are Climbing—But 
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Is Your Bank Account Keeping Up?
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    High CPMs. Longer session durations. Perfect mid-roll placement. A premium audience that advertisers can’t resist. That’s how top creators turn views into serious revenue. But if your RPM is low, your audience retention isn’t optimized, or you’re not stacking multiple income streams, you’re leaving money on the table, BIG time.
                                </p>
                                <p>
                                    YouTube’s biggest earners don’t rely on AdSense alone. They know how to structure content that keeps viewers hooked, maximizes ad impressions, and attracts high-paying brand deals. If your content isn’t built for long watch times, repeat viewers, and premium monetization opportunities, you’re playing small.
                                </p>
                                <p>
                                    We’ll analyze your channel, break down exactly where you're missing revenue, and give you a clear roadmap to turning your content into a revenue machine. No fluff, no recycled strategies—just pure, data-driven monetization tactics that work.
                                </p>
                                <p>
                                    <strong>Think your channel is making as much as it should? Let’s find out.</strong>
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