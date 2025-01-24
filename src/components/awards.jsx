// Next
import Image from "next/image"
// Media
import one from "media/awards/1.webp"
import two from "media/awards/2.webp"
import three from "media/awards/3.webp"
import left from "media/awards/left.webp"
import right from "media/awards/right.webp"

export default function Awards() {
    return (
        <section>
            <div className="py-[100px] relative z-10 overflow-hidden">
                <Image src={left} alt="Click First SMM" priority className="absolute -left-[20px] top-[50px] xl:top-[100px] animate-awards max-w-[100px] sm:max-w-[150px] lg:max-w-[200px] 2xl:max-w-full" />
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative">
                        <h2 className="text-[28px] sm:text-[40px] lg:text-[50px] font-semibold leading-tight mb-5">
                            Our <span className="text-primary">Marketing</span> Partners
                        </h2>
                        <p className="max-w-[718px] lg:max-w-[818px] inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            In addition to the creative direction, we design our PowerPoint Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy.
                        </p>
                    </div>
                    <div className="max-w-[1000px] 2xl:max-w-[1200px] mx-auto bg-primary rounded-3xl px-5 lg:p-5 grid grid-cols-1 lg:grid-cols-3 text-center text-white divide-y lg:divide-x lg:divide-y-0 z-20 relative">
                        <div className="py-5">
                            <div className="h-[120px] flex items-center justify-center">
                                <Image src={one} priority alt="Click First SMM" className="inline-block" />
                            </div>
                            <h3 className="text-[25px] lg:text-[20px] 2xl:text-[25px] font-semibold mb-3 mt-5 leading-tight">
                                Partnerships
                            </h3>
                            <p className="text-[14px] sm:text-[15px] xl:text-[14px] 2xl:text-[16px] leading-relaxed max-w-[302px] lg:max-w-[80%] xl:max-w-[270px] 2xl:max-w-[302px] mx-auto">
                                Working alongside great minds is our secret to customer success.
                            </p>
                        </div>
                        <div className="py-5">
                            <div className="h-[120px] flex items-center justify-center">
                                <Image src={two} priority alt="Click First SMM" className="inline-block" />
                            </div>
                            <h3 className="text-[25px] lg:text-[20px] 2xl:text-[25px] font-semibold mb-3 mt-5 leading-tight">
                                Awards
                            </h3>
                            <p className="text-[14px] sm:text-[15px] xl:text-[14px] 2xl:text-[16px] leading-relaxed max-w-[275px] sm:max-w-[314px] lg:max-w-[75%] xl:max-w-[280px] 2xl:max-w-[314px] mx-auto">
                                We build our strategy around the data. The numbers light the way.
                            </p>
                        </div>
                        <div className="py-5">
                            <div className="h-[120px] flex items-center justify-center">
                                <Image src={three} priority alt="Click First SMM" className="inline-block" />
                            </div>
                            <h3 className="text-[25px] lg:text-[20px] 2xl:text-[25px] font-semibold mb-3 mt-5 leading-tight">
                                Recognition
                            </h3>
                            <p className="text-[14px] sm:text-[15px] xl:text-[14px] 2xl:text-[16px] leading-relaxed max-w-[255px] sm:max-w-[360px] lg:max-w-[80%] xl:max-w-full 2xl:max-w-[345px] mx-auto">
                                We love hearing from our clients and our peers. See what they have to say about us.
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={right} priority alt="Click First SMM" className="absolute -right-[20px] z-20 bottom-0 sm:bottom-[80px] animate-awards max-w-[200px] 2xl:max-w-full block lg:hidden xl:block" />
            </div>
        </section>
    )
}