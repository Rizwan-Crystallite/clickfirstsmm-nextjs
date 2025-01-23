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
                                    Five Elements of Successful
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Social Media Management
                                </span>
                            </h2>
                            <ul className="text-[14px] sm:text-[16px] leading-relaxed grid grid-cols-1 gap-y-3 mb-7 text-text list-image-li-dot list-inside">
                                <li>
                                    Creating a tailored, <span className="text-primary underline underline-offset-4">results-oriented</span> strategy
                                </li>
                                <li>
                                    Regularly distributing <span className="text-primary underline underline-offset-4">scroll-stopping content</span> across social platforms
                                </li>
                                <li>
                                    <span className="text-primary underline underline-offset-4">Monitoring conversations</span> around the brand on social media
                                </li>
                                <li>
                                    <span className="text-primary underline underline-offset-4">Engaging</span> with the brand’s community on social media
                                </li>
                                <li>
                                    <span className="text-primary underline underline-offset-4">Monitoring performance</span> before, during and post-campaign
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