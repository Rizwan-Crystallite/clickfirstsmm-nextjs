// Components
import { AutoPlaySlider, CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/social-media-management/content2/1.png"
import two from "media/social-media-management/content2/2.png"
import clip from "media/social-media-management/content2/clip.png"
import path from "media/path-2.webp"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-black relative z-10 overflow-hidden">
                <Image src={path} alt="Click First SMM" className="absolute bottom-0 left-0 -z-10 opacity-20" />
                <div className="container relative">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[30px] sm:text-[35px] md:text-[45px] xl:text-[40px] 2xl:text-[45px] font-semibold leading-relaxed mb-4">
                                Let’s Get <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:-bottom-2">Social</span> - Elevate Your Brand in the Digital Age
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed text-justify sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    In today’s fast-paced digital world, businesses must do more than just exist online—they need to thrive. Navigating the complexities of social media, customer engagement, and digital marketing requires the right tools, strategies, and expertise.
                                </p>
                                <p>
                                    By harnessing the power of social media, data-driven insights, and cutting-edge technologies, you can turn challenges into opportunities. Streamline your marketing, boost customer interactions, and create meaningful brand experiences that drive real business growth.
                                </p>
                                <p>
                                    Success doesn’t happen by chance: it happens by design. Optimizing your online presence, leveraging advanced analytics, and executing targeted strategies ensures your business stands out, attracts the right audience, and achieves long-term sustainability.
                                </p>
                                <p>
                                    The digital landscape is evolving, are you evolving with it?
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-white hover:!text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                            </div>
                        </div>
                        <div className="mt-10 xl:mt-0">
                            <Image src={clip} alt="Click First SMM" className="hidden xl:block absolute right-[90px] 2xl:right-[150px] z-20 -top-[130px] w-[400px]" />
                            <AutoPlaySlider arrows={false} dotsCss="mt-5 !w-[200px] mx-auto">
                                {
                                    [one, two, one, two].map((e, i) => (
                                        <div key={i} className="shrink-0 grow-0 basis-full pl-4">
                                            <Image src={e} alt="Click First SMM" className="mx-auto" />
                                        </div>
                                    ))
                                }
                            </AutoPlaySlider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}