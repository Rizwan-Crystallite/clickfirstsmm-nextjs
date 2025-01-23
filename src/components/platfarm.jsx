// Media
import p1 from "media/platforms/1.webp"
import p2 from "media/platforms/2.webp"
import p3 from "media/platforms/3.webp"
import p4 from "media/platforms/4.webp"
import p5 from "media/platforms/5.webp"
import p6 from "media/platforms/6.webp"
import p7 from "media/platforms/7.webp"
import p8 from "media/platforms/8.webp"
import p9 from "media/platforms/9.webp"
import p10 from "media/platforms/10.webp"
import p11 from "media/platforms/11.webp"
import p12 from "media/platforms/12.webp"
import p13 from "media/platforms/13.webp"
import p14 from "media/platforms/14.webp"
import Image from "next/image"

const forP1 = [
    {
        logo: p1,
        name: "Facebook"
    },
    {
        logo: p2,
        name: "Instagram"
    },
    {
        logo: p3,
        name: "Twitter"
    },
    {
        logo: p4,
        name: "Linkedin"
    },
    {
        logo: p5,
        name: "Pinterest"
    },
    {
        logo: p6,
        name: "Snapchat"
    },
    {
        logo: p7,
        name: "Tiktok"
    },
    {
        logo: p8,
        name: "Reddit"
    },
    {
        logo: p9,
        name: "WhatsApp"
    },
    {
        logo: p10,
        name: "Messenger"
    },
    {
        logo: p11,
        name: "Telegram"
    },
    {
        logo: p12,
        name: "Discord"
    },
    {
        logo: p13,
        name: "Google"
    },
    {
        logo: p14,
        name: "YouTube"
    }
]

export default function Platfarm({ wrapperCSS = "py-[100px]" }) {
    return (
        <section>
            <div className={`${wrapperCSS}`}>
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative">
                        <h2 className="text-[28px] sm:text-[40px] lg:text-[50px] font-semibold leading-tight mb-5">
                            <span className="text-primary">Platforms</span> We Work With
                        </h2>
                        <p className="max-w-[718px] lg:max-w-[818px] inline-block text-[14px] sm:text-[16px] leading-relaxed text-text">
                            In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-10 justify-center items-end">
                        {
                            forP1 && forP1.map(({ logo, name }, i) => (
                                <div key={i} className="text-center group basis-[150px] xl:basis-[12%]">
                                    <Image src={logo} alt="Click First SMM" className="inline-block mb-7 grayscale group-hover:grayscale-0 transition-all duration-300" />
                                    <h4 className="text-[15px] font-bold leading-tight">{name}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}