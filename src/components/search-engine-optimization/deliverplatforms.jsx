// Media
import left from "media/search-engine-optimization/deliverplatforms/left.png"
import right from "media/search-engine-optimization/deliverplatforms/right.png"
import one from "media/search-engine-optimization/deliverplatforms/1.png"
import two from "media/search-engine-optimization/deliverplatforms/2.png"
import three from "media/search-engine-optimization/deliverplatforms/3.png"
import four from "media/search-engine-optimization/deliverplatforms/4.png"
import five from "media/search-engine-optimization/deliverplatforms/5.png"
import six from "media/search-engine-optimization/deliverplatforms/6.png"
import seven from "media/search-engine-optimization/deliverplatforms/7.png"
import eight from "media/search-engine-optimization/deliverplatforms/8.png"
import nine from "media/search-engine-optimization/deliverplatforms/9.png"
import ten from "media/search-engine-optimization/deliverplatforms/10.png"
import eleven from "media/search-engine-optimization/deliverplatforms/11.png"
import twelve from "media/search-engine-optimization/deliverplatforms/12.png"
// Next
import Image from "next/image"

export default function DeliverPlatforms() {
    return (
        <section>
            <div className="py-[100px] relative z-10 overflow-hidden">
                <Image src={left} alt="Click First SMM" className="absolute left-[-50px] -z-10 animate-awards opacity-25 md:opacity-100" />
                <div className="container">
                    <div className="text-center mx-auto max-w-[880px] xl:max-w-[1050px] mb-[50px]">
                        <h2 className="text-[30px] sm:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-semibold leading-tight mb-5">
                            Results We <span className="text-primary">Deliver</span> Everyday!
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Enhance your online presence with expert SEO services aimed at boosting traffic and maximizing revenue. Our strategic, data-driven approach ensures higher search engine rankings, increased visibility, and substantial growth in your sales.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-x-10 gap-y-10 flex-wrap">
                        {
                            [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve].map((e, i) => (
                                <div key={i}>
                                    <Image src={e} alt="Click First SMM" />
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
