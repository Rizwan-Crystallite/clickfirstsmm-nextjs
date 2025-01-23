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
        para: "Search ads appear on search engine results pages, targeting users actively looking for your products.",
        link: "javascript:;"
    },
    {
        icon: two,
        title: "Landing Page Optimization",
        para: "Track performance with detailed analytics and reports to gain insights and drive strategic channel improvements.",
        link: "javascript:;"
    },
    {
        icon: three,
        title: "PPC Management",
        para: "Social ads target users on social media, enhancing engagement and driving conversions with precision.",
        link: "javascript:;"
    },
    {
        icon: four,
        title: "Paid Search Advertising",
        para: "Remarketing ads re-engage users who visited your site before, encouraging them to complete their purchase.",
        link: "javascript:;"
    },
    {
        icon: five,
        title: "Remarketing Campaigns",
        para: "Google Shopping ads display your products with images and prices, driving highly targeted traffic to your store.",
        link: "javascript:;"
    },
    {
        icon: six,
        title: "Conversion Rate Optimization (CRO)",
        para: "In-stream ads play before, during, or after video content, capturing viewer attention and enhancing brand visibility.",
        link: "javascript:;"
    },
    {
        icon: seven,
        title: "Amazon PPC",
        para: "Gmail Sponsored Promotions (GSP) appear in users' inboxes, delivering targeted ads within their email.",
        link: "javascript:;"
    },
    {
        icon: eight,
        title: "YouTube Ads",
        para: "Local Services Ads connect businesses with nearby customers, showcasing services in local search results.",
        link: "javascript:;"
    },
    {
        icon: nine,
        title: "Social Media Advertising",
        para: "Amazon PPC Ads boost product visibility, targeting shoppers actively searching for items similar to yours.",
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