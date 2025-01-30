// Next
import Image from "next/image"
// Media
import one from "media/why-choose/1.png"
import two from "media/why-choose/2.png"
import three from "media/why-choose/3.png"
import four from "media/why-choose/4.png"
import five from "media/why-choose/5.png"
import six from "media/why-choose/6.png"

const data = [
    {
        icon: one,
        title: "ROI That Actually Matters",
        para: "No more wasted budgets. We ensure every marketing dollar drives revenue, engagement, and sustainable growth."
    },
    {
        icon: two,
        title: "Precision-Targeted Marketing",
        para: "We don’t believe in one-size-fits-all. Our data-driven approach ensures your brand reaches the right people at the right time."
    },
    {
        icon: three,
        title: "More Leads, Less Effort",
        para: "Running a business is hard enough. Let us handle your marketing while you focus on what you do best."
    },
    {
        icon: four,
        title: "No Guesswork, Just Results",
        para: "Tired of agencies that overpromise and underdeliver? We back every decision with strategy, analytics, and real-time optimizations."
    },
    {
        icon: five,
        title: "Transparent & Actionable Insights",
        para: "No confusing reports. We provide clear, easy-to-understand performance breakdowns, so you always know what’s working."
    },
    {
        icon: six,
        title: "Your Growth Partner",
        para: "We’re not just a service provider; we’re invested in your success and committed to long-term brand domination."
    }
]

export default function WhyChoose({ wrapperCss = "pt-[100px]" }) {
    return (
        <section>
            <div className={`${wrapperCss}`}>
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative">
                        <h2 className="text-[32px] sm:text-[35px] lg:text-[50px] font-semibold leading-tight mb-3">
                            Why <span className="text-primary">Choose</span> Us?
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text max-w-[600px]">
                            We solve real problems and deliver real results. Here’s why businesses trust us to elevate their digital presence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
                        {
                            data && data.map(({ icon, title, para }, i) => (
                                <div key={i} className="py-10 px-5 sm:px-3 md:px-5 rounded-xl text-center odd:bg-[linear-gradient(185deg,_rgba(41,72,255,0.19)_0%,_rgba(41,72,255,0)_100%)] even:bg-[linear-gradient(185deg,_rgba(246,172,0,0.19)_0%,_rgba(246,172,0,0)_100%)]">
                                    <Image src={icon} alt="Click First SMM" className="inline-block" />
                                    <h3 className="text-[18px] lg:text-[20px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 mt-5 leading-snug text-black">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed max-w-[300px] sm:max-w-[95%] inline-block text-text">
                                        {para}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}