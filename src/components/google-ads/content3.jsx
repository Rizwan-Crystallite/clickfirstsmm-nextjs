// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/google-ads/content3.png"

export default function Content3() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">What is PPC?</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Pay per click marketing is a paid search model used to build brand awareness, promote brand offerings and gain immediate traction from specific audience segments. With PPC, advertisers only pay each time a user clicks on the PPC ads -- hence the name pay-per-click.
                                </p>
                                <p>
                                    People usually think of Google PPC when hearing or talking about what is pay per click. But pay-per-click goes beyond the Google search engine results pages (SERPs) and the Google Display Network. Social media sites, such as YouTube, Facebook, Pinterest and LinkedIn, also use the pay per click model.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
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