// Components
import { Awards, ChatBanner, CustomizeBanner, FAQs, Industries, Packages, Testimonials, WhyChoose } from "@/components"
import { Content1, DeliverPlatforms, Hero, MarketingPackage, Problems, Process, Services } from "@/components/search-engine-optimization"

export default function Page() {
    return (
        <>
            <Hero />
            <Awards />
            <Problems />
            <Services />
            <Content1 />
            <Packages wrapperCss="pt-[100px] pb-[150px] bg-accent" />
            <MarketingPackage />
            <Testimonials />
            <Industries />
            <DeliverPlatforms />
            <Process />
            <WhyChoose wrapperCss="pt-[100px] pb-[50px]" />
            <CustomizeBanner />
            <FAQs />
            <ChatBanner />
        </>
    )
}