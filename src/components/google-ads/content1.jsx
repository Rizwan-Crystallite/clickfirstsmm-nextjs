// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/google-ads/content1.png"

export default function Content1() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">How Does PPC</span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">Marketing Work?</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    PPC advertising is a keyword-based marketing tactic where services like AdWords assign value to search terms based on search volume, difficulty, and competition. The more advertisers bidding on a keyword, the higher its price.
                                </p>
                                <p>
                                    Platforms like Google’s homepage offer limited PPC ad slots, so securing your spot requires competitive bidding. Simply paying more does not guarantee enhanced visibility for your ads.
                                </p>
                                <p>
                                    PPC ads, including Google’s, undergo an ad auction process. This automated system assesses ad relevance and Quality Score to determine placement on search engine results pages (SERPs). A higher Quality Score improves ad position and reduces cost per click (CPC).
                                </p>
                                <p>
                                    To achieve a strong Quality Score, ensure your PPC ads are relevant to your target audience, use valuable keywords, achieve high click-through rates (CTRs), and lead to well-optimized landing pages.
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