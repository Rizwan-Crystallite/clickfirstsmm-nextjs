// Next
import Image from "next/image"
// Media
import one from "media/email-marketing/whywork/1.png"
import two from "media/email-marketing/whywork/2.png"
import three from "media/email-marketing/whywork/3.png"

const data = [
    {
        icon: one,
        title: "Proven Results",
        para: "Our strategies deliver measurable results, driving higher engagement and conversions for your business."
    },
    {
        icon: two,
        title: "Expert Team",
        para: "Work with seasoned professionals who tailor solutions to your unique marketing needs."
    },
    {
        icon: three,
        title: "Innovative Solutions",
        para: "Benefit from cutting-edge techniques and tools to stay ahead in email marketing."
    }
]

export default function WhyWork() {
    return (
        <section>
            <div className="py-[100px] text-black">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative">
                        <h2 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-semibold leading-tight mb-5">
                            Why <span className="text-primary">Work</span> With Us?
                        </h2>
                        <p className="max-w-[600px] lg:max-w-[938px] inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Partner with us to leverage our expertise and innovative strategies for exceptional email marketing. We drive results through tailored solutions that meet your unique needs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                        {
                            data && data.map(({ icon, title, para }, i) => (
                                <div key={i} className="py-10 px-5 sm:px-3 md:px-5 rounded-xl bg-[linear-gradient(185deg,_rgba(41,72,255,0.19)_0%,_rgba(41,72,255,0)_100%)] text-center">
                                    <Image src={icon} alt="Click First SMM" className="inline-block" />
                                    <h3 className="text-[18px] md:text-[25px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 mt-5 leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed text-text max-w-[300px] md:max-w-full inline-block">
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