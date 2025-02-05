// Components
import { CTA } from "@/components"

const data = [
    {
        title: "Access To All Influencers",
        para: "Easily reach your target audience from a global network of influencers across all relevant platforms."
    },
    {
        title: "14 Years Of Experience",
        para: "Benefit from years of experience to design successful campaigns and increase your brand awareness."
    },
    {
        title: "Access To Vips",
        para: "Opt for top-notch collaborations and increase your brand awareness through partnerships with celebrities."
    },
    {
        title: "Intensive Knowledge",
        para: "Rely on comprehensive industry knowledge to form the best partnerships for your campaign."
    },
    {
        title: "Market-Oriented Pricing Policy",
        para: "Get unbeatable value for your influencer marketing investment."
    },
    {
        title: "True Influencer Experts",
        para: "Work with a team of professionals who are passionately dedicated to the world of influencer marketing."
    },
    {
        title: "Influencer Analysis Tools",
        para: "We don’t just highlight our own software, but have access to all analysis tools available on the market."
    },
    {
        title: "Individual Bookings",
        para: "You don’t want to implement an entire influencer marketing campaign with us, but only book individual influencers? That’s no problem for us either!"
    },
    {
        title: "Planning & Setup Of Your Software",
        para: "We offer customized solutions for our clients by taking into account their individual needs and goals."
    }
]

export default function Benefits() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative max-w-[1024px] mx-auto">
                        <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                            Benefits
                        </p>
                        <h2 className="text-[28px] sm:text-[35px] lg:text-[50px] font-semibold leading-tight mb-5">
                            What Added Value Do We Offer?
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Unlock your channel's potential with our comprehensive YouTube optimization services. From keyword research and video SEO to analytics and audience retention, we ensure your content reaches and engages a wider audience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10 mb-[50px]">
                        {
                            data && data.map(({ title, para }, i) => (
                                <div key={i} className="py-10 px-5 sm:px-3 md:px-5 rounded-xl text-center bg-white group hover:bg-primary transition-all duration-300 shadow-lg">
                                    <h3 className="text-[18px] md:text-[25px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 leading-tight text-black group-hover:text-white transition-all duration-300">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed max-w-[340px] inline-block text-text group-hover:text-white transition-all duration-300">
                                        {para}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                        <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                    </div>
                </div>
            </div>
        </section>
    )
}