// Media
import one from "media/email-marketing/services/1.png"
import two from "media/email-marketing/services/2.png"
import three from "media/email-marketing/services/3.png"
import four from "media/email-marketing/services/4.png"
import five from "media/email-marketing/services/5.png"
import six from "media/email-marketing/services/6.png"
import seven from "media/email-marketing/services/7.png"
import eight from "media/email-marketing/services/8.png"
import icon1 from "media/email-marketing/services/icons/1.png"
import icon2 from "media/email-marketing/services/icons/2.png"
import icon3 from "media/email-marketing/services/icons/3.png"
import icon4 from "media/email-marketing/services/icons/4.png"
import icon5 from "media/email-marketing/services/icons/5.png"
import icon6 from "media/email-marketing/services/icons/6.png"
import icon7 from "media/email-marketing/services/icons/7.png"
import icon8 from "media/email-marketing/services/icons/8.png"
// Next
import Image from "next/image"
// Components
import { CTA } from "@/components"

const data = [
    {
        bg: one,
        icon: icon1,
        title: "Strategy Development",
        para: "Develop customized email strategies that drive engagement, boost conversions, and align with your business objectives.",
        link: "javascript:;"
    },
    {
        bg: two,
        icon: icon2,
        title: "Email List Growth Services",
        para: "Expand your audience with targeted list-building strategies that attract and retain high-quality subscribers.",
        link: "javascript:;"
    },
    {
        bg: three,
        icon: icon3,
        title: "Campaign Execution",
        para: "Implement and manage email campaigns that resonate with your audience and deliver measurable results.",
        link: "javascript:;"
    },
    {
        bg: four,
        icon: icon4,
        title: "Behavioral Automation",
        para: "Leverage behavioral automation to deliver personalized emails that respond to user actions and preferences.",
        link: "javascript:;"
    },
    {
        bg: five,
        icon: icon5,
        title: "Cross-Device Design",
        para: "Ensure seamless user experiences across all devices with our expertly crafted cross-device design solutions.",
        link: "javascript:;"
    },
    {
        bg: six,
        icon: icon6,
        title: "Email Design & Coding",
        para: "Create visually stunning and technically flawless emails with our expert design and coding services.",
        link: "javascript:;"
    },
    {
        bg: seven,
        icon: icon7,
        title: "Advanced Analytics",
        para: "Gain insights with advanced analytics, optimizing your email campaigns for better performance and results.",
        link: "javascript:;"
    },
    {
        bg: eight,
        icon: icon8,
        title: "SMS Marketing Strategy",
        para: "Develop impactful SMS strategies to engage your audience with timely, relevant, and actionable messages.",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ bg, icon, title, para, link }) => (
            <div key={title} className="rounded-xl overflow-hidden relative py-10 px-2 xl:px-5 2xl:px-4 z-10 border border-white group hover:border-black transition-all duration-300 text-center cursor-pointer">
                <Image src={bg} alt="Click First SMM" className="object-cover object-center -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 w-full h-full" />
                <Image src={icon} alt="Click First SMM" className="inline-block" />
                <h3 className="mt-7 mb-3 text-[20px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-snug font-semibold">
                    {title}
                </h3>
                <p className="text-[14px] 2xl:text-[15px] leading-relaxed mb-5 max-w-[340px] mx-auto md:max-w-full">
                    {para}
                </p>
                <CTA theme="secondary" css="group-hover:bg-primary" href={link} />
            </div>
        ))
    )
}