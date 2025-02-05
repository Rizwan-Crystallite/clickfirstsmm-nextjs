// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import right from "media/about_content1.png"

export default function Content1() {
    return (
        <section>
            <div className="bg-black relative z-10">
                <div className="container relative">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white my-10 xl:my-0">
                            <h2 className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[50px] font-semibold leading-snug mb-8">
                                Who <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">We </span> Are
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    ClickFirstSMM is a digital marketing agency that only provides top-notch quality services and never compromises its values. We proliferate at an unstoppable pace because the world of digitalization keeps changing, and so do our campaigns and strategies. Our inspiration is creativity, and we strive for progress every single day.
                                </p>
                                <p>
                                    By that time, we constructively faced every challenge and grew into a marketing powerhouse that is ready to transform the world with its innovative and intellectual minds. ClickFirstSMM never stops what others stop at; we aim to achieve high and outrun the competition through utilizing the proper channels.
                                </p>
                                <p>
                                    Our mission is not only restricted to attracting the potential audience but to build a robust relationship, retain them and attain loyalty.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-white hover:!text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                        </div>
                        <div className="mt-10 xl:mt-0">
                            <Image src={right} alt="Click First SMM" className="mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}