// Next
import Image from "next/image"
// Media
import one from "media/social-media-management/association/1.png"
import two from "media/social-media-management/association/2.png"
import three from "media/social-media-management/association/3.png"
import four from "media/social-media-management/association/4.png"

const data = [
    {
        icon: one,
        title: "Buffer",
        para: "Keyword Research serves as the lifeline of Search Engine Optimization efforts."
    },
    {
        icon: two,
        title: "Facebook Business Suite",
        para: "Keyword Research serves as the lifeline of Search Engine Optimization efforts."
    },
    {
        icon: three,
        title: "Hootsuite",
        para: "Keyword Research serves as the lifeline of Search Engine Optimization efforts."
    },
    {
        icon: four,
        title: "Sprout Social",
        para: "Keyword Research serves as the lifeline of Search Engine Optimization efforts."
    }
]

export default function Association() {
    return (
        <section>
            <div className="py-[100px] text-black">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative">
                        <h2 className="text-[32px] sm:text-[35px] lg:text-[45px] font-semibold leading-tight mb-5">
                            Platforms We Are in <span className="text-primary">Association</span> With
                        </h2>
                        <p className="max-w-[938px] inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            We love to explore every possible way to help brands extend their reach. In affiliation with these partners, we strive to sweeten your digital worth and push your brand to climb the ladder of online success!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10">
                        {
                            data && data.map(({ icon, title, para }, i) => (
                                <div key={i} className="py-10 px-5 sm:px-3 md:px-5 rounded-xl bg-[linear-gradient(185deg,_rgba(41,72,255,0.19)_0%,_rgba(41,72,255,0)_100%)] text-center">
                                    <Image src={icon} alt="Click First SMM" className="inline-block" />
                                    <h3 className="text-[18px] md:text-[25px] xl:text-[18px] 2xl:text-[20px] font-semibold mb-3 mt-5 leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[15px] leading-relaxed text-text max-w-[300px] sm:max-w-[95%] inline-block">
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