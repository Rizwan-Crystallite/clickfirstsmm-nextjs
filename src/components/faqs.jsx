// Components
import { CTA } from "@/components"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const data = [
    {
        item: "Why Choose Click First SMM?",
        content: "Click First SMM is the leading Social & Digital Media Marketing Agency in Houston, Texas, renowned for delivering transformative results. With a powerhouse team of 500+ in-house professionals, we ensure that every project is handled with expertise, precision, and the highest level of dedication. Our commitment to excellence has made us a trusted partner for businesses seeking unparalleled growth and success in the digital landscape."
    },
    {
        item: "Do We Offer Marketing Audit & Consultation Service?",
        content: "Yes, we offer a free marketing audit and consultation service. Our expert team provides a comprehensive analysis of your current marketing efforts, identifying areas of improvement and growth opportunities. This service is designed to give you a clear roadmap to success, tailored specifically to your business needs."
    },
    {
        item: "What Services Do We Offer?",
        content: "We offer a full suite of services, including Social Media Marketing, Digital Marketing, Branding, SEO, Paid Advertising, Content Creation, Influencer Marketing, Video Production, and more. Our comprehensive offerings are designed to cover every aspect of your digital presence, helping you achieve sustained growth and a strong market position."
    },
    {
        item: "How Much Do We Charge for a Branding Package?",
        content: "The cost of our branding packages varies depending on the scope and complexity of the project. We offer customized packages tailored to your business’s unique needs, ensuring you receive the best value for your investment. Please contact us for a detailed quote based on your specific requirements. Click here to see our complete packages."
    },
    {
        item: "Do We Outsource Our Projects?",
        content: "No, we do not outsource our projects. All work is completed by our highly skilled in-house team of 500+ professionals, ensuring consistent quality, security, and the ability to meet our clients' specific needs with full control over every aspect of the project."
    },
    {
        item: "What Industries Do We Work With?",
        content: "We work with a diverse range of industries—over 50 in total—providing branding, marketing, and business growth strategies tailored to each sector. Our experience spans from small startups to large enterprises, ensuring that no matter the industry, we can drive impactful results."
    },
    {
        item: "How Long Will It Take to See Business Growth?",
        content: "Business growth is a steady process that depends on several factors, including your industry, competition, and the budget tailored to your specific needs. While some results may be seen in the short term, true, sustainable growth typically takes time and consistent effort. We work with you to create a strategy that aligns with your goals and budget, ensuring gradual and reliable progress."
    },
    {
        item: "Do We Offer Search Engine Optimization Services?",
        content: "Yes, we offer expert SEO services designed to boost your online visibility, drive organic traffic, and improve your search engine rankings. Our SEO strategies are tailored to your business goals, ensuring that you attract the right audience and achieve long-term success in the digital space."
    }
]

export default function FAQs() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5 gap-y-10">
                        <div className="xl:col-span-4 max-w-[400px]">
                            <h2 className="text-[35px] lg:text-[40px] xl:text-[36px] 2xl:text-[40px] leading-snug font-semibold text-black mb-3">
                                Answers To Frequently Asked Questions
                            </h2>
                            <p className="text-[14px] sm:text-[16px] leading-relaxed text-text mb-7">
                                In addition to the creative direction, we design Templates to be quickly deployed and adopted by all. We add many features to make the experience and transition easy.
                            </p>
                            <CTA css="hover:bg-secondary" theme="primary" text="Let's Discuss" size="large" />
                        </div>
                        <div className="xl:col-span-8">
                            <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                                {
                                    data && data.map(({ item, content }, i) => (
                                        <AccordionItem value={`item-${i}`} key={i}>
                                            <AccordionTrigger>{item}</AccordionTrigger>
                                            <AccordionContent>{content}</AccordionContent>
                                        </AccordionItem>
                                    ))
                                }
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}