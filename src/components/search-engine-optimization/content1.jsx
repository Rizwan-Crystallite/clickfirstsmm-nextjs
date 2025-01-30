// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/search-engine-optimization/content1.png"

export default function Content1() {
    return (
        <section>
            <div className="pb-[50px] pt-[100px] xl:py-[100px] text-black">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[21px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[35px] 2xl:text-[42px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Optimize Your Website Today,
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max mb-1">
                                    Because Waiting Won’t Get 
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max">
                                    You Customers!
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                Let’s be real; whether you're just starting out or have been in business for years, you want one thing: Sales, Revenue, and Growth. And what drives those? Customers.
                                </p>
                                <p>
                                But if your ideal customers can’t find you online, your competitors will win. That’s where we come in. We turn your website into a traffic magnet that attracts, engages, and converts visitors into loyal buyers.
                                </p>
                            </div>
                            <h3 className="text-[19px] sm:text-[30px] 2xl:text-[35px] font-semibold leading-tight mb-2">
                                Be The <span className="text-primary">Number 1</span>, Stay On <span className="text-primary">Number 1</span>
                            </h3>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Let us help you dominate your industry, rank higher, and turn searches into success.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div>
                            <Image src={One} alt="Click First SMM" className="animate-pulse mx-auto mt-10 xl:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}