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
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">What Is Email Marketing?</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-text">
                                <p>
                                    Email marketing involves sending targeted messages to your audience to build relationships, promote products, and drive engagement. It leverages personalized content to connect with subscribers, turning them into loyal customers. By analyzing subscriber behavior and preferences, you can refine your approach and improve outcomes.
                                </p>
                                <p>
                                    Effective email marketing combines strategy, design, and analytics to deliver relevant messages that resonate with your audience. By crafting well-timed and compelling emails, businesses can boost sales, enhance customer retention, and achieve their marketing goals. Regularly reviewing performance metrics helps in optimizing future campaigns for even greater success.
                                </p>
                                <p>
                                    Email marketing is a digital strategy that uses emails to communicate directly with potential and existing customers. It focuses on sending tailored messages to drive actions such as purchases, sign-ups, and engagement, helping businesses nurture leads and foster brand loyalty. This approach ensures that each message is aligned with the recipient’s interests, maximizing the impact and effectiveness of your campaigns.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="!bg-primary hover:!bg-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="border-black !text-black hover:bg-secondary hover:border-secondary hover:!text-white" theme="transparent" size="large" text="Call Now: 346-299-2202" />
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