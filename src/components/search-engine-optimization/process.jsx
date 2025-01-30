// Media
import one from "media/search-engine-optimization/process/1.png"
import two from "media/search-engine-optimization/process/2.png"
import three from "media/search-engine-optimization/process/3.png"
import four from "media/search-engine-optimization/process/4.png"
import five from "media/search-engine-optimization/process/5.png"
import six from "media/search-engine-optimization/process/6.png"
import right from "media/search-engine-optimization/process/right.png"
// Next
import Image from "next/image"

const data = [
    {
        icon: one,
        title: "Deep-Dive Discovery & Strategy",
        text: "We don’t just guess—we analyze. We study your industry, competitors, and target audience to craft a tailor-made SEO strategy that actually works."
    },
    {
        icon: two,
        title: "Intent-Driven Keyword Optimization",
        text: "Forget irrelevant keywords! We identify search terms your ideal customers actually use when they’re ready to buy and optimize your content accordingly."
    },
    {
        icon: three,
        title: "Conversion-Optimized Content Creation",
        text: "SEO is nothing without engaging content. We create high-value, SEO-rich content that not only ranks but also turns visitors into paying customers."
    },
    {
        icon: four,
        title: "Authority-Building Link Acquisition",
        text: "We secure high-quality, industry-relevant backlinks that boost your website’s credibility and push you to the top of search results."
    },
    {
        icon: five,
        title: "Technical SEO & Speed Optimization",
        text: "Google favors websites that load fast and perform flawlessly. We fix technical issues, improve mobile-friendliness, and optimize page speed for better rankings."
    },
    {
        icon: six,
        title: "Data-Driven Adjustments & Continuous Growth",
        text: "SEO isn’t set-and-forget. We monitor performance, track conversions, and refine our strategy every month to ensure your growth never stops."
    }
]

export default function Process() {
    return (
        <section>
            <div className="bg-black py-[100px] relative z-10 text-white">
                <Image src={right} alt="Click First SMM" fill sizes="50vw" className="lg:object-cover lg:object-center lg:-z-10 lg:!w-[50%] lg:right-0 lg:left-[inherit] lg:ml-auto lg:block hidden" />
                <div className="container">
                    <div className="lg:max-w-[50%]">
                        <p className="text-[16px] sm:text-[20px] font-semibold text-secondary leading-tight mb-4">
                            Stay Ahead, Be Found First!
                        </p>
                        <h2 className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[25px] xl:text-[30px] 2xl:text-[35px] leading-snug font-semibold mb-10">
                            Our Unique 6-Step SEO Process Ensures Customers Find You Before Your Competition!
                        </h2>
                        <div className="grid grid-cols-1 w-[95%] xl:w-[90%] h-[700px] overflow-y-scroll pr-5 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-accent  [&::-webkit-scrollbar-thumb]:bg-[#313131]">
                            {
                                data && data.map(({ icon, title, text }, i) => (
                                    <div key={i} className="transition-all duration-300 cursor-pointer py-5 pr-5 border-b-2 border-secondary">
                                        <Image src={icon} alt="Click First SMM" className="" />
                                        <h3 className="mt-7 mb-3 text-[18px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] leading-snug font-semibold  transition-all duration-300">
                                            {title}
                                        </h3>
                                        <p className="text-[14px] 2xl:text-[15px] leading-relaxed transition-all duration-300">
                                            {text}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
