// Media
import one from "media/youtube-optimization/services/1.png"
import two from "media/youtube-optimization/services/2.png"
import three from "media/youtube-optimization/services/3.png"
import four from "media/youtube-optimization/services/4.png"
import five from "media/youtube-optimization/services/5.png"
import six from "media/youtube-optimization/services/6.png"
import seven from "media/youtube-optimization/services/7.png"
import eight from "media/youtube-optimization/services/8.png"
import nine from "media/youtube-optimization/services/9.png"
// Next
import Image from "next/image"

const data = [
    {
        icon: one,
        title: "Keyword Research",
        para: "Discover top-performing keywords to boost your video's search ranking and attract more viewers effortlessly.",
        link: "javascript:;"
    },
    {
        icon: two,
        title: "Video SEO",
        para: "Optimize titles, descriptions, and tags to enhance your video's visibility and improve search rankings effectively.",
        link: "javascript:;"
    },
    {
        icon: three,
        title: "Channel Optimization",
        para: "Enhance your channel's layout and branding to create a professional, engaging experience that attracts viewers.",
        link: "javascript:;"
    },
    {
        icon: four,
        title: "Analytics and Reporting",
        para: "Track performance with detailed analytics and reports to gain insights and drive strategic channel improvements.",
        link: "javascript:;"
    },
    {
        icon: five,
        title: "Custom Thumbnails",
        para: "Create visually striking custom thumbnails to enhance video appeal and increase click-through rates effectively.",
        link: "javascript:;"
    },
    {
        icon: six,
        title: "Playlists and End Screens",
        para: "Organize videos with playlists and use end screens to boost viewer engagement and increase watch time.",
        link: "javascript:;"
    },
    {
        icon: seven,
        title: "Audience Retention Strategies",
        para: "Implement strategies to keep viewers engaged longer, improving watch time and overall channel performance.",
        link: "javascript:;"
    },
    {
        icon: eight,
        title: "Competitor Analysis",
        para: "Analyze competitors to identify trends and opportunities, helping you outperform and capture a larger audience.",
        link: "javascript:;"
    },
    {
        icon: nine,
        title: "Content Strategy",
        para: "Develop a targeted content strategy to consistently create high-quality videos that attract and retain viewers.",
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