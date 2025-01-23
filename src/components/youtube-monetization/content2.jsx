// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/youtube-monetization/content2.png"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-primary">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[23px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[38px] 2xl:text-[45px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-secondary w-max mb-1">Boost Your YouTube Income</span>
                                <span className="block px-1 sm:px-2 py-1 bg-black w-max">with Smart Tactics</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    To boost your YouTube income, start by leveraging YouTube’s monetization features effectively. Focus on producing high-quality, engaging content that resonates with your audience to increase ad revenue. Consistent uploads and active audience interaction can enhance viewer loyalty, leading to more views and higher earnings from ads.
                                </p>
                                <p>
                                    Additionally, diversify your revenue sources to maximize income. Incorporate channel memberships for exclusive content, explore affiliate marketing opportunities, and seek sponsorships from relevant brands. By combining these monetization tactics with a strong content strategy, you can significantly boost your YouTube earnings and create a more stable revenue stream.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
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