// Next
import Image from "next/image"
// Media
import bg from "media/general_bg.png"
import aboutTxt from "media/about_us.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary py-[100px] lg:py-[200px]">
                <Image src={bg} alt="Click First SMM" priority fill sizes="100vw" className="object-cover -z-10" />
                <div className="container relative z-10">
                    <div className="text-center text-white max-w-[750px] lg:max-w-[1050px] mx-auto mb-7">
                        <p className="text-[16px] md:text-[20px] lg:text-[25px] font-semibold text-secondary leading-snug max-w-[380px] mx-auto md:max-w-full">
                            Our Commitment To Excellence, Innovation, And Collaboration
                        </p>
                        <Image src={aboutTxt} priority alt="Click First SMM" className="inline-block mx-auto my-8" />
                        <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal">
                            Are your social media efforts falling short of expectations? Now more than ever, social media is a “pay-to-play” environmentrequiring all the resources you have: a cohesive game plan, 100 percent commitment and a well-defined budget. On top of organicoutreach, getting content in front of your target audience can be challenging without shelling out advertising money, whether for anongoing campaign or a once-off sponsored post.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                        <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                    </div>
                </div>
            </div>
        </section>
    )
}