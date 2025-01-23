// Components
import { CTA } from "@/components"
// Media
import one from "media/google-ads/vs/1.png"
import two from "media/google-ads/vs/2.png"
import txt from "media/google-ads/vs/vs.png"
// Next
import Image from "next/image"

export default function VS() {
    return (
        <section>
            <div className="pt-[100px]">
                <div className="container">
                    <div className="text-center mb-[50px] z-20 relative max-w-[1024px] mx-auto">
                        <p className="text-[18px] sm:text-[20px] lg:text-[25px] font-semibold text-secondary leading-tight mb-3">
                            SEO Vs PPC
                        </p>
                        <h2 className="text-[25px] sm:text-[35px] md:text-[34px] lg:text-[40px] xl:text-[45px] font-semibold leading-tight mb-5">
                            Which Is The Right Strategy For Your Brand?
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            Understanding your target demographics and analyzing their online activities are vital to determine whether PPC, organic search or a combination of these digital marketing strategies is the best approach for your business.
                        </p>
                    </div>
                    <div className="xl:flex xl:items-center gap-x-5 gap-y-10 justify-between text-center text-white bg-black rounded-2xl py-10 px-5 sm:p-10">
                        <div className="xl:basis-[50%]">
                            <Image src={one} alt="Click First SMM" className="inline-block" />
                            <h3 className="text-[20px] sm:text-[25px] md:text-[30px] 2xl:text-[35px] font-semibold my-4 leading-tight">
                                Search Engine Optimization
                            </h3>
                            <p className="text-[14px] sm:text-[16px] xl:max-w-[450px] 2xl:max-w-[500px] leading-relaxed inline-block mb-5">
                                Search Engine Optimization (SEO) improves your website’s visibility in search engine results through strategic keyword use and content optimization. This enhances organic traffic and boosts your site's authority over time. Effective SEO requires ongoing adjustment to align with search engine algorithms.
                            </p>
                            <CTA css="hover:bg-secondary" />
                        </div>
                        <Image src={txt} alt="Click First SMM" className="inline-block my-10 xl:my-0" />
                        <div className="xl:basis-[50%]">
                            <Image src={two} alt="Click First SMM" className="inline-block" />
                            <h3 className="text-[20px] sm:text-[25px] md:text-[30px] 2xl:text-[35px] font-semibold my-4 leading-tight">
                                Pay-Per-Click
                            </h3>
                            <p className="text-[14px] sm:text-[16px] xl:max-w-[450px] 2xl:max-w-[500px] leading-relaxed inline-block mb-5">
                                Pay-Per-Click (PPC) advertising drives immediate traffic by placing targeted ads on search engines and charging you only for clicks. It offers precise audience targeting and quick results. Regular campaign optimization is key to maximizing the return on your PPC investment.
                            </p>
                            <CTA css="hover:bg-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}