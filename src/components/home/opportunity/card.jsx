// Media
import one from "media/home/opportunity/1.png"
import two from "media/home/opportunity/2.png"
import three from "media/home/opportunity/3.png"
import four from "media/home/opportunity/4.png"
import five from "media/home/opportunity/5.png"
import six from "media/home/opportunity/6.png"
import seven from "media/home/opportunity/7.png"
import eight from "media/home/opportunity/8.png"
import nine from "media/home/opportunity/9.png"
// Next
import Image from "next/image"

const data = [
    {
        icon: one,
        title: "Social Media Marketing",
        para: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
        link: "javascript:;"
    },
    {
        icon: two,
        title: "Social Media Management",
        para: "Boost your visibility with data-driven SEO strategies tailored to drive traffic and increase conversions.",
        link: "javascript:;"
    },
    {
        icon: three,
        title: "Social Media Advertising",
        para: "Harness the power of influencers to amplify your brand's reach and connect with your target audience.",
        link: "javascript:;"
    },
    {
        icon: four,
        title: "Influencer Marketing",
        para: "To help businesses reach potential consumers, we use Google Ads based on the demographics of the intended users.",
        link: "javascript:;"
    },
    {
        icon: five,
        title: "YouTube Optimization",
        para: "Engage your audience with personalized email campaigns designed to nurture leads and drive sales.",
        link: "javascript:;"
    },
    {
        icon: six,
        title: "YouTube Monetization",
        para: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
        link: "javascript:;"
    },
    {
        icon: seven,
        title: "Search Engine Optimization",
        para: "To help businesses reach potential consumers, we use Google Ads based on the demographics of the intended users.",
        link: "javascript:;"
    },
    {
        icon: eight,
        title: "Google Ads (PPC)",
        para: "Engage your audience with personalized email campaigns designed to nurture leads and drive sales.",
        link: "javascript:;"
    },
    {
        icon: nine,
        title: "Email Marketing",
        para: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ icon, title, para, link }) => (
            <div className="transition-all duration-300 cursor-pointer py-5 md:[&:nth-child(1)]:border-r-2 [&:nth-child(1)]:border-b-2 lg:[&:nth-child(2)]:border-r-2 [&:nth-child(2)]:border-b-2 [&:nth-child(3)]:border-b-2 lg:[&:nth-child(4)]:border-r-2 [&:nth-child(4)]:border-b-2 md:[&:nth-child(5)]:border-r-2 [&:nth-child(5)]:border-b-2 [&:nth-child(6)]:border-b-2 md:[&:nth-child(7)]:border-r-2 lg:[&:nth-child(8)]:border-r-2 px-5 group hover:bg-primary [&:nth-child(7)]:border-b-2 [&:nth-child(8)]:border-b-2 lg:[&:nth-child(7)]:border-b-0 lg:[&:nth-child(8)]:border-0 md:[&:nth-child(9)]:border-r-2 lg:[&:nth-child(9)]:border-0 md:[&:nth-child(3)]:border-r-2 lg:[&:nth-child(3)]:border-r-0">
                <Image src={icon} alt="Click First SMM" className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                <h3 className="mt-7 mb-3 text-[20px] 2xl:text-[25px] leading-tight font-semibold text-text group-hover:text-white transition-all duration-300">
                    {title}
                </h3>
                <p className="text-[14px] 2xl:text-[15px] leading-relaxed mb-5 text-text sm:max-w-[90%] group-hover:text-white transition-all duration-300">
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