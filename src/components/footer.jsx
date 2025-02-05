// Next
import Image from "next/image"
import Link from "next/link"
// Media
import logo from "media/footer/logo.webp"
import facebook from "media/footer/facebook.webp"
import instagram from "media/footer/instagram.webp"
import twitter from "media/footer/twitter.webp"
import youtube from "media/footer/youtube.webp"
import linkedin from "media/footer/linkedin.webp"
import mapmarker from "media/footer/mapmarker.webp"
import envelope from "media/footer/envelope.webp"
import phone from "media/footer/phone.webp"

export default function Footer() {
    return (
        <footer>
            <div className="bg-[#F7F7F7] py-[60px] xl:py-[80px]">
                <div className="container">
                    <div className="flex flex-wrap justify-between">
                        <div className="basis-full lg:basis-auto md:text-center lg:text-left">
                            <Link href="/" className="inline-block">
                                <Image src={logo} alt="Click First SMM" className="inline-block" />
                            </Link>
                            <ul className="flex gap-7 mt-10 md:justify-center mb-10 lg:mb-0 lg:justify-start">
                                {
                                    [
                                        [facebook, "https://www.facebook.com/clickfirstsmm"],
                                        [instagram, "https://www.instagram.com/clickfirstsmm"],
                                        [twitter, "https://twitter.com/clickfirstsmm"],
                                        [youtube, "https://www.youtube.com/@clickfirstsmm"],
                                        [linkedin, "https://www.linkedin.com/company/clickfirst-smm"]
                                    ].map(([icon, link], i) => (
                                        <li key={i}>
                                            <Link href={link} target="_blank" className="group">
                                                <Image src={icon} alt="Click First SMM" className="grayscale transition-all duration-500 group-hover:grayscale-0" />
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mb-5 md:mb-0 basis-full md:basis-auto">
                            <h4 className="text-[18px] leading-tight font-bold text-black mb-5">
                                LINKS
                            </h4>
                            <ul className="grid grid-cols-1 gap-y-3">
                                {
                                    [["Home", "/"], ["About", "/about-us"], ["Contact", "/contact-us"]].map(([text, link], i) => (
                                        <li key={i}>
                                            <Link href={link} className="text-[14px] 2xl:text-[16px] text-text leading-tight hover:text-secondary">
                                                {text}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mb-5 md:mb-0  basis-full md:basis-auto">
                            <h4 className="text-[18px] leading-tight font-bold text-black mb-5">
                                SERVICES
                            </h4>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-3 gap-x-5">
                                {
                                    [
                                        ["Social Media Marketing", "/social-media-marketing-services"],
                                        ["Social Media Advertising", "/social-media-advertising-services"],
                                        ["Social Media Management", "/social-media-management-services"],
                                        ["YouTube Optimization", "/youtube-optimization-services"],
                                        ["Search Engine Optimization", "/youtube-monetization-services"],
                                        ["Email Marketing", "/email-marketing-services"],
                                        ["Influencer Marketing", "/influencer-marketing-services"],
                                        ["YouTube Monetization", "/youtube-monetization-services"],
                                        ["Google Ads (PPC)", "/google-ads-services"]
                                    ].map(([text, link], i) => (
                                        <li key={i}>
                                            <Link href={link} className="text-[14px] 2xl:text-[16px] text-text leading-tight hover:text-secondary">
                                                {text}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="basis-[310px] xl:basis-[310px] 2xl:basis-[330px]">
                            <h4 className="text-[18px] leading-tight font-bold text-black mb-5">
                                CONTACT
                            </h4>
                            <ul className="grid grid-cols-1 gap-y-3">
                                {
                                    [
                                        ["Headquarters: 9402 Synott RD apt 114, Houston Texas 77083", "/", mapmarker],
                                        ["Operations: 4424 W Sam Houston PKWY N Westway #301 Houston, TX 77041", "/", mapmarker],
                                        ["support@clickfirstsmm.com", "mailto:support@clickfirstsmm.com", envelope],
                                        ["346-299-2202", "tel:346-299-2202", phone]
                                    ].map(([text, link, icon], i) => (
                                        <li key={i}>
                                            <Link href={link} className="text-[14px] 2xl:text-[16px] text-text leading-relaxed hover:text-secondary inline-flex gap-3 items-start">
                                                <span className="inline-block w-[20px]">
                                                    <Image src={icon} height="auto" alt="Click First SMM" className="relative top-[6px]" />
                                                </span>
                                                <span className="inline-block w-[calc(100%-20px)]">{text}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-black text-white">
                <div className="container">
                    <div className="flex xs:flex-col justify-between items-center gap-5">
                        <p className="text-[14px]  2xl:text-[16px] leading-normal">
                            Copyright @ClickFirstSMM 2025
                        </p>
                        <ul className="flex divide-x">
                            {
                                [["Terms and Conditions", "/terms-and-conditions"], ["Privacy Policy", "/privacy-policy"]].map(([text, link], i) => (
                                    <li key={i} className="first:pr-1.5 last:pl-1.5">
                                        <Link href={link} className="text-[14px] 2xl:text-[16px] leading-tight hover:text-secondary">
                                            {text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}