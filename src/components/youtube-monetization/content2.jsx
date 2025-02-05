// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/youtube-monetization/content2.png"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-primary">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[38px] 2xl:text-[40px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-secondary w-max mb-1">
                                    Your YouTube Channel Is a Gold
                                </span>
                                <span className="block px-1 sm:px-2 py-1 bg-black w-max">
                                    Mine Stop Digging with a Spoon.
                                </span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    You’re putting in the work. The views are coming. The audience is growing. But let’s be real, is your revenue reflecting your effort?
                                </p>
                                <p>
                                    The top creators don’t just create, they engineer their channels to print money. Every video is a revenue stream. Every upload stacks income. Every view is monetized to its full potential.
                                </p>
                                <ul className="grid grid-cols-1 gap-y-3 list-image-li-check-3 list-inside">
                                    <li>Your videos should make money while you sleep.</li>
                                    <li>Your audience should fund your growth, not just watch.</li>
                                    <li>Your content should be a business, not a guessing game.</li>
                                </ul>
                                <p>
                                    YouTube success isn’t just about grinding—it’s about monetizing smart. Stop digging with a spoon. Let’s build you a machine.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                        </div>
                        <div>
                            <Image src={one} alt="Click First SMM" className="animate-pulse mx-auto mt-10 xl:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}