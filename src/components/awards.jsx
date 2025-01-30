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
                        <p className="max-w-[718px] lg:max-w-[850px] inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            At ClickFirst, we believe that great partnerships lead to even greater results. By teaming up with industry leaders, we bring you the best in digital marketing innovation and expertise. Our collaborative approach ensures that your campaigns are not only creative but also highly effective and easy to implement.
                        </p>
                    </div>
                    <div className="xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto bg-primary rounded-3xl px-5 lg:p-5 grid grid-cols-1 xl:grid-cols-3 text-center text-white divide-y xl:divide-x xl:divide-y-0 z-20 relative">
                        <div className="py-5">
                            <div className="h-[120px] flex items-center justify-center">
                                <Image src={one} priority alt="Click First SMM" className="inline-block" />
                            </div>
                            <h3 className="text-[25px] xl:text-[20px] 2xl:text-[25px] font-semibold mb-3 mt-5 leading-tight">
                                Partnerships
                            </h3>
                            <p className="text-[14px] lg:text-[16px] xl:text-[14px] leading-relaxed xl:max-w-[300px] 2xl:max-w-[340px] mx-auto">
                                Partnering with Industry Leaders like Meta allows us to leverage cutting-edge tools and insights, giving your business a competitive edge in the digital landscape. Together, we create strategies that drive real growth.
                            </p>
                        </div>
                        <div className="py-5">
                            <div className="h-[120px] flex items-center justify-center">
                                <Image src={two} priority alt="Click First SMM" className="inline-block" />
                            </div>
                            <h3 className="text-[25px] xl:text-[20px] 2xl:text-[25px] font-semibold mb-3 mt-5 leading-tight">
                                Awards
                            </h3>
                            <p className="text-[14px] lg:text-[16px] xl:text-[14px] leading-relaxed xl:max-w-[290px] 2xl:max-w-[340px] mx-auto">
                                We don’t guess,we analyze. Our strategies are built on solid data, ensuring every decision we make is optimized for your success. The numbers don’t lie, and they guide us to deliver campaigns that truly perform.
                            </p>
                        </div>
                        <div className="py-5">
                            <div className="h-[120px] flex items-center justify-center">
                                <Image src={three} priority alt="Click First SMM" className="inline-block" />
                            </div>
                            <h3 className="text-[25px] xl:text-[20px] 2xl:text-[25px] font-semibold mb-3 mt-5 leading-tight">
                                Recognition
                            </h3>
                            <p className="text-[14px] lg:text-[16px] xl:text-[14px] leading-relaxed xl:max-w-[300px] 2xl:max-w-[350px] mx-auto">
                                Our recognition by Clutch is a testament to our commitment to excellence. It’s proof that we deliver top-tier digital marketing solutions that get results. When you work with us, you’re choosing a partner recognized for quality and performance.
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={right} priority alt="Click First SMM" className="absolute -right-[20px] z-20 bottom-0 sm:bottom-[80px] animate-awards max-w-[200px] 2xl:max-w-full block lg:hidden xl:block" />
            </div>
        </section>
    )
}