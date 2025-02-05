// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/email-marketing/content2.png"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-primary relative z-10 overflow-hidden">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[20px] sm:text-[30px] md:text-[35px] lg:text-[45px] xl:text-[34px] 2xl:text-[40px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-secondary w-max mb-1">
                                    Email Marketing That Reaches
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black w-max">
                                    the Right People at the Right Time
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    Blasting emails to random inboxes doesn’t work. Targeted email campaigns do. Instead of hoping for engagement, we use data-driven strategies to send the right message to the right audience - increasing open rates, clicks, and conversions.
                                </p>
                                <p>
                                    With email, you’re not just reaching people: you’re building relationships, nurturing leads, and turning subscribers into loyal customers. And the best part? It’s cost-effective, scalable, and measurable.
                                </p>
                                <p>
                                    Stop wasting emails. Start sending campaigns that drive results.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Read Case Study" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                        </div>
                        <Image src={one} alt="Click First SMM" className="absolute top-0 right-0 bottom-0 w-full sm:w-[50%] object-cover h-full object-left opacity-20 -z-10 xl:opacity-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}