// Media
import one from "media/youtube-monetization/services/1.png"
import two from "media/youtube-monetization/services/2.png"
import three from "media/youtube-monetization/services/3.png"
import four from "media/youtube-monetization/services/4.png"
import five from "media/youtube-monetization/services/5.png"
import six from "media/youtube-monetization/services/6.png"
import seven from "media/youtube-monetization/services/7.png"
import eight from "media/youtube-monetization/services/8.png"
import nine from "media/youtube-monetization/services/9.png"
// Next
import Image from "next/image"

const data = [
    {
        icon: one,
        title: "Channel Optimization",
        para: "Your content deserves to be seen. We fine-tune your channel with top-performing keywords, strategic structuring, and algorithm-friendly techniques to maximize discoverability.",
        link: "javascript:;"
    },
    {
        icon: two,
        title: "Content Strategy Planning",
        para: "Great content needs the right positioning. We craft powerful titles, descriptions, and tags designed to increase visibility, engagement, and long-term channel growth.",
        link: "javascript:;"
    },
    {
        icon: three,
        title: "Video SEO Optimization",
        para: "Ranking higher isn’t luck—it’s science. We optimize your videos with proven SEO tactics, ensuring your content reaches the right audience at the right time.",
        link: "javascript:;"
    },
    {
        icon: four,
        title: "AdSense Account Setup",
        para: "Monetization starts with the right foundation. We set up and optimize your AdSense account for maximum revenue potential, backed by performance insights and analytics.",
        link: "javascript:;"
    },
    {
        icon: five,
        title: "Brand Partnership Management",
        para: "Your channel is a brand—treat it like one. We help you secure partnerships, optimize sponsorships, and create high-converting brand deals that align with your content.",
        link: "javascript:;"
    },
    {
        icon: six,
        title: "Merchandise Store Integration",
        para: "Turn your audience into paying customers. We seamlessly integrate merchandise stores, playlists, and end screens to boost engagement and drive conversions.",
        link: "javascript:;"
    },
    {
        icon: seven,
        title: "Super Chats Setup",
        para: "Turn engagement into earnings. We optimize your Super Chats setup to maximize audience interaction and increase revenue during live streams.",
        link: "javascript:;"
    },
    {
        icon: eight,
        title: "Membership Tiers Creation",
        para: "Loyal fans want more from you—give them exclusive perks, content, and community benefits with a well-structured membership program. We help set it up the right way.",
        link: "javascript:;"
    },
    {
        icon: nine,
        title: "Performance Analytics Reports",
        para: "Success is in the numbers. We analyze your channel’s performance, audience behavior, and revenue streams to fine-tune strategies for consistent growth.",
        link: "javascript:;"
    }
]

export default function Card() {
    return (
        data && data.map(({ icon, title, para, link }) => (
            <div className="transition-all duration-300 cursor-pointer py-5 md:[&:nth-child(1)]:border-r-2 [&:nth-child(1)]:border-b-2 lg:[&:nth-child(2)]:border-r-2 [&:nth-child(2)]:border-b-2 [&:nth-child(3)]:border-b-2 lg:[&:nth-child(4)]:border-r-2 [&:nth-child(4)]:border-b-2 md:[&:nth-child(5)]:border-r-2 [&:nth-child(5)]:border-b-2 [&:nth-child(6)]:border-b-2 md:[&:nth-child(7)]:border-r-2 lg:[&:nth-child(8)]:border-r-2 px-5 group hover:bg-primary [&:nth-child(7)]:border-b-2 [&:nth-child(8)]:border-b-2 lg:[&:nth-child(7)]:border-b-0 lg:[&:nth-child(8)]:border-0 md:[&:nth-child(9)]:border-r-2 lg:[&:nth-child(9)]:border-0 md:[&:nth-child(3)]:border-r-2 lg:[&:nth-child(3)]:border-r-0">
                <Image src={icon} alt="Click First SMM" className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                <h3 className="mt-7 mb-3 text-[20px] 2xl:text-[25px] leading-tight font-semibold group-hover:text-white transition-all duration-300">
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