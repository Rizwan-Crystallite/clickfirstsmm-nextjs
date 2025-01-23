// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import bg from "media/social-media-advertising/whychoosetabs/bg.png"

const data = [
    {
        title: "Different Personas for Various Roles",
        para: "Under our social media advertising agency, we have a dedicated team comprising content creators, account managers, and data analysts, each excelling in their specific roles. Our content creators are responsible for crafting engaging and visually appealing content that resonates with potential customers across various social media platforms, including Facebook, Instagram, and Twitter. Meanwhile, our account managers oversee client relationships, ensuring that campaigns align with business goals and deliver measurable results."
    },
    {
        title: "Goals Identification",
        para: "Under our social media advertising agency, we have a dedicated team comprising content creators, account managers, and data analysts, each excelling in their specific roles. Our content creators are responsible for crafting engaging and visually appealing content that resonates with potential customers across various social media platforms, including Facebook, Instagram, and Twitter. Meanwhile, our account managers oversee client relationships, ensuring that campaigns align with business goals and deliver measurable results."
    },
    {
        title: "Strategy Creation",
        para: "Under our social media advertising agency, we have a dedicated team comprising content creators, account managers, and data analysts, each excelling in their specific roles. Our content creators are responsible for crafting engaging and visually appealing content that resonates with potential customers across various social media platforms, including Facebook, Instagram, and Twitter. Meanwhile, our account managers oversee client relationships, ensuring that campaigns align with business goals and deliver measurable results."
    },
    {
        title: "Implementation Happens!",
        para: "Under our social media advertising agency, we have a dedicated team comprising content creators, account managers, and data analysts, each excelling in their specific roles. Our content creators are responsible for crafting engaging and visually appealing content that resonates with potential customers across various social media platforms, including Facebook, Instagram, and Twitter. Meanwhile, our account managers oversee client relationships, ensuring that campaigns align with business goals and deliver measurable results."
    },
    {
        title: "Online Advertising Campaigns",
        para: "Under our social media advertising agency, we have a dedicated team comprising content creators, account managers, and data analysts, each excelling in their specific roles. Our content creators are responsible for crafting engaging and visually appealing content that resonates with potential customers across various social media platforms, including Facebook, Instagram, and Twitter. Meanwhile, our account managers oversee client relationships, ensuring that campaigns align with business goals and deliver measurable results."
    },
    {
        title: "Tracking and Monitoring Of the Performance",
        para: "Under our social media advertising agency, we have a dedicated team comprising content creators, account managers, and data analysts, each excelling in their specific roles. Our content creators are responsible for crafting engaging and visually appealing content that resonates with potential customers across various social media platforms, including Facebook, Instagram, and Twitter. Meanwhile, our account managers oversee client relationships, ensuring that campaigns align with business goals and deliver measurable results."
    }
]

export default function WhyChooseTabs() {
    return (
        <section>
            <div className="pt-[50px]">
                <div className="container">
                    <div className="text-center mb-[50px] max-w-[1080px] mx-auto">
                        <h2 className="text-[23px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-semibold leading-snug mb-5">
                            Why <span className="text-primary">Choose</span> Our Social Media Advertising? We Build Connected <span className="text-primary">Brand Experiences</span>
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            ClickFirstSMM is a social media advertising company that goes above and beyond to digitally connect your brand with motivated buyers and spark the buying impulse in dormant consumers. Our 6-step recipe for advertising is cooked to perfection, enabling businesses to TRANSFORM into the next big BRAND!
                        </p>
                    </div>
                </div>
                <div className="text-white bg-black overflow-hidden">
                    <div className="container">
                        <Tabs defaultValue="Different Personas for Various Roles" className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-center relative z-10">
                            <Image src={bg} alt="Click First SMM" placeholder="blur" className="absolute right-0 top-0 object-contain -z-10" />
                            <TabsList className="grid grid-cols-1 bg-primary px-3 sm:px-5 py-5 sm:py-10">
                                {
                                    data && data.map(({ title }, i) => (
                                        <TabsTrigger key={i} className="text-left px-2 py-4 text-[14px] sm:text-[18px] xl:text-[22px] font-semibold leading-snug data-[state=active]:bg-[#0000A6] data-[state=active]:border data-[state=active]:border-white" value={title}>
                                            {title}
                                        </TabsTrigger>
                                    ))
                                }
                            </TabsList>
                            {
                                data && data.map(({ title, para }, i) => (
                                    <TabsContent key={i} value={title} className="mt-10 lg:mt-0 pb-10 lg:pb-0">
                                        <h3 className="text-[25px] lg:text-[20px] xl:text-[25px] font-semibold leading-snug mb-5">
                                            {title}
                                        </h3>
                                        <p className="text-[14px] xl:text-[15px] leading-relaxed sm:leading-normal mb-5">
                                            {para}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-5">
                                            <CTA css="!bg-primary hover:!bg-white hover:!text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                            <CTA css="hover:bg-secondary hover:border-secondary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
                                        </div>
                                    </TabsContent>
                                ))
                            }
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}