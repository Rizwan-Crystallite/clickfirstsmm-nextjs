// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/email-marketing/content1.png"

export default function Content1() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[25px] sm:text-[35px] md:text-[40px] lg:text-[45px] xl:text-[42px] 2xl:text-[50px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">What Is Email Marketing</span>
                                <span className="bg-black text-white block px-1 sm:px-2 py-1 max-w-[280px] sm:max-w-full sm:w-max text-[16px] leading-relaxed sm:text-[20px]">(And Why It’s a Game-Changer for Businesses)?</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Email marketing is one of the most cost-effective and high-impact ways to grow a business. Unlike paid ads that drain your budget or social media where algorithms limit your reach, email gives you direct access to your audience for a fraction of the cost. It allows businesses to send targeted messages to thousands of potential customers at once, nurturing leads, boosting sales, and building long-term relationships. With email, every message lands in a subscriber’s inbox, meaning you’re not just hoping for engagement, you’re creating it. Whether you're launching a product, driving repeat sales, or staying top of mind, email marketing delivers consistent results without the ongoing expense of traditional advertising. If you're looking for a low-cost, high-return marketing channel, email is your most powerful tool.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" href="tel:346-299-2202" text="Call Now: 346-299-2202"   />
                            </div>
                        </div>
                        <div>
                            <Image src={One} alt="Click First SMM" className="animate-pulse mx-auto mt-10 xl:mt-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}