//  Media
import one from "media/influencer-marketing/whyus/1.png"
import two from "media/influencer-marketing/whyus/2.png"
import three from "media/influencer-marketing/whyus/3.png"
import four from "media/influencer-marketing/whyus/4.png"
import five from "media/influencer-marketing/whyus/5.png"
import six from "media/influencer-marketing/whyus/6.png"
// Next
import Image from "next/image"

const data = [
    {
        icon: one,
        title: "Comprehensive Access To The Entire Influencer Market",
        para: "Gain unparalleled access to the entire influencer market with our comprehensive solutions. We connect you with top influencers across various niches to maximize your brand’s visibility and impact."
    },
    {
        icon: two,
        title: "Expertise In Selecting The Best Social Media Channels",
        para: "Gain unparalleled access to the entire influencer market with our comprehensive solutions. We connect you with top influencers across various niches to maximize your brand’s visibility and impact."
    },
    {
        icon: three,
        title: "Versatile Platforms, Maximum Potential.",
        para: "Gain unparalleled access to the entire influencer market with our comprehensive solutions. We connect you with top influencers across various niches to maximize your brand’s visibility and impact."
    },
    {
        icon: four,
        title: "Over 14 Years Of Experience In Planning And Managing Campaigns",
        para: "Gain unparalleled access to the entire influencer market with our comprehensive solutions. We connect you with top influencers across various niches to maximize your brand’s visibility and impact."
    },
    {
        icon: five,
        title: "Best Media Prices For Every Influencer Channel",
        para: "Gain unparalleled access to the entire influencer market with our comprehensive solutions. We connect you with top influencers across various niches to maximize your brand’s visibility and impact."
    },
    {
        icon: six,
        title: "Targeted Support For Startups And Global Corporations",
        para: "Gain unparalleled access to the entire influencer market with our comprehensive solutions. We connect you with top influencers across various niches to maximize your brand’s visibility and impact."
    }
]

export default function WhyUS() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative max-w-[1188px] mx-auto">
                        <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                            Why Us
                        </p>
                        <h2 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[50px] font-semibold leading-tight mb-5">
                            Unleash Your Influencer Potential With Us!
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text max-w-[700px] lg:max-w-full">
                            Looking to elevate your brand through innovative influencer marketing? Contact us today to explore tailored strategies and impactful collaborations designed to enhance your reach, drive engagement, and achieve your business goals. Let’s create something extraordinary together!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
                        {
                            data && data.map(({ icon, title, para }, i) => (
                                <div key={i} className="py-10 px-5 sm:px-3 md:px-5 rounded-xl bg-white group hover:bg-black transition-all duration-300 shadow-lg">
                                    <Image src={icon} alt="Click First SMM" className="mb-5" />
                                    <h3 className="text-[18px] lg:text-[25px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 leading-snug text-black group-hover:text-white transition-all duration-300">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed  inline-block text-text group-hover:text-white transition-all duration-300">
                                        {para}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}