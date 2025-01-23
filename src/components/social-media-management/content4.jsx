// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import bg from "media/social-media-management/content4.png"

const data = [
    {
        title: "Everything is Data-Driven",
        para: "Once our clients choose to work with us, we arrange initial meetings to better understand their business and marketing goals."
    },
    {
        title: "We Work With You and For You",
        para: "Once our clients choose to work with us, we arrange initial meetings to better understand their business and marketing goals."
    },
    {
        title: "Clear and Concise Reporting",
        para: "Once our clients choose to work with us, we arrange initial meetings to better understand their business and marketing goals."
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
                            <h2 className="text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-semibold leading-snug mb-5 max-w-[600px]">
                                Our <span className="text-primary">Social Media</span>  Management Process
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    We love to explore every possible way to help brands extend their reach. In affiliation with these partners, we strive to sweeten your digital worth and push your brand to climb the ladder of online success!
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
                                        <h3 className="mb-3 text-[18px] sm:text-[25px] md:text-[25px] leading-tight font-semibold">
                                            {title}
                                        </h3>
                                        <p className="text-[14px] sm:text-[16px] leading-relaxed xl:max-w-[480px] 2xl:max-w-full">
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