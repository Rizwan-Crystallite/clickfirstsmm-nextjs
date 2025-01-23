// Components
import { CTA, FrontEndForm } from "@/components"

export default function Form() {
    return (
        <section>
            <div className="pb-[100px] pt-[50px]">
                <div className="container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 xl:divide-x-2 2xl:gap-x-10 items-center gap-5">
                        <div className="">
                            <h2 className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[45px] xl:text-[33px] 2xl:text-[35px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Boost Your Sales And Double
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max mb-1">
                                    Your Conversion Rates With Our
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Social Media Marketing Agency!
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text sm:max-w-[90%] md:max-w-full lg:max-w-[85%] xl:max-w-[95%] 2xl:max-w-[95%]">
                                <p>
                                    Don't you want to invest your money where it doubles? ClickFirstSMM has the best social media marketing specialists for sure. Capitalized on the years of experience, our social media marketing team enjoys an eminent name being the most trustworthy and result-driven social media marketing company in the whole of the USA. With marketing perfection at hand and a lateral thinking approach, our advertising professionals devise branding experiences that help brands steal the limelight.
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