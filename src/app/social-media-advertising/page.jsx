// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages, Testimonials } from "@/components"
import { Content1, Content2, Content3, Hero, Services, WhyChooseTabs } from "@/components/social-media-advertising"

export default function Page() {
    return (
        <>
            <Hero />
            <Awards />
            <Content1 />
            <Services />
            <WhyChooseTabs />
            <Content2 />
            <Content3 />
            <Packages />
            <Testimonials />
            <Creations />
            <Industries />
            <CustomizeBanner />
            <FAQs />
            <ChatBanner />
        </>
    )
}