// Media
import one from "media/home/services/1.png"
import two from "media/home/services/2.png"
import three from "media/home/services/3.png"
import four from "media/home/services/4.png"
import five from "media/home/services/5.png"
import six from "media/home/services/6.png"
import seven from "media/home/services/7.png"
import eight from "media/home/services/8.png"
import icon1 from "media/home/services/icons/1.png"
import icon2 from "media/home/services/icons/2.png"
import icon3 from "media/home/services/icons/3.png"
import icon4 from "media/home/services/icons/4.png"
import icon5 from "media/home/services/icons/5.png"
import icon6 from "media/home/services/icons/6.png"
import icon7 from "media/home/services/icons/7.png"
import icon8 from "media/home/services/icons/8.png"
// Next
import Image from "next/image"
// Components
import { CTA } from "@/components"

const data = [
    {
        bg: one,
        icon: icon1,
        title: "Awareness",
        para: "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all.",
        link: "javascript:;"
    },
    {
        bg: two,
        icon: icon2,
        title: "Sales",
        para: "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all.",
        link: "javascript:;"
    },
    {
        bg: three,
        icon: icon3,
        title: "Leads",
        para: "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all.",
        link: "javascript:;"
    },
    {
        bg: four,
        icon: icon4,
        title: "Appointments",
        para: "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all.",
        link: "javascript:;"
    },
    {
        bg: five,
        icon: icon5,
        title: "App Installs",
        para: "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all.",
        link: "javascript:;"
    },
    {
        bg: six,
        icon: icon6,
        title: "Website Traffic",
        para: "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all.",
        link: "javascript:;"
    },
    {
        bg: seven,
        icon: icon7,
        title: "Messages / Calls",
        para: "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all.",
        link: "javascript:;"
    },
    {
        bg: eight,
        icon: icon8,
        title: "Views",
        para: "In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all.",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ bg, icon, title, para, link }) => (
            <div key={title} className="rounded-xl overflow-hidden relative py-10 px-3 z-10 border border-white group hover:border-black transition-all duration-300 text-center cursor-pointer">
                <Image src={bg} alt="Click First SMM" className="object-cover object-center -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 w-full h-full" />
                <Image src={icon} alt="Click First SMM" className="inline-block" />
                <h3 className="mt-7 mb-3 text-[20px] 2xl:text-[25px] leading-tight font-semibold">
                    {title}
                </h3>
                <p className="text-[14px] 2xl:text-[15px] leading-relaxed mb-5 sm:max-w-[95%] mx-auto 2xl:max-w-full">
                    {para}
                </p>
                <CTA css="group-hover:bg-secondary" href={link} />
            </div>
        ))
    )
}