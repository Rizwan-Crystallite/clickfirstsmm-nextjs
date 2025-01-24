// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/influencer-marketing/services/1.png"
import two from "media/influencer-marketing/services/2.png"
import three from "media/influencer-marketing/services/3.png"
import four from "media/influencer-marketing/services/4.png"
import five from "media/influencer-marketing/services/5.png"
import six from "media/influencer-marketing/services/6.png"
import seven from "media/influencer-marketing/services/7.png"
import left from "media/search-engine-optimization/deliverplatforms/left.png"
import right from "media/search-engine-optimization/deliverplatforms/right.png"

export default function Services() {
    return (
        <section>
            <div className="py-[100px] bg-black text-white">
                <div className="container">
                    <div className="text-center mb-[50px] max-w-[670px] mx-auto">
                        <p className="text-[18px] sm:text-[20px] xl:text-[25px] font-semibold text-secondary leading-tight mb-3">
                            Services
                        </p>
                        <h2 className="text-[28px] sm:text-[40px] lg:text-[50px] font-semibold leading-tight">
                            Influencer Marketing. Your
                            brand, our reach!
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-x-5 xl:gap-x-10 items-center py-10 px-5 sm:p-10 bg-primary rounded-2xl mx-auto max-w-[1000px] mb-10" >
                        <div className="mb-10 lg:mb-0">
                            <Image src={one} alt="Click First SMM" className="mx-auto" />
                        </div>
                        <div>
                            <h2 className="text-[25px] sm:text-[35px] font-semibold leading-snug mb-5 text-center lg:text-left">
                                Influencer Marketing Full Service (from a budget of $10,000)
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-center lg:text-left max-w-[600px] lg:max-w-full mx-auto">
                                <p>
                                    We manage your influencer marketing campaign from the idea, campaign management to reporting completely for you. Get professional advice, save costs, valuable time, and nerves, and lead your campaign to the desired goals with our help.
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-start gap-5">
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Request Now" />
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-x-5 xl:gap-x-10 items-center py-10 px-5 sm:p-10 bg-primary rounded-2xl mx-auto max-w-[1000px] mb-10">
                        <div>
                            <h2 className="text-[25px] sm:text-[35px] font-semibold leading-snug mb-5 text-center lg:text-left">
                                Self-Campaign-Service (possible from a budget of $1,000)
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-center lg:text-left max-w-[600px] lg:max-w-full mx-auto">
                                <p>
                                    If you want to independently and uncomplicatedly set up your campaign in our system, book all influencers interested in your campaign individually, and communicate directly with them, then our Self-Campaign-Service is just right for you!
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-start gap-5">
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Request Now" />
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <Image src={two} alt="Click First SMM" className="mx-auto" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-x-5 xl:gap-x-10 items-end mx-auto max-w-[1000px] mb-10">
                        <div className="py-10 px-5 sm:p-10 bg-primary rounded-2xl">
                            <h2 className="text-[25px] sm:text-[35px] font-semibold leading-snug mb-5 text-center lg:text-left">
                                Influencer-Marketing Software
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-center lg:text-left max-w-[550px] lg:max-w-full mx-auto">
                                <p>
                                    Are you still managing your campaigns through Excel sheets? Do you want to centrally manage all campaigns and view and record all key metrics? Then let us introduce you to our software and benefit from fair monthly rates.
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-start gap-5 mb-7">
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Request Now" />
                            </div>
                            <Image src={three} alt="Click First SMM" className="mx-auto" />
                        </div>
                        <div className="md:grid md:grid-cols-2 lg:grid-cols-1 md:items-center md:gap-5 mt-10 lg:mt-0 lg:gap-0">
                            <Image src={four} alt="Click First SMM" className="mx-auto  mb-10 md:mb-0 lg:mb-20" />
                            <div className="py-10 px-5 sm:p-10 bg-primary rounded-2xl relative z-10">
                                <h2 className="text-[25px] sm:text-[35px] font-semibold leading-snug mb-5 text-center md:text-left max-w-[300px] mx-auto md:mx-[inherit]">
                                    Strong growth
                                </h2>
                                <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-center md:text-left max-w-[300px] mx-auto md:mx-[inherit]">
                                    <p>
                                        For strong growth, create engaging content, interact with viewers, and optimize your monetization strategies effectively.
                                    </p>
                                </div>
                                <div className="flex justify-center md:justify-start gap-5 mb-7">
                                    <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Request Now" />
                                </div>
                                <Image src={five} alt="Click First SMM" className="absolute lg:bottom-5 lg:right-5 right-0 bottom-0 opacity-50 -z-10 md:opacity-100" />
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-x-5 xl:gap-x-10 mx-auto max-w-[1000px] mb-10">
                        <div>
                            <div className="py-10 px-5 sm:p-10 bg-primary rounded-2xl">
                                <h2 className="text-[25px] sm:text-[35px] font-semibold leading-snug mb-5 text-center lg:text-left">
                                    TesterWorld - Word of Mouth-Marketing
                                </h2>
                                <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-center lg:text-left max-w-[550px] lg:max-w-full mx-auto">
                                    <p>
                                        With TesterWorld, you have access to one of the largest product testing communities in the DACH region: more than 480,000 testers and over 14 years of experience through thousands of successfully implemented influencer and product testing campaigns in all industries. Individual and professional marketing and market research campaigns that you can use profitably and effectively.
                                    </p>
                                </div>
                                <div className="flex justify-center lg:justify-start gap-5">
                                    <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Request Now" />
                                </div>
                            </div>
                            <Image src={four} alt="Click First SMM" className="mx-auto my-10 lg:mt-20" />
                        </div>
                        <div className="py-10 px-5 sm:p-10 bg-primary rounded-2xl">
                            <Image src={six} alt="Click First SMM" className="mx-auto mb-7" />
                            <h2 className="text-[25px] sm:text-[35px] font-semibold leading-snug mb-5 text-center lg:text-left">
                                TesterWorld - Word of Mouth-Marketing
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-center lg:text-left max-w-[550px] lg:max-w-full mx-auto">
                                <p>
                                    With TesterWorld, you have access to one of the largest product testing communities in the DACH region: more than 480,000 testers and over 14 years of experience through thousands of successfully implemented influencer and product testing campaigns in all industries. Individual and professional marketing and market research campaigns that you can use profitably and effectively.
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-start gap-5">
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Request Now" />
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-x-5 xl:gap-x-10 items-center py-10 px-5 sm:p-10 bg-primary rounded-2xl mx-auto max-w-[1000px]">
                        <div>
                            <h2 className="text-[25px] sm:text-[35px] font-semibold leading-snug mb-5 text-center lg:text-left">
                                Influencer-Marketing Workshop
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-center lg:text-left max-w-[600px] lg:max-w-full mx-auto">
                                <p>
                                    We advise your team, your employees on all topics related to influencer marketing.
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-start gap-5">
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Request Now" />
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <Image src={seven} alt="Click First SMM" className="mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}