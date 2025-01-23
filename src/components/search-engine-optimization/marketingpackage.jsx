// Next
import Image from "next/image"
// Media
import badge from "media/search-engine-optimization/marketingpackage.png"
// Components
import { CTA } from "@/components"

const seo = [
    "Upto 100 Keywords",
    "Competitor Analysis",
    "Articles",
    "Blog Posts",
    "Press Releases",
    "Guest Blogs",
    "Power Posts",
    "Featured Posts",
    "Infographics",
    "Videos",
    "Directory Submissions",
    "Classified Ads",
    "Community Participation",
    "Business Profiles",
    "Google Analytics Installation",
    "Google Webmaster Installation",
    "Google Places Submissions",
    "Conversation Tracking",
    "Weekly Rankings Report",
    "Before and After Progress Reports",
    "Social Media Posts",
    "Monthly Progress Report"
];

const psa = [
    "Google Ads",
    "Bing Ads",
    "Keyword Research",
    "Competitor Analysis",
    "Ads Creation",
    "Banner Creation",
    "AdWords Account Setup",
    "AdWords Account Configuration",
    "Daily Spend Configuration",
    "Search Metrics Configuration",
    "Daily Bid Adjustment",
    "Daily Campaign Monitoring",
    "Keyword Optimization",
    "Negative Keyword Identification",
    "Google Webmaster Installation",
    "Weekly Ranking Report",
    "Google Analytics Report",
    "Monthly Progress Report"
];

const branding = [
    "Featured Posts on Yahoo",
    "Featured Posts On Entrepreneur",
    "Featured Blog Posts"
];

const smmm = [
    "Facebook/Twitter Page Creation",
    "Facebook/Twitter Posts & Outreach",
    "LinkedIn Profile Creation",
    "LinkedIn Posts and Outreach",
    "Instagram/Pinterest Page Creation",
    "Instagram/Pinterest Posts and Outreach",
    "YouTube Channel Creation",
    "YouTube Videos and Outreach",
    "Weekly/Monthly Progress Reports"
];

const psm = [
    "Facebook Ads",
    "Twitter Ads",
    "LinkedIn Ads",
    "Instagram Ads",
    "YouTube Ads",
    "Weekly/Monthly Progress Reports"
];

const website = [
    "Landing Page Optimization",
    "Call to Action Optimization",
    "Content Optimization",
    "Mobile Friendly Optimization"
];

const features = [
    "Dedicated Project Manager",
    "24 HR Support, 6 Days A Week",
    "Client Dashboard Access",
    "100% Money Back Guarantee"
]

