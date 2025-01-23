// Components
import { CTA, FrontEndForm } from "@/components"

export default function Form() {
    return (
        <section>
            <div className="pb-[100px] pt-[50px]">
                <div className="container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 xl:divide-x-2 2xl:gap-x-10 items-center gap-5">
                        <div className="">
                            <h2 className="text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] 2xl:text-[50px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Optimize Your Success
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    with Google Ads PPC
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Optimize your success with Google Ads PPC by leveraging precise targeting and strategic keyword bidding. Our tailored campaigns ensure your ads reach the right audience at the right time, maximizing visibility and conversions. Track performance with detailed analytics to continually refine and enhance your advertising efforts for the best results.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div>
                            <div className="px-5 py-10 sm:p-10 bg-white rounded-xl max-w-[530px] mx-auto mt-10 xl:mt-0 shadow-xl">
                                <h2 className="text-[25px] sm:text-[35px] text-black font-semibold leading-tight mb-3 text-center">
                                    Request A Free Quote
                                </h2>
                                <p className="text-center text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text mb-7">
                                    Cost-effectiveness. Consumer-centric—the crudity of book marketing, delivered!
                                </p>
                                <FrontEndForm label={false} button="Click To Become The Next Big Brand!" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}