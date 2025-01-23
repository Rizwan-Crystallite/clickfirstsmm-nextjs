// Components
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import one from "media/youtube-optimization/content2.png"
import path from "media/path-2.webp"

export default function Content2() {
    return (
        <section>
            <div className="py-[100px] bg-primary">
                <div className="container">
                    <div className="grid xl:grid-cols-2 gap-x-5 items-center">
                        <div className="text-white">
                            <h2 className="text-[24px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[42px] 2xl:text-[48px] font-semibold leading-snug mb-5">
                                <span className="block px-1 sm:px-2 py-1 bg-secondary w-max mb-1">Engagement Techniques to</span>
                                <span className="block px-1 sm:px-2 py-1 bg-black w-max">Boost Viewer Interaction</span>
                            </h2>
                            <div className="text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal grid grid-cols-1 gap-y-5 mb-7">
                                <p>
                                    Boosting viewer interaction is key to enhancing your YouTube channel's success. Start by incorporating strong calls-to-action (CTAs) within your videos to encourage likes, comments, and subscriptions. Pose questions to your audience, prompting them to share their thoughts and engage with your content.
                                </p>
                                <p>
                                    Utilize YouTube’s interactive features, such as end screens and cards, to guide viewers to related videos or playlists, keeping them engaged with your channel for longer periods. Respond to comments and interact with your audience to build a community and foster loyalty. By actively engaging with your viewers and creating opportunities for interaction, you’ll increase your channel’s visibility, foster a dedicated audience, and improve overall performance.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-5">
                                <CTA css="hover:bg-white hover:text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
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