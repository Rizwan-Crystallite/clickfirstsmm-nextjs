// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import One from "media/home/content1.webp"

export default function Content1() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div>
                            <h2 className="text-[25px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[42px] 2xl:text-[48px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-primary text-white w-max mb-1">Surpass Your Competitors</span>
                                <span className="block px-1 sm:px-2 py-1 bg-black text-white w-max">with Dynamic Creatives</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7 text-justify text-text">
                                <p>
                                    Don't let dull visuals hold your business back from reaching its full potential. At Click First SMM, we craft eye-catching graphics, videos, and other multimedia assets that pack a punch and leave a lasting impression on your target customers.
                                </p>
                                <p>
                                    Our team of seasoned creative designers knows how to develop content that stops scrollers in their tracks. Whether you're looking to showcase a new product, highlight your company culture, or simply stay top-of-mind with your followers, we have the skills and expertise to create assets that spark curiosity, drive engagement, and deliver measurable results for your brand.
                                </p>
                                <p>
                                    But it's not just about pretty pictures - our approach is rooted in data and analytics. We'll work closely with you to understand your audience, identify the platforms and content formats that resonate best, and continuously optimize your campaigns for maximum impact. By partnering with Click First SMM, you'll be able to elevate your brand's presence, boost awareness, and ultimately drive tangible growth for your business.
                                </p>
                                <p>
                                    So why settle for boring, ineffective creatives when you can up-level your social media game with the power of captivating visuals? Contact Click First SMM today and start crafting a content strategy that will take your brand to new heights. Get ready to say goodbye to creatives and hello to social media success!
                                </p>
                            </div>
                            <CTA css="hover:bg-secondary" theme="primary" size="large" />
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