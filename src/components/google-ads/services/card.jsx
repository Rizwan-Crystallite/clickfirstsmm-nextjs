// Media
import one from "media/google-ads/services/1.png"
import two from "media/google-ads/services/2.png"
import three from "media/google-ads/services/3.png"
import four from "media/google-ads/services/4.png"
import five from "media/google-ads/services/5.png"
import six from "media/google-ads/services/6.png"
import seven from "media/google-ads/services/7.png"
import eight from "media/google-ads/services/8.png"
import nine from "media/google-ads/services/9.png"
// Next
import Image from "next/image"

const data = [
    {
        icon: one,
        title: "Keyword Research & Analysis",
        para: "We go beyond basic keywords, identifying high-intent search terms that put your ads in front of users ready to take action.",
        link: "javascript:;"
    },
    {
        icon: two,
        title: "Landing Page Optimization",
        para: "An ad click is just the start. We design and optimize landing pages to ensure your traffic turns into leads and sales.",
        link: "javascript:;"
    },
    {
        icon: three,
        title: "PPC Management",
        para: "Our real-time bid optimization and A/B testing ensure your budget is spent efficiently, reducing wasted spend and increasing conversions.",
        link: "javascript:;"
    },
    {
        icon: four,
        title: "Paid Search Advertising",
        para: "We create targeted search ads that show up at the perfect moment—when customers are actively looking for your product or service.",
        link: "javascript:;"
    },
    {
        icon: five,
        title: "Remarketing Campaigns",
        para: "Most visitors don’t convert on their first visit. We bring them back with smart remarketing ads that re-engage potential buyers and drive them to complete their purchase.",
        link: "javascript:;"
    },
    {
        icon: six,
        title: "Conversion Rate Optimization (CRO)",
        para: "We analyze user behavior and fine-tune your campaigns to improve ad performance, reduce drop-offs, and increase sales.",
        link: "javascript:;"
    },
    {
        icon: seven,
        title: "Amazon PPC",
        para: "Get your products in front of ready-to-buy shoppers with strategic Amazon ads that increase visibility and sales on the world’s biggest marketplace.",
        link: "javascript:;"
    },
    {
        icon: eight,
        title: "YouTube Ads",
        para: "Video ads drive engagement like no other. We craft attention-grabbing, high-converting video ads that put your brand in front of the right audience.",
        link: "javascript:;"
    },
    {
        icon: nine,
        title: "Social Media Advertising",
        para: "From Facebook to Instagram, we target the right audience with compelling creatives that drive clicks, engagement, and high-value conversions.",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ icon, title, para, link }) => (
            <div className="transition-all duration-300 cursor-pointer py-5 md:[&:nth-child(1)]:border-r-2 [&:nth-child(1)]:border-b-2 lg:[&:nth-child(2)]:border-r-2 [&:nth-child(2)]:border-b-2 [&:nth-child(3)]:border-b-2 lg:[&:nth-child(4)]:border-r-2 [&:nth-child(4)]:border-b-2 md:[&:nth-child(5)]:border-r-2 [&:nth-child(5)]:border-b-2 [&:nth-child(6)]:border-b-2 md:[&:nth-child(7)]:border-r-2 lg:[&:nth-child(8)]:border-r-2 px-5 group hover:bg-primary [&:nth-child(7)]:border-b-2 [&:nth-child(8)]:border-b-2 lg:[&:nth-child(7)]:border-b-0 lg:[&:nth-child(8)]:border-0 md:[&:nth-child(9)]:border-r-2 lg:[&:nth-child(9)]:border-0 md:[&:nth-child(3)]:border-r-2 lg:[&:nth-child(3)]:border-r-0">
                <Image src={icon} alt="Click First SMM" className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                <h3 className="mt-7 mb-3 text-[18px] xl:text-[19px] 2xl:text-[22px] leading-snug font-semibold group-hover:text-white transition-all duration-300">
                    {title}
                </h3>
                <p className="text-[14px] 2xl:text-[15px] leading-relaxed mb-5 group-hover:text-white transition-all duration-300">
                    {para}
                </p>
                <div dangerouslySetInnerHTML={{
                    __html: `<a href=${link} class='text-[14px] text-primary font-medium inline-flex items-center gap-2.5 group-hover:text-white transition-all duration-300'>
                    <span>See More Details</span>
                    <img src="/home/opportunity/r-arrow.png" alt='Click First SMM' width='28' height='10' class='group-hover:brightness-0 group-hover:invert transition-all duration-300 group-hover:rotate-180' />
                </a>`}} />
            </div>
        ))
    )
}