export default function MarketingPackage() {
    return (
        <section>
            <div className="py-[100px] text-black ">
                <div className="container">
                    <div className="text-center mx-auto max-w-[880px] xl:max-w-[1050px] mb-[50px]">
                        <h2 className="text-[30px] sm:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-semibold leading-tight mb-5">
                            The Complete <span className="text-primary">Internet Marketing</span> Package!
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Enhance your online presence with expert SEO services aimed at boosting traffic and maximizing revenue. Our strategic, data-driven approach ensures higher search engine rankings, increased visibility, and substantial growth in your sales.
                        </p>
                    </div>
                    <div className="grid grid-cols-12 gap-x-2.5 2xl:gap-x-5 gap-y-10">
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div className="rounded-lg border-2 border-primary px-2.5 2xl:px-5 py-5">
                                <h4 className="text-[18px] 2xl:text-[20px] leading-tight font-semibold mb-5">
                                    SEO
                                </h4>
                                <ul className="text-[14px] sm:text-[15px] 2xl:text-[16px] leading-relaxed grid grid-cols-1 gap-y-2 text-text list-image-li-dot list-inside">
                                    {
                                        seo && seo.map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div className="rounded-lg border-2 border-secondary px-2.5 2xl:px-5 py-5 mb-2.5 2xl:mb-5">
                                <h4 className="text-[18px] 2xl:text-[20px] leading-tight font-semibold mb-5">
                                    Paid Search Advertizing
                                </h4>
                                <ul className="text-[14px] sm:text-[15px] 2xl:text-[16px] leading-relaxed grid grid-cols-1 gap-y-2 text-text list-image-li-dot list-inside">
                                    {
                                        psa && psa.map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="rounded-lg border-2 border-secondary px-2.5 2xl:px-5 py-5">
                                <h4 className="text-[18px] 2xl:text-[20px] leading-tight font-semibold mb-5">
                                    Branding
                                </h4>
                                <ul className="text-[14px] sm:text-[15px] 2xl:text-[16px] leading-relaxed grid grid-cols-1 gap-y-2 text-text list-image-li-dot list-inside">
                                    {
                                        branding && branding.map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div className="rounded-lg border-2 border-primary px-2.5 2xl:px-5 py-5 mb-2.5 2xl:mb-5">
                                <h4 className="text-[18px] 2xl:text-[20px] leading-tight font-semibold mb-5">
                                    Social Media Marketing
                                </h4>
                                <ul className="text-[14px] sm:text-[15px] 2xl:text-[16px] leading-relaxed grid grid-cols-1 gap-y-2 text-text list-image-li-dot list-inside">
                                    {
                                        smmm && smmm.map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="rounded-lg border-2 border-primary px-2.5 2xl:px-5 py-5 mb-2.5 2xl:mb-5">
                                <h4 className="text-[18px] 2xl:text-[20px] leading-tight font-semibold mb-5">
                                    Paid Social Marketing
                                </h4>
                                <ul className="text-[14px] sm:text-[15px] 2xl:text-[16px] leading-relaxed grid grid-cols-1 gap-y-2 text-text list-image-li-dot list-inside">
                                    {
                                        psm && psm.map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="rounded-lg border-2 border-primary px-2.5 2xl:px-5 py-5">
                                <h4 className="text-[18px] 2xl:text-[20px] leading-tight font-semibold mb-5">
                                    Website Optimization
                                </h4>
                                <ul className="text-[14px] sm:text-[15px] 2xl:text-[16px] leading-relaxed grid grid-cols-1 gap-y-2 text-text list-image-li-dot list-inside">
                                    {
                                        website && website.map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-12 xl:col-span-3">
                            <Image src={badge} alt="Click First SMM" className="mx-auto mb-7" />
                            <div className="rounded-lg bg-secondary px-2.5 2xl:px-5 py-5">
                                <h4 className="text-[18px] 2xl:text-[20px] leading-tight font-semibold mb-5">
                                    Features
                                </h4>
                                <ul className="text-[14px] sm:text-[15px] 2xl:text-[16px] leading-relaxed grid grid-cols-1 gap-y-2 list-image-li-mar list-inside mb-3">
                                    {
                                        features && features.map((e, i) => (
                                            <li key={i}>{e}</li>
                                        ))
                                    }
                                </ul>
                                <hr className="inline-block mb-3 w-full h-[3px] border-[#D29300]" />
                                <h4 className="text-[18px] 2xl:text-[20px] leading-tight font-semibold mb-3">
                                    Custom Pricing & Strategy
                                </h4>
                                <p className="text-[14px] sm:text-[18px] leading-relaxed sm:leading-normal">
                                    Free 30 Min Consultation
                                </p>
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href="javascript:;" class='text-[14px] sm:text-[18px] font-bold leading-tight mt-5 inline-flex items-center gap-3'>
                                    <img src='/search-engine-optimization/live-chat.png' width='23' alt='Click First SMM' height='20' />
                                    <span>Live Chat Now</span>    
                                </a>`}} />
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href="javascript:;" class='text-[14px] sm:text-[18px] font-bold leading-tight mt-5 inline-flex items-center gap-3'>
                                    <img src='/search-engine-optimization/call.png' width='20' alt='Click First SMM' height='20' />
                                    <span>(717)-908-1211</span>    
                                </a>`}} />
                                <hr className="inline-block mb-5 mt-5 w-full h-[3px] border-[#D29300]" />
                                <CTA css="!bg-primary hover:!bg-black w-full" theme="secondary" size="large" text="Get a Free Quote" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}