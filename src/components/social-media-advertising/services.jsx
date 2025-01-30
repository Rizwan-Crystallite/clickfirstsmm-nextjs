// Next
import Image from "next/image"
// Media
import one from "media/social-media-advertising/services/1.png"
import two from "media/social-media-advertising/services/2.png"
import three from "media/social-media-advertising/services/3.png"
import four from "media/social-media-advertising/services/4.png"
// Components
import { CTA } from "@/components"

const data = [
    {
        icon: one,
        title: "YouTube Marketing",
        para: "Capture attention, build authority, and turn viewers into loyal customers. Our data-driven YouTube strategies help you grow your audience and generate leads effortlessly.",
        bg: "bg-[#FF0000]",
        text: "Let's Elevate Your Channel"
    },
    {
        icon: two,
        title: "Facebook Marketing",
        para: "From laser-focused ads to viral content, we craft high-performing strategies that grow your customer base and skyrocket your revenue.",
        bg: "bg-[#1877F2]",
        text: "Ready to Scale?"
    },
    {
        icon: three,
        title: "Instagram Marketing",
        para: "Engage, influence, and convert! We help businesses create thumb-stopping content, influencer collaborations, and ad campaigns that drive real results.",
        bg: "bg-[linear-gradient(55deg,_rgba(255,208,32,1)_0%,_rgba(243,0,5,1)_50%,_rgba(187,0,175,1)_100%)]",
        text: "Let’s Build Your Brand "
    },
    {
        icon: four,
        title: "Tiktok Marketing",
        para: "Go viral with trend-driven content and strategic ad placements. We connect you with the right audience to turn views into customers.",
        bg: "bg-[#000000]",
        text: "Let’s Make Your Brand Trend "
    }
]

export default function Services() {
    return (
        <section>
            <div className="py-[100px] text-black overflow-hidden">
                <div className="container">
                    <div className="text-center mb-[50px] sm:mb-[70px] z-20 relative max-w-[730px] lg:max-w-[938px] mx-auto">
                        <h2 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] font-semibold leading-snug mb-5">
                            How Our <span className="text-primary">Marketing</span> Services Turn Your Brand into an Internet <span className="text-primary">Sensation</span>
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Your brand deserves more than just visibility; it deserves virality. Our strategic marketing solutions amplify your online presence, transforming your asset into a digital powerhouse. With data-driven insights, audience engagement tactics, and creative storytelling, we ensure your brand not only stands out but dominates the competition.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10 group">
                        {
                            data && data.map(({ icon, title, para, bg, text }, i) => (
                                <div key={i} className={`py-10 px-5 sm:px-3 md:px-5 rounded-xl text-center text-white sm:[&:nth-child(1)]:rotate-[-8deg] sm:[&:nth-child(2)]:rotate-[8deg] sm:[&:nth-child(3)]:rotate-[-8deg] sm:[&:nth-child(4)]:rotate-[8deg] transition-all duration-300 group-hover:rotate-0 ${bg}`}>
                                    <Image src={icon} alt="Click First SMM" className="inline-block" />
                                    <h3 className="text-[18px] md:text-[25px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 mt-5 leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed max-w-[90%] lg:max-w-[90%] xl:max-w-[290px] inline-block mb-5 xl:mb-3 xl:min-h-[125px]">
                                        {para}
                                    </p>
                                    <CTA css="hover:bg-white hover:text-black" text={text} theme="transparent" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}