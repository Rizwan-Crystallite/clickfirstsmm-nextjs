// Next
import Image from "next/image"
// Media
import one from "media/youtube-monetization/optimize/1.png"
import two from "media/youtube-monetization/optimize/2.png"
import three from "media/youtube-monetization/optimize/3.png"

const data = [
    {
        icon: one,
        title: "Monetize Like an Entrepreneur",
        para: "Stack revenue streams: AdSense, brand deals, Super Chats, memberships, merch."
    },
    {
        icon: two,
        title: "Grow Like a Brand, Not Just a Channel",
        para: "Algorithms don’t build careers. Loyal audiences and retention do."
    },
    {
        icon: three,
        title: "Create Content That Converts",
        para: "Optimize every video to attract, engage, and convert viewers."
    }
]

export default function Optimize() {
    return (
        <section>
            <div className="pb-[100px] pt-[50px] text-black">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative">
                        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] lg:text-[45px] font-semibold leading-tight mb-5">
                            YouTube is a <span className="text-primary">Business—Run</span> It Like One.
                        </h2>
                        <p className="max-w-[700px] lg:max-w-[800px] inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Most creators treat YouTube like a side hustle, hoping for a lucky break. But the real players? They build, scale, and dominate. Just like a business.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                        {
                            data && data.map(({ icon, title, para }, i) => (
                                <div key={i} className="py-10 px-5 sm:px-3 md:px-5 rounded-xl bg-[linear-gradient(185deg,_rgba(41,72,255,0.19)_0%,_rgba(41,72,255,0)_100%)] text-center">
                                    <Image src={icon} alt="Click First SMM" className="inline-block" />
                                    <h3 className="text-[18px] md:text-[18px] xl:text-[17px] 2xl:text-[20px] font-semibold mb-3 mt-5 leading-snug">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed text-text md:max-w-[240px] xl:max-w-full inline-block">
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