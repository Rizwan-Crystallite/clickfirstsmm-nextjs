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
                                    As There Comes No Better
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max">
                                    Tomorrow!
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Let’s face it. Whether you are new to the business arena or have been running an enterprise for many years, there are certain things you wish to have, ALWAYS. Sales, Revenue, and Profit! And who brings these requisites? Customers and only CUSTOMERS! But are you having trouble getting those ideal customers? If yes, need not worry. Have Jumpto1 on your side to
                                </p>
                            </div>
                            <h3 className="text-[20px] sm:text-[30px] 2xl:text-[35px] font-semibold leading-tight mb-2">
                                Be The <span className="text-primary">Number 1</span>, Be On <span className="text-primary">Number 1</span>
                            </h3>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    And enjoy heavy footfalls in your business arena with our professional SEO services!
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