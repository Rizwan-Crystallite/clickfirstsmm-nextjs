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
        para: "Unlock your business potential with Click First’s proven organic and paid social media strategies. We craft tailored plans to drive engagement, boost visibility, and deliver real results. Ready to grow? Let’s get started!",
        link: "javascript:;"
    },
    {
        bg: two,
        icon: icon2,
        title: "Content Creation",
        para: "Stand out with Click First’s captivating content! From scroll-stopping short-form videos and shareable memes to stunning graphics and animations, we create content that resonates with your audience and drives action. Let’s make your brand unforgettable!",
        link: "javascript:;"
    },
    {
        bg: three,
        icon: icon3,
        title: "Community Management",
        para: "Your community is your power. Click First’s expert community management builds meaningful connections, fosters loyalty, and fuels 50% of your social media growth. Let’s turn followers into advocates!",
        link: "javascript:;"
    },
    {
        bg: four,
        icon: icon4,
        title: "Data-Driven Results",
        para: "Data is at the heart of everything we do. Click First leverages in-depth channel analytics to make smart, performance-driven decisions that maximize your ROI. Let’s turn insights into action!",
        link: "javascript:;"
    },
    {
        bg: five,
        icon: icon5,
        title: "Paid Media Strategy",
        para: "Unlock the full potential of your paid media eorts with our expert strategies. We design customized plans to maximize ROI, drive conversions, and achieve your campaign goals. Ready to see real results? Let’s get started!",
        link: "javascript:;"
    },
    {
        bg: six,
        icon: icon6,
        title: "Paid Media Management",
        para: "We take the guesswork out of ad campaigns. Our team monitors and optimizes your ads daily to ensure peak performance and the highest ROI. Let us help you make every dollar count!",
        link: "javascript:;"
    },
    {
        bg: seven,
        icon: icon7,
        title: "Influencer Management",
        para: "Find the perfect influencers to amplify your brand. We identify partners who align with your audience and goals, ensuring authentic engagement and measurable results. Let’s create impactful collaborations!",
        link: "javascript:;"
    },
    {
        bg: eight,
        icon: icon8,
        title: "Campaign Management + Strategy",
        para: "From sweepstakes to brand collaborations, we create campaigns that captivate your audience and drive action. Let’s turn your ideas into high-performing social media success stories!",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ bg, icon, title, para, link }) => (
            <div key={title} className="rounded-xl overflow-hidden relative py-10 px-2 xl:px-5 2xl:px-4 z-10 border border-white group hover:border-black transition-all duration-300 cursor-pointer">
                <Image src={bg} alt="Click First SMM" className="object-cover object-center -z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 w-full h-full" />
                <div className="w-[70px] h-[70px] inline-flex items-center justify-center bg-primary rounded-full">
                    <Image src={icon} alt="Click First SMM" className="inline-block" />
                </div>
                <h3 className="mt-7 mb-3 text-[20px] lg:text-[20px] xl:text-[18px] 2xl:text-[20px] leading-snug font-semibold">
                    {title}
                </h3>
                <p className="text-[14px] 2xl:text-[15px] leading-relaxed mb-5">
                    {para}
                </p>
                <CTA theme="secondary" css="group-hover:bg-primary" href={link} />
            </div>
        ))
    )
}