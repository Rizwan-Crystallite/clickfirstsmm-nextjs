// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import bg from "media/social-media-management/content4.png"

const data = [
    {
        title: "Data-Driven at Every Step",
        para: "We start with in-depth research to understand your audience, industry trends, and competition. Every decision is based on real-time insights, not guesswork."
    },
    {
        title: "Collaborative & Client-Focused",
        para: "We don’t just work for you; we work with you. Through strategic planning sessions, we align our approach with your goals, voice, and vision."
    },
    {
        title: "Reporting & Continuous Optimization",
        para: "Data is power. We provide clear, concise reports so you always know what’s working. Our team continuously optimizes campaigns to ensure maximum engagement and ROI."
    }
]

export default function Content4() {
    return (
        <section>
            <div className="py-[100px] bg-black relative z-10">
                <Image src={bg} alt="Click First SMM" fill placeholder="blur" sizes="100vw" className="object-cover -z-10" />
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[25px] sm:text-[40px] md:text-[45px] lg:text-[45px] font-semibold leading-snug mb-5 max-w-[600px]">
                                Our Proven <span className="text-primary">Social Media</span>  Management Process
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    Success on social media isn’t just about posting—it’s about strategy, precision, and execution. Our process ensures your brand doesn’t just show up but stands out, engages, and converts.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-white hover:!text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-5 text-white mt-10 xl:mt-0 md:w-[90%] lg:w-[80%] mx-auto xl:w-full">
                            {
                                data && data.map(({ title, para }, i) => (
                                    <div key={i} className="bg-[#292929] pl-7 pr-3 py-10 sm:p-10 rounded-r-lg relative before:content-[''] before:absolute before:w-5 before:h-full before:top-0 before:bottom-0 before:left-0 before:bg-primary hover:before:w-full before:-z-10 z-10 before:transition-all before:duration-300 sm:[&:nth-child(2)]:ml-10">
                                        <h3 className="mb-3 text-[18px] sm:text-[22px] leading-snug font-semibold">
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