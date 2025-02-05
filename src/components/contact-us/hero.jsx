// Next
import Image from "next/image"
// Media
import bg from "media/general_bg.png"
import aboutTxt from "media/contact_us.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary py-[100px] lg:py-[200px]">
                <Image src={bg} alt="Click First SMM" priority fill sizes="100vw" className="object-cover -z-10" />
                <div className="container relative z-10">
                    <div className="text-center text-white max-w-[750px] lg:max-w-[950px] mx-auto mb-7">
                        <p className="text-[16px] md:text-[20px] lg:text-[25px] font-semibold text-secondary leading-snug max-w-[300px] mx-auto sm:max-w-full">
                            Your Questions, Our Priority – Reach Out Today
                        </p>
                        <Image src={aboutTxt} priority alt="Click First SMM" className="inline-block mx-auto my-8" />
                        <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal">
                            We value your feedback and are here to assist with any questions or concerns you may have. Whether you need support, have a suggestion, or simply want to learn more about our services, don’t hesitate to reach out to us. Our dedicated team is always ready to provide the help you need. Connect with us today, and let’s work together to make your experience even better and more fulfilling!
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
                        <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                        <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                    </div>
                </div>
            </div>
        </section>
    )
}