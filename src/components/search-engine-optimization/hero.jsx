// Next
import Image from "next/image"
// Media
import bg from "media/search-engine-optimization/hero/bg.png"
import screens from "media/search-engine-optimization/hero/right.png"
// Components
import { CTA } from "@/components"

export default function Hero() {
    return (
        <section>
            <div className="relative z-10 bg-primary pt-[150px]">
                <Image src={bg} alt="Click First SMM" fill priority placeholder="blur" sizes="100vw" className="object-cover -z-10" />
                <div className="container">
                    <div className="lg:flex items-center gap-x-5 xl:gap-x-10 mb-7">
                        <div className="text-white max-w-[580px] lg:max-w-[545px] xl:max-w-[650px] pb-10 xl:pb-0">
                            <p className="text-[16px] max-w-[90%] sm:max-w-full sm:text-[20px] xl:text-[25px] font-semibold text-secondary leading-tight mb-3">
                                Professional Search Engine Optimization Services
                            </p>
                            <h1 className="text-[30px] sm:text-[45px] xl:text-[50px] leading-snug font-semibold mb-4">
                                Expert SEO Services To Boost Traffic And Maximize Revenue
                            </h1>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal mb-7">
                                Enhance your online presence with expert SEO services aimed at boosting traffic and maximizing revenue. Our strategic, data-driven approach ensures higher search engine rankings, increased visibility, and substantial growth in your sales.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="bg-black border-black hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div>
                            <Image src={screens} alt="Click First SMM" className="animate-pulse max-w-[300px] sm:max-w-[400px] mx-auto lg:max-w-full mt-10 lg:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}