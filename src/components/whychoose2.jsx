// Next
import Image from "next/image"
// Media
import left from "media/search-engine-optimization/deliverplatforms/left.png"
import right from "media/search-engine-optimization/deliverplatforms/right.png"
import one from "media/youtube-optimization/why-choose/1.png"

const data = [
    {
        title: "Expert Advantage",
        para: "Track record of boosting visibility and engagement through expert strategies."
    },
    {
        title: "Tailored Solutions",
        para: "Customized plans designed to meet your unique channel goals effectively."
    },
    {
        title: "Data Insights",
        para: "Advanced analytics drive adjustments for ongoing channel performance improvement."
    }
]

export default function WhyChoose2() {
    return (
        <section>
            <div className="py-[100px] relative z-10 overflow-hidden">
                <Image src={left} alt="Click First SMM" className="absolute left-[-50px] -z-10 animate-awards opacity-25 md:opacity-100" />
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative">
                        <h2 className="text-[32px] sm:text-[35px] lg:text-[50px] font-semibold leading-tight mb-3">
                            Why <span className="text-primary">Choose</span> Us?
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text max-w-[500px] lg:max-w-full">
                            Choose us for our proven expertise and tailored strategies in YouTube optimization.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10">
                        {
                            data && data.map(({ title, para }, i) => (
                                <div key={i} className="py-10 px-5 sm:px-3 md:px-5 rounded-xl text-center odd:bg-[linear-gradient(185deg,_rgba(41,72,255,0.19)_0%,_rgba(41,72,255,0)_100%)] even:bg-[linear-gradient(185deg,_rgba(246,172,0,0.19)_0%,_rgba(246,172,0,0)_100%)]">
                                    <Image src={one} alt="Click First SMM" className="inline-block" />
                                    <h3 className="text-[18px] md:text-[25px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 mt-5 leading-tight text-black">
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
                <Image src={right} alt="Click First SMM" className="absolute right-[-100px] bottom-0 md:top-10 -z-10 animate-awards opacity-25 md:opacity-100" />
            </div>
        </section>
    )
}