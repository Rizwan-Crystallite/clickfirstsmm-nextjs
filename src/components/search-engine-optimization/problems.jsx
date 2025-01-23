// Components
import { CTA, FrontEndForm } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/search-engine-optimization/problems/1.png"
import two from "media/search-engine-optimization/problems/2.png"
import three from "media/search-engine-optimization/problems/3.png"
import four from "media/search-engine-optimization/problems/4.png"
import five from "media/search-engine-optimization/problems/5.png"
import six from "media/search-engine-optimization/problems/6.png"

const data = [
    {
        icon: one,
        text: "Your Business Is Not Showing On Top Search Results?"
    },
    {
        icon: two,
        text: "Your SEO Strategy Is Failing?"
    },
    {
        icon: three,
        text: "You Are Only Investing But Not Making Any Profits?"
    },
    {
        icon: four,
        text: "You Are Not Getting Organic Traffic On Your Website?"
    },
    {
        icon: five,
        text: "You Are Not Getting Qualified Leads?"
    },
    {
        icon: six,
        text: "Your Current SEO Company Is Not Providing Results?"
    }
]

export default function Problems() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 xl:divide-x-2 2xl:gap-x-10 items-center gap-5">
                        <div className="max-w-[650px] xl:max-w-full">
                            <h2 className="text-[28px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[45px] 2xl:text-[50px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Is Your Business Facing
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    These Problems?
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Enhance your online presence with expert SEO services aimed at boosting traffic and maximizing revenue. Our strategic, data-driven approach ensures higher search engine rankings, increased visibility, and substantial growth in your sales.
                                </p>
                            </div>
                            <ul className="mb-10 grid-cols-1 grid md:grid-cols-2 gap-x-5 gap-y-7 text-[14px] 2xl:text-[15px] leading-relaxed sm:leading-normal">
                                {
                                    data && data.map(({ icon, text }, i) => (
                                        <li key={i} className="flex items-center gap-x-5">
                                            <span className="w-[50px] text-center">
                                                <Image src={icon} alt="Click First SMM" className="inline-block" />
                                            </span>
                                            <span className="inline-block w-[calc(100%-70px)] 2xl:w-[calc(100%-90px)]">{text}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div>
                            <div className="px-5 py-10 sm:p-10 bg-white rounded-xl max-w-[530px] mx-auto mt-10 xl:mt-0 shadow-xl">
                                <h2 className="text-[25px] sm:text-[40px] text-black font-semibold leading-tight mb-3 text-center">
                                    Get A Free SEO Audit
                                </h2>
                                <hr className="inline-block mb-2 w-full h-[3px]" />
                                <p className="text-center text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text mb-7">
                                    Improve your site's performance and visibility with a free SEO audit to identify key enhancement opportunities.
                                </p>
                                <FrontEndForm label={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}