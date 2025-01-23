// Components
import { CTA } from "@/components"

const data = [
    {
        title: "Immediate Visibility",
        para: "Immediate visibility through Google Ads places your business at the top of search results instantly."
    },
    {
        title: "Targeted Advertising",
        para: "Targeted advertising reaches the right audience through keywords, location, demographics, and timing."
    },
    {
        title: "Measurable Results",
        para: "Measurable results offer detailed reports to track performance and optimize Google Ads campaigns."
    },
    {
        title: "Cost Control",
        para: "Cost control in Google Ads allows you to set budgets and manage spending precisely."
    },
    {
        title: "Increased ROI",
        para: "Increased ROI with Google Ads comes from precise targeting, tracking, and effective budget management."
    },
    {
        title: "Brand Awareness",
        para: "Brand awareness grows as Google Ads places your business prominently in search results."
    },
    {
        title: "Remarketing Opportunities",
        para: "Brand awareness grows as Google Ads places your business prominently in search results."
    },
    {
        title: "Scalability",
        para: "Scalability in Google Ads enables you to easily adjust campaign size and budget to match growth."
    },
    {
        title: "Enhanced Ad Extensions",
        para: "Enhanced ad extensions in Google Ads add extra details like site links, calls, and locations."
    }
]

export default function Benefits() {
    return (
        <section>
            <div className="py-[100px] bg-accent">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative max-w-[1024px] mx-auto">
                        <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                            Benefits
                        </p>
                        <h2 className="text-[28px] sm:text-[35px] lg:text-[50px] font-semibold leading-tight mb-5">
                            Key Benefits Of Google Ads PPC
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Google Ads PPC offers numerous advantages, including immediate visibility and precise targeting. These benefits can significantly enhance your online marketing strategy and drive better results.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10 mb-[50px]">
                        {
                            data && data.map(({ title, para }, i) => (
                                <div key={i} className="py-10 px-5 sm:px-3 md:px-5 rounded-xl text-center bg-white group hover:bg-primary transition-all duration-300 shadow-lg">
                                    <h3 className="text-[18px] md:text-[25px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 leading-tight text-black group-hover:text-white transition-all duration-300">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed max-w-[300px] inline-block text-text group-hover:text-white transition-all duration-300">
                                        {para}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                        <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                    </div>
                </div>
            </div>
        </section>
    )
}