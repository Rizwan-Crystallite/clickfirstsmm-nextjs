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
        title: "Understanding Your Goals",
        text: "Once our clients choose to work with us, we arrange initial meetings to better understand their business and marketing goals."
    },
    {
        icon: two,
        title: "SEO Audit",
        text: "After gathering their SEO goals, we start executing our process with a complete SEO analysis and SEO audit services for your website."
    },
    {
        icon: three,
        title: "Competitive Analysis",
        text: "The most important aspect of web SEO services is learning about competitors. Our SEO specialists perform exhaustive research on the industry to identify the key competitors."
    },
    {
        icon: four,
        title: "On Page Optimization",
        text: "On page optimization is perhaps the most important aspect of the entire Search Engine Optimization."
    },
    {
        icon: five,
        title: "Off Page Optimization",
        text: "The more authority your site has, the more Google loves it! Our Off page SEO services provider helps your brand build digital authority. With our off-page optimization."
    },
    {
        icon: six,
        title: "Reporting & Analysis",
        text: "We don't hide anything from our customers and keep them in the loop throughout the process of SEO. We offer our clients various reporting options to choose from - weekly."
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
                        <h2 className="text-[26px] sm:text-[35px] md:text-[40px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] leading-snug font-semibold mb-10">
                            Our 6-Step SEO Process Helps
                            Your Customers Find You First!
                        </h2>
                        <div className="grid grid-cols-1 w-[95%] xl:w-[85%] h-[700px] overflow-y-scroll pr-5 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-accent  [&::-webkit-scrollbar-thumb]:bg-[#313131]">
                            {
                                data && data.map(({ icon, title, text }, i) => (
                                    <div key={i} className="transition-all duration-300 cursor-pointer py-5 pr-5 border-b-2 border-secondary">
                                        <Image src={icon} alt="Click First SMM" className="" />
                                        <h3 className="mt-7 mb-3 text-[20px] 2xl:text-[25px] leading-tight font-semibold  transition-all duration-300">
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
