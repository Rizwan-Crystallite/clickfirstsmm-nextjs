// Media
import one from "media/social-media-marketing/services/1.png"
import two from "media/social-media-marketing/services/2.png"
import three from "media/social-media-marketing/services/3.png"
import four from "media/social-media-marketing/services/4.png"
import five from "media/social-media-marketing/services/5.png"
import six from "media/social-media-marketing/services/6.png"
import seven from "media/social-media-marketing/services/7.png"
import eight from "media/social-media-marketing/services/8.png"
import icon1 from "media/social-media-marketing/services/icons/1.png"
import icon2 from "media/social-media-marketing/services/icons/2.png"
import icon3 from "media/social-media-marketing/services/icons/3.png"
import icon4 from "media/social-media-marketing/services/icons/4.png"
import icon5 from "media/social-media-marketing/services/icons/5.png"
import icon6 from "media/social-media-marketing/services/icons/6.png"
import icon7 from "media/social-media-marketing/services/icons/7.png"
import icon8 from "media/social-media-marketing/services/icons/8.png"
// Next
import Image from "next/image"
// Components
import { CTA } from "@/components"

const data = [
    {
        bg: one,
        icon: icon1,
        title: "Social Media Strategy",
        para: "Click First has developed a proven organic and paid social media strategies to help you achieve your business goals.",
        link: "javascript:;"
    },
    {
        bg: two,
        icon: icon2,
        title: "Content Creation",
        para: "Click First produces short form videos, memes, graphics, animation, GIFs at all different production levels depending on the goals.",
        link: "javascript:;"
    },
    {
        bg: three,
        icon: icon3,
        title: "Community Management",
        para: "Click First believes 50% of your social media growth is because of community management, we mean it.",
        link: "javascript:;"
    },
    {
        bg: four,
        icon: icon4,
        title: "Data",
        para: "Everything we do is deep rooted in channel data that is used to make informed decisions for our clients to improve performance.",
        link: "javascript:;"
    },
    {
        bg: five,
        icon: icon5,
        title: "Paid Media Strategy",
        para: "Multiple approaches are possible in your paid media strategy; hence, working with a reliable digital marketing team is essential for ROI.",
        link: "javascript:;"
    },
    {
        bg: six,
        icon: icon6,
        title: "Paid Media Management",
        para: "We monitor our ad campaigns daily to optimize performance and maximize your dollars to yield the highest ROI based on the campaign goals.",
        link: "javascript:;"
    },
    {
        bg: seven,
        icon: icon7,
        title: "Influencer Management",
        para: "Our approach is to identify the perfect influencer for your business that engages your customer and maximizes the partnership results for your brand.",
        link: "javascript:;"
    },
    {
        bg: eight,
        icon: icon8,
        title: "Campaign Management + Strategy",
        para: "Social media campaigns like a sweepstakes, contest, brand collaboration are great ways to engage your community!",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ bg, icon, title, para, link }) => (
            <div key={title} className="rounded-xl overflow-hidden relative py-10 px-2 xl:px-5 2xl:px-4 z-10 border border-white group hover:border-black transition-all duration-300 text-center cursor-pointer">
                <Image src={bg} alt="Click First SMM" className="object-cover object-center -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 w-full h-full" />
                <div className="w-[70px] h-[70px] inline-flex items-center justify-center bg-primary rounded-full">
                    <Image src={icon} alt="Click First SMM" className="inline-block" />
                </div>
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