// Next
import Image from "next/image"
// Media
import bg from "media/search-engine-optimization/hero/bg.png"
import screens from "media/youtube-monetization/hero/right.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary pt-[150px]">
                <Image src={bg} alt="Click First SMM" priority fill sizes="100vw" className="object-cover -z-10" />
                <div className="container">
                    <div className="lg:flex items-center gap-x-5 xl:gap-x-10 mb-7">
                        <div className="text-white max-w-[580px] lg:max-w-[545px] xl:max-w-[650px] pb-10 xl:pb-0">
                            <p className="text-[16px] max-w-[90%] sm:max-w-full sm:text-[20px] xl:text-[25px] font-semibold text-secondary leading-tight mb-3">
                                Youtube Monetization
                            </p>
                            <h1 className="text-[30px] sm:text-[45px] xl:text-[50px] leading-snug font-semibold mb-4">
                                YouTube Growth Isn’t About Luck. It’s About Strategy.
                            </h1>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal mb-7">
                                Most creators are stuck chasing trends, hoping for a viral hit. That’s not a strategy, it’s a gamble. We don’t do gimmicks. We build sustainable, scalable growth that turns views into revenue and channels into brands. If you’re done guessing and ready for real results, let’s talk.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                        </div>
                        <div>
                            <Image src={screens} alt="Click First SMM" priority className="animate-pulse max-w-[300px] sm:max-w-[400px] mx-auto lg:max-w-full mt-10 lg:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}