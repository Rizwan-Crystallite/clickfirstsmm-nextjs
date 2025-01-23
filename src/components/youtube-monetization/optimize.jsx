// Next
import Image from "next/image"
// Media
import one from "media/youtube-monetization/optimize/1.png"
import two from "media/youtube-monetization/optimize/2.png"
import three from "media/youtube-monetization/optimize/3.png"

const data = [
    {
        icon: one,
        title: "Generate Revenue",
        para: "Earn income from ads, sponsorships, and merchandise sales."
    },
    {
        icon: two,
        title: "Professional Growth",
        para: "Gain recognition and opportunities by building a financially sustainable channel."
    },
    {
        icon: three,
        title: "Enhanced Content Quality",
        para: "Invest earnings back into your channel to improve video production and viewer experience."
    }
]

export default function Optimize() {
    return (
        <section>
            <div className="pb-[100px] pt-[50px] text-black">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative">
                        <h2 className="text-[25px] sm:text-[28px] md:text-[35px] lg:text-[45px] font-semibold leading-tight mb-5">
                            Why <span className="text-primary">Optimize</span> Your <span className="text-primary">YouTube</span> Channel?
                        </h2>
                        <p className="max-w-[700px] lg:max-w-[938px] inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            In today’s digital landscape, simply uploading videos is not enough. Optimization is key to ensuring that your content reaches the right audience and performs at its best. Our services focus on:
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