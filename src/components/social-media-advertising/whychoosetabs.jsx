// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CTA } from "@/components"
// Next
import Image from "next/image"
// Media
import bg from "media/social-media-advertising/whychoosetabs/bg.png"

const data = [
    {
        title: "The Deep Dive - Understanding Your Brand’s DNA",
        desc: "<h3>Brand Strategists & Consumer Psychologists</h3><p>Before running ads, we get inside your customers' minds. What makes them click? What stops them from buying? We decode their pain points and desires, then align them with your brand’s strengths.</p><h3>What We Do:</h3><ul><li>✅ Audience behavior analysis beyond basic demographics</li><li>✅ Competitor gap assessment—spotting opportunities they missed</li><li>✅ Finding your brand’s unique voice & market positioning</li></ul><h3>Why It Matters:</h3><p>Ads without audience insights are just noise. We make sure yours hit home.</p>"
    },
    {
        title: "The Hook - Crafting Magnetic Messaging That Stops the Scroll",
        desc: "<h3>Creative Directors & Conversion Copywriters</h3><p>People don’t buy products—they buy emotions. Our messaging strategy taps into psychology, storytelling, and urgency to create ads that make people pause, engage, and take action.</p><h3>What We Do:</h3><ul><li>✅ High-impact headlines that spark curiosity</li><li>✅ Value-driven ad angles—pain relievers, gain amplifiers, FOMO triggers</li><li>✅ Emotional and authority-driven storytelling for maximum resonance</li></ul><h3>Why It Matters:</h3><p>The right words can turn skeptics into loyal customers. We craft messages that stick.</p>"
    },
    {
        title: "The Experience - Designing Content That Connects & Converts",
        desc: "<h3>Visual Storytellers, Video Editors & UX Designers</h3><p>Static images and generic stock videos? Not here. We create high-converting, scroll-stopping content that feels native to every platform and resonates organically with your audience.</p><h3>What We Do:</h3><ul><li>✅ Thumb-stopping ad creatives optimized for Facebook, TikTok, Instagram & YouTube</li><li>✅ Native-style video ads & dynamic motion graphics that don’t feel “salesy”</li><li>✅ A/B tested creative variations for maximum engagement & conversions</li></ul><h3>Why It Matters:</h3><p>If your ad doesn’t catch attention in 3 seconds, you’ve already lost. We make sure yours do.</p>"
    },
    {
        title: "The Amplification - Launching Hyper-Targeted Ad Campaigns",
        desc: "<h3>Media Buyers & Paid Ad Specialists</h3><p>Forget basic ad targeting—we use data, AI-driven insights, and real-time trend analysis to pinpoint the perfect audience segments at the perfect time.</p><h3>What We Do:</h3><ul><li>✅ Advanced audience segmentation: warm vs. cold, intent-based retargeting</li><li>✅ Interest stacking, lookalike expansion, & behavioral targeting</li><li>✅ Smart budget allocation for the highest ROI</li></ul><h3>Why It Matters:</h3><p>We don’t just put ads in front of people—we put them in front of the right people who are ready to buy.</p>"
    },
    {
        title: "The Science - Optimizing, Scaling & Winning",
        desc: "<h3>Data Scientists & AI-Powered Analytics Experts</h3><p>We’re obsessed with metrics that matter—not vanity numbers. Our team continuously tracks, analyzes, and optimizes your campaigns to double down on what’s working and cut what’s not.</p><h3>What We Do:</h3><ul><li>✅ Real-time performance tracking, heatmaps, and engagement analysis</li><li>✅ Smart split-testing for ad creatives, CTAs, and landing pages</li><li>✅ Scaling winning campaigns to explode your ROI</li></ul><h3>Why It Matters:</h3><p>Data-backed decisions = more revenue, fewer wasted ad dollars.</p>"
    },
    {
        title: "The Domination - Turning Ads into an Evergreen Growth Engine",
        desc: "<h3>Growth Hackers & Retention Specialists</h3><p>We don’t just run campaigns; we turn your ads into a long-term customer acquisition machine. From retargeting funnels to brand-building strategies, we help you create demand, not just capture it.</p><h3>What We Do:</h3><ul><li>✅ Customer journey mapping—optimizing for repeat purchases & upsells</li><li>✅ Building brand trust through influencer partnerships & organic virality</li><li>✅ Omnichannel retargeting that turns past visitors into buyers</li></ul><h3>Why It Matters:</h3><p>Marketing isn’t about one-time sales—it’s about sustainable, scalable growth.</p>"
    }
]

export default function WhyChooseTabs() {
    return (
        <section>
            <div className="pt-[50px]">
                <div className="container">
                    <div className="text-center mb-[50px] max-w-[1080px] mx-auto">
                        <h2 className="text-[25px] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-semibold leading-snug mb-5">
                            Why <span className="text-primary">Partner</span> with Us for Social Media Advertising? We Create Meaningful <span className="text-primary">Brand Connections</span> That Drive Action
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text">
                            At ClickFirstSMM, we don’t just run ads, we engineer high-impact brand experiences that turn passive scrollers into engaged customers. Using data-driven targeting, compelling storytelling, and conversion-focused strategies, we craft campaigns that don’t just reach people, they move them to take action. Our 6-step success framework is designed to spark buying intent, maximize ROI, and position your brand as the next big industry leader.
                        </p>
                    </div>
                </div>
                <div className="text-white bg-black overflow-hidden">
                    <div className="container">
                        <Tabs defaultValue="The Deep Dive - Understanding Your Brand’s DNA" className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 items-center relative z-10">
                            <Image src={bg} alt="Click First SMM" placeholder="blur" className="absolute right-0 top-0 object-contain -z-10" />
                            <TabsList className="grid grid-cols-1 bg-primary px-3 sm:px-5 py-5 sm:py-10 h-full lg:col-span-5 2xl:col-span-4">
                                {
                                    data && data.map(({ title }, i) => (
                                        <TabsTrigger key={i} className="text-left px-2 py-4 sm:text-[18px] lg:text-[16px] xl:text-[16px] 2xl:text-[18px] font-semibold leading-relaxed data-[state=active]:bg-[#0000A6]  data-[state=active]:border data-[state=active]:border-white" value={title}>
                                            {title}
                                        </TabsTrigger>
                                    ))
                                }
                            </TabsList>
                            {
                                data && data.map(({ title, desc }, i) => (
                                    <TabsContent key={i} value={title} className="py-10 lg:col-span-7 2xl:col-span-8">
                                        <div className="[&_h3]:text-[20px] [&_h3]:lg:text-[18px] [&_h3]:mb-3 [&_h3]:xl:text-[25px] [&_h3]:font-semibold [&_h3]:leading-snug  [&_p]:text-[14px] [&_p]:sm:text-[16px] [&_p]:leading-relaxed [&_p]:sm:leading-normal [&_p:nth-child(2)]:mb-5 [&_ul]:mb-5 [&_ul]:grid [&_ul]:grid-cols-1 [&_ul]:gap-y-2" dangerouslySetInnerHTML={{ __html: desc }} />
                                        <div className="flex flex-col sm:flex-row gap-5 mt-5">
                                            <CTA css="hover:!bg-white hover:!text-black" theme="secondary" size="large" text="Talk To An Expert" />
                                            <CTA css="hover:bg-primary hover:border-primary" theme="transparent" size="large" text="Call Now: 346-299-2202" />
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