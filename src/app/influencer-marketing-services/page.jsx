// Pages
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages, Platfarm, Testimonials } from "@/components"
import { Influencers } from "@/components/home"
import { Hero, Form, Services, Benefits, Community, Content1, WhyUS, Content2 } from "@/components/influencer-marketing"

export default function page() {
    return (
        <>
            <Hero />
            <Awards />
            <Form />
            <Services />
            <Benefits />
            <Community />
            <Content1 />
            <WhyUS />
            <Influencers />
            <Content2 />
            <Packages wrapperCss="pt-[100px] pb-[150px]" />
            <Testimonials />
            <Platfarm wrapperCSS="pt-[100px] pb-[50px]" />
            <Creations />
            <Industries />
            <CustomizeBanner />
            <FAQs />
            <ChatBanner />
        </>
    )
}