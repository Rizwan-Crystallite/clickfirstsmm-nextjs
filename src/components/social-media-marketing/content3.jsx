// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/social-media-marketing/content3.png"

export default function Content3() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <p className="text-[16px] sm:text-[20px] font-semibold text-black leading-tight mb-4">
                                Social Media Moderation
                            </p>
                            <h2 className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[32px] 2xl:text-[38px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Protect Your Brand
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max mb-1">
                                    Reputation With Around-
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max">
                                    The-Clock Global Customer Care
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    With Click First global team of specialists operating in 52+ languages, your cross-platform customer inquiries, mentions, and crisis moments are handled, tracked, and escalated with care, 24/7 + 365 days a year.
                                </p>
                                <ul className="grid grid-cols-1 gap-y-3 list-image-li-dot list-inside">
                                    <li>Stay resourced for crisis moments and brand threats</li>
                                    <li>Maintain a safe environment for your community</li>
                                    <li>Save time, energy, and resources</li>
                                    <li>Ensure rapid SLA</li>
                                </ul>
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