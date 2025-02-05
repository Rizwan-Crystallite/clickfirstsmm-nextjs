// Css
import "./slider.css"
// Components
import { AutoPlaySlider, CTA } from "@/components"
// Media
import C1 from "media/casestudy/one/1.webp"
import C2 from "media/casestudy/one/2.webp"
import C3 from "media/casestudy/one/3.webp"
import upArrow from "media/casestudy/uparrow.webp"
// Next
import Image from "next/image"

const data = [
    {
        screenshots: [C1, C2, C3],
        title: "See How Victorious Helped GE Increase Organic Impressions By 284% In Two Years.",
        para: "A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives.",
        stats: [
            {
                num: "104%",
                name: "Organic Traffic"
            },
            {
                num: "252%",
                name: "Organic Clicks"
            },
            {
                num: "104%",
                name: "Organic Traffic"
            },
            {
                num: "104%",
                name: "Organic Clicks"
            }
        ]
    },
    {
        screenshots: [C1, C2, C3],
        title: "See How Victorious Helped GE Increase Organic Impressions By 284% In Two Years.",
        para: "A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives.",
        stats: [
            {
                num: "104%",
                name: "Organic Traffic"
            },
            {
                num: "252%",
                name: "Organic Clicks"
            },
            {
                num: "104%",
                name: "Organic Traffic"
            },
            {
                num: "104%",
                name: "Organic Clicks"
            }
        ]
    },
    {
        screenshots: [C1, C2, C3],
        title: "See How Victorious Helped GE Increase Organic Impressions By 284% In Two Years.",
        para: "A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives.",
        stats: [
            {
                num: "104%",
                name: "Organic Traffic"
            },
            {
                num: "252%",
                name: "Organic Clicks"
            },
            {
                num: "104%",
                name: "Organic Traffic"
            },
            {
                num: "104%",
                name: "Organic Clicks"
            }
        ]
    },
    {
        screenshots: [C1, C2, C3],
        title: "See How Victorious Helped GE Increase Organic Impressions By 284% In Two Years.",
        para: "A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives,A social media strategy for Click First involves creating a tailored plan to enhance your brand's presence and engagement across multiple platforms. This strategy includes setting clear objectives.",
        stats: [
            {
                num: "104%",
                name: "Organic Traffic"
            },
            {
                num: "252%",
                name: "Organic Clicks"
            },
            {
                num: "104%",
                name: "Organic Traffic"
            },
            {
                num: "104%",
                name: "Organic Clicks"
            }
        ]
    }
]

export default function Slider() {
    return (
        <AutoPlaySlider wrapperClasses="casestudy_slider lg:!overflow-visible relative z-[1] lg:before:content-[''] lg:before:top-0 lg:before:bottom-0 lg:before:-left-[1000px] lg:before:h-full lg:before:w-[1000px] lg:before:bg-black lg:before:absolute lg:before:z-[2]">
            {
                data && data.map(({ screenshots, title, para, stats }, i) => (
                    <div className="basis-full lg:basis-3/4 shrink-0 grow-0 pl-4 slides overflow-hidden" key={i}>
                        <div className="px-3 py-10 sm:p-7 bg-primary rounded-[20px]">
                            <div className="lg:grid lg:grid-cols-3 lg:gap-5 bg-[#F2F2F2] rounded-xl p-7 flex gap-6 snap-x overflow-x-auto">
                                {
                                    screenshots.map((e, i) => (
                                        <div key={i} className="rounded-2xl overflow-hidden snap-center shrink-0">
                                            <Image src={e} alt="Click First SMM" />
                                        </div>
                                    ))
                                }
                            </div>
                            <h3 className="text-[20px] xl:text-[18px] 2xl:text-[22px] font-semibold leading-snug my-5">
                                {title}
                            </h3>
                            <p className="text-justify  text-[14px] xl:text-[16px] leading-relaxed mb-5">
                                {para}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 mb-[40px]">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Read Case Study" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                            <div className="grid grid-cols-2 gap-5 md:gap-0 md:flex md:divide-x-2 items-center">
                                {
                                    stats && stats.map(({ num, name }, i) => (
                                        <div
                                            className={` border py-3 text-center md:text-left md:border-0 md:py-0
                                          ${i === 0 ? "md:pr-10" : ""}
                                          ${[1, 2].includes(i) ? "md:px-10" : ""}
                                          ${i === stats.length - 1 ? "md:pl-10" : ""}`}
                                            key={i}
                                        >
                                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                                <Image src={upArrow} alt="Click First SMM" />
                                                <h4 className="font-bold text-[25px] xl:text-[30px] leading-none text-secondary">{num}</h4>
                                            </div>
                                            <p className="text-[14px] xl:text-[16px] leading-relaxed">{name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </AutoPlaySlider>
    )
}
