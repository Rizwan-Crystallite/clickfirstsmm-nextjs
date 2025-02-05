// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/home/content3.webp"

export default function Content3() {
    return (
        <section>
            <div className="pt-[100px] pb-[40px] xl:py-[100px] bg-primary relative z-10 overflow-hidden">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[24px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[42px] 2xl:text-[48px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-secondary w-max mb-1">Monetization Made Simple</span>
                                <span className="block px-1 sm:px-2 py-1 bg-black w-max">Let Us Guide You</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    Struggling to monetize your YouTube channel and navigate its complex policies? Many YouTubers face stagnant growth and limited revenue due to a lack of expertise. Without the right guidance, you might miss out on significant earnings and feel demotivated despite your efforts.
                                </p>
                                <p>
                                    Click First SMM's YouTube Monetization services can help. We'll increase your subscriber count and optimize your video content for higher ad revenue. Gain access to advanced analytics and insights, enabling informed decisions to boost your channel's performance. Say goodbye to stagnant growth and elevate your monetization potential with Click First SMM, watching your revenue soar.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Read Case Study" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                        </div>
                        <div>
                            <Image src={one} alt="Click First SMM" className="animate-pulse mx-auto mt-10 xl:mt-0 relative xl:top-16" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}