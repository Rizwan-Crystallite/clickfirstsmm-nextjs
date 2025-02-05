// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import bg from "media/social-media-advertising/content1/bg.png"
import right from "media/social-media-advertising/content1/right.png"

export default function Content1() {
    return (
        <section>
            <div className="py-[100px] bg-black relative z-10">
                <Image src={bg} alt="Click First SMM" fill placeholder="blur" sizes="100vw" className="object-cover -z-10" />
                <div className="container relative">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[30px] sm:text-[34px] md:text-[45px] lg:text-[50px] xl:text-[35px] 2xl:text-[42px] font-semibold leading-snug mb-8">
                                Get Full Control On The Progress Of Your <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">Project</span> With Us!
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    Analytics play a vital role in measuring the progress of the commenced project. The ups and downs of the curves and the peaks of the plots speak volumes of the momentum of the job. We don’t leave our clients hanging and walkthrough with them in every step involved in the tasks. With proper graphs and data analytics, we help them know the status of their business growth so that they can have full confidence in us!
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