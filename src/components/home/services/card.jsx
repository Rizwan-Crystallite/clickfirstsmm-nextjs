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
        para: "We craft powerful strategies that position your brand front and center, ensuring your audience connects with you at the right time, in the right place.",
        link: "javascript:;"
    },
    {
        bg: two,
        icon: icon2,
        title: "Sales",
        para: "Our solutions are designed to convert interest into action, increasing sales and helping your business exceed its goals.",
        link: "javascript:;"
    },
    {
        bg: three,
        icon: icon3,
        title: "Generate High-Quality Leads",
        para: "From capturing attention to nurturing intent, we deliver campaigns that bring you leads ready to convert.",
        link: "javascript:;"
    },
    {
        bg: four,
        icon: icon4,
        title: "Fill Your Calendar",
        para: "Our targeted strategies ensure your calendar stays booked with qualified prospects who are eager to work with you.",
        link: "javascript:;"
    },
    {
        bg: five,
        icon: icon5,
        title: "App Downloads",
        para: "We craft high-impact campaigns that boost app downloads and ensure long-term user engagement. With precise targeting and compelling creatives, we drive installs that deliver real results.",
        link: "javascript:;"
    },
    {
        bg: six,
        icon: icon6,
        title: "Website Traffic",
        para: "Harness SEO, targeted ads, and data-driven strategies to dominate search and social. Your website becomes a conversion magnet, not just a destination.",
        link: "javascript:;"
    },
    {
        bg: seven,
        icon: icon7,
        title: "Conversations = Conversions",
        para: "Turn inquiries into business with campaigns designed to spark conversations. Whether it’s through DMs, phone calls, or WhatsApp, we’ll make sure your audience reaches out – and keeps coming back.",
        link: "javascript:;"
    },
    {
        bg: eight,
        icon: icon8,
        title: "Views",
        para: "We craft scroll-stopping content that grabs attention and builds awareness. With precision targeting and data-driven strategies, your brand stays unmissable.",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ bg, icon, title, para, link }) => (
            <div key={title} className="rounded-xl overflow-hidden relative py-10 px-3 z-10 border border-white group hover:border-black transition-all duration-300 cursor-pointer">
                <Image src={bg} alt="Click First SMM" className="object-cover object-center -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 w-full h-full" />
                <Image src={icon} alt="Click First SMM" className="inline-block" />
                <h3 className="mt-7 mb-3 text-[20px] xl:text-[16px] 2xl:text-[20px] leading-tight font-semibold">
                    {title}
                </h3>
                <p className="text-[14px] 2xl:text-[15px] leading-relaxed mb-5">
                    {para}
                </p>
                <CTA css="group-hover:bg-secondary" href={link} />
            </div>
        ))
    )
}