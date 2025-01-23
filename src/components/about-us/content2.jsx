// Next
import Image from "next/image"
// Media
import one from "media/about_content2.png"
// Components
import { CTA } from "@/components"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="text-center mb-[50px] mx-auto max-w-[850px]">
                        <h2 className="text-[30px] sm:text-[30px] md:text-[35px] lg:text-[45px] font-semibold leading-tight mb-5">
                            The <span className="text-primary">Masters</span> Of Digital <span className="text-primary">Marketing</span>
                        </h2>
                        <p className="max-w-[480px] sm:max-w-[700px] lg:max-w-[938px] inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            We have a team of pro marketers who believe in perfection at every step. We do not just come up with a rough idea; whatever we propose, we achieve! Our experts are the assets to gives your brand a competitive edge every single time.
                        </p>
                    </div>
                    <Image src={one} alt="Click First SMM" className="inline-block mx-auto" />
                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center mt-[50px]">
                        <CTA css="hover:bg-primary" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="!text-black !border-black hover:bg-black hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                    </div>
                </div>
            </div>
        </section>
    )
}
