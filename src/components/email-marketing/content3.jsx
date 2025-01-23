// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import bg from "media/social-media-management/content4.png"

const data = [
    {
        title: "Strategy Development",
        para: "We craft a tailored email marketing strategy by understanding your goals and audience, ensuring targeted content and effective campaign planning."
    },
    {
        title: "Design and Implementation",
        para: "We create visually compelling emails with personalized content, ensuring seamless setup and testing for optimal delivery and performance."
    },
    {
        title: "Analysis and Optimization",
        para: "We analyze campaign performance through detailed metrics, refining strategies based on insights to improve engagement and drive results."
    }
]

export default function Content3() {
    return (
        <section>
            <div className="py-[100px] bg-accent text-black relative z-10">
                <Image src={bg} alt="Click First SMM" fill placeholder="blur" sizes="100vw" className="object-cover -z-10" />
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="">
                            <h2 className="text-[30px] sm:text-[34px] md:text-[40px] lg:text-[50px] xl:text-[36px] 2xl:text-[42px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">
                                    Our Email Marketing
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">
                                    Process
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] text-text leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    We begin with a thorough understanding of your goals and audience to create a customized email strategy. From crafting compelling content to analyzing performance, we ensure each step is designed to maximize impact and achieve your marketing objectives.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-5 text-text mt-10 xl:mt-0 md:w-[90%] lg:w-[80%] mx-auto xl:w-full">
                            {
                                data && data.map(({ title, para }, i) => (
                                    <div key={i} className="bg-[#E4E4E4] pl-7 pr-3 py-10 sm:p-10 rounded-r-lg relative before:content-[''] before:absolute before:w-5 before:h-full before:top-0 before:bottom-0 before:left-0 before:bg-[#D6D6D6] hover:before:w-full before:-z-10 z-10 before:transition-all before:duration-300 sm:[&:nth-child(2)]:ml-10">
                                        <h3 className="mb-3 text-[18px] sm:text-[25px] md:text-[25px] leading-tight font-semibold text-black">
                                            {title}
                                        </h3>
                                        <p className="text-[14px] sm:text-[16px] leading-relaxed">
                                            {para}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}