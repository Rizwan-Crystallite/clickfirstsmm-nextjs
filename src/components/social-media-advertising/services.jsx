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
        para: "Helping businesses reach large audiences, build awareness and generate leads with our cost-effective YouTube marketing services.",
        bg: "bg-[#FF0000]"
    },
    {
        icon: two,
        title: "Facebook Marketing",
        para: "With our Facebook marketing services, we help brands grow their customer base and multiply their revenue stream.",
        bg: "bg-[#1877F2]"
    },
    {
        icon: three,
        title: "Instagram Marketing",
        para: "Giving businesses the opportunity to connect with their potential customers from all over the world with result-driven Instagram marketing services.",
        bg: "bg-[linear-gradient(55deg,_rgba(255,208,32,1)_0%,_rgba(243,0,5,1)_50%,_rgba(187,0,175,1)_100%)]"
    },
    {
        icon: four,
        title: "Tiktok Marketing",
        para: "With result-driven Tiktok marketing services, businesses may connect with their potential customers from all over the world.",
        bg: "bg-[#000000]"
    }
]

export default function Services() {
    return (
        <section>
            <div className="py-[100px] text-black overflow-hidden">
                <div className="container">
                    <div className="text-center mb-[50px] sm:mb-[70px] z-20 relative max-w-[730px] lg:max-w-[938px] mx-auto">
                        <h2 className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[45px] font-semibold leading-snug mb-5">
                            How <span className="text-primary">Marketing</span> Services Help Your Asset Become The <span className="text-primary">Internet</span> Smash?
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Marketing services amplify your asset's online presence, turning it into an internet sensation. By leveraging data-driven strategies and creative content, we ensure your brand stands out and attracts a massive audience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10 group">
                        {
                            data && data.map(({ icon, title, para, bg }, i) => (
                                <div key={i} className={`py-10 px-5 sm:px-3 md:px-5 rounded-xl text-center text-white sm:[&:nth-child(1)]:rotate-[-8deg] sm:[&:nth-child(2)]:rotate-[8deg] sm:[&:nth-child(3)]:rotate-[-8deg] sm:[&:nth-child(4)]:rotate-[8deg] transition-all duration-300 group-hover:rotate-0 ${bg}`}>
                                    <Image src={icon} alt="Click First SMM" className="inline-block" />
                                    <h3 className="text-[18px] md:text-[25px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 mt-5 leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed max-w-[90%] lg:max-w-[90%] xl:max-w-[280px] inline-block mb-5 xl:mb-3 xl:min-h-[130px]">
                                        {para}
                                    </p>
                                    <CTA css="hover:bg-white hover:text-black" theme="transparent" text="Call Now: 346-299-2202" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}