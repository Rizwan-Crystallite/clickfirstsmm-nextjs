// Next
import Image from "next/image"
// Media
import bg from "media/email-marketing/hero/bg.png"
import right from "media/email-marketing/hero/right.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary pt-[150px] pb-[50px] lg:pb-[100px]">
                <Image src={bg} alt="Click First SMM" priority fill sizes="100vw" className="object-cover -z-10" />
                <div className="container">
                    <div className="lg:flex items-center gap-x-5 xl:gap-x-10">
                        <div className="text-white md:max-w-[550px] xl:max-w-[640px]">
                            <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                                Email Marketing
                            </p>
                            <h1 className="text-[32px] sm:text-[50px] md:text-[45px] xl:text-[55px] leading-snug font-semibold mb-4">
                                Emails Aren’t Dead. Your Strategy Is.
                            </h1>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal mb-7">
                                Every time someone says “email doesn’t work,” what they really mean is “I don’t know how to make it work.” The problem isn’t the inbox, it’s what you’re putting in it. If your emails are getting ignored, it’s because they sound like noise, not value. If your list isn’t converting, it’s because you’re sending what you want, not what they need. Email isn’t outdated. Bad marketing is. Let’s fix that.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                        </div>
                        <div>
                            <Image src={right} priority alt="Click First SMM" className="animate-pulse max-w-[300px] sm:max-w-[400px] mx-auto lg:max-w-full mt-10 lg:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}