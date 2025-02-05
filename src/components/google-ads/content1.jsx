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
                                    PPC (Pay-Per-Click) advertising is a keyword-driven strategy that allows businesses to bid for placement in search engine results. Platforms like Google Ads assign value to keywords based on search volume, competition, and difficulty. The more advertisers competing for a keyword, the higher the cost per click (CPC).
                                </p>
                                <p>
                                    Since ad placements are limited, businesses must engage in competitive bidding to secure top spots. However, outbidding competitors isn’t enough. Google considers factors like ad relevance, landing page experience, and Quality Score to determine rankings.
                                </p>
                                <p>
                                    Google and other PPC platforms use an automated auction system to decide which ads get displayed. A higher Quality Score can lower CPCs while improving ad placement, ensuring your budget delivers maximum results.
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