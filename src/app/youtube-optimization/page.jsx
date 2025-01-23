// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages, Platfarm, Testimonials, WhyChoose2 } from "@/components"
import { Hero, Form, Services, Content1, Optimize, Content2 } from "@/components/youtube-optimization"

export default function Page() {
    return (
        <>
            <Hero />
            <Awards />
            <Form />
            <Services />
            <Content1 />
            <Optimize />
            <Content2 />
            <Packages wrapperCss="pt-[100px] pb-[150px]" />
            <Testimonials />
            <WhyChoose2 />
            <Platfarm wrapperCSS="py-[100px] bg-accent" />
            <Creations />
            <Industries />
            <CustomizeBanner />
            <FAQs />
            <ChatBanner />
        </>
    )
}