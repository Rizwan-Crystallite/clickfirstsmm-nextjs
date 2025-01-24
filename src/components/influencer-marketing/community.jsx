// Components
import { CTA } from "@/components"
// Media
import one from "media/influencer-marketing/community/1.png"
import two from "media/influencer-marketing/community/2.png"
import three from "media/influencer-marketing/community/3.png"
import four from "media/influencer-marketing/community/4.png"
import five from "media/influencer-marketing/community/5.png"
import six from "media/influencer-marketing/community/6.png"
import seven from "media/influencer-marketing/community/7.png"
import eight from "media/influencer-marketing/community/8.png"
import nine from "media/influencer-marketing/community/9.png"
import ten from "media/influencer-marketing/community/10.png"
import Image from "next/image"

const data = [
    {
        title: "Fashion & Beauty",
        bg: one
    },
    {
        title: "Gaming & Entertainment",
        bg: two
    },
    {
        title: "Health & Fitness",
        bg: three
    },
    {
        title: "Education & Self-development",
        bg: four
    },
    {
        title: "Family & Kids",
        bg: five
    },
    {
        title: "Travel & Automotive",
        bg: six
    },
    {
        title: "B2B & Finance",
        bg: seven
    },
    {
        title: "Music & Lifestyle",
        bg: eight
    },
    {
        title: "Pets & Garden",
        bg: nine
    },
    {
        title: "Gadgets & IT",
        bg: ten
    }
]

export default function Community() {
    return (
        <section>
            <div className="pb-[100px] pt-[50px]">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative max-w-[1100px] mx-auto">
                        <h2 className="text-[28px] sm:text-[35px] md:text-[40px] lg::text-[45px] xl:text-[50px] font-semibold leading-tight mb-5">
                            The Diversity Of Our Influencer Community
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Unlock your channel's potential with our comprehensive YouTube optimization services. From keyword research and video SEO to analytics and audience retention, we ensure your content reaches and engages a wider audience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-x-5 gap-y-5">
                        {
                            data && data.map(({ title, bg }, i) => (
                                <div key={i} className="relative z-10 rounded-xl overflow-hidden h-[260px]">
                                    <Image src={bg} alt="Click First SMM" fill className="object-cover -z-10" />
                                    <div className="absolute bottom-5 left-0 right-0 z-[11] border border-white text-white rounded-lg h-[45px] inline-flex items-center justify-center w-[90%] mx-auto text-[14px] md:text-[16px] xl:text-[12px] 2xl:text-[14px] backdrop-blur-lg">
                                        {title}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}