// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages, Platfarm, Testimonials } from "@/components"
import { Hero, Form, Services, Content1, Content2, WhyWork, Content3 } from "@/components/email-marketing"

export default function Page() {
    return (
        <>
            <Hero />
            <Awards />
            <Form />
            <Services />
            <Content1 />
            <Content2 />
            <WhyWork />
            <Content3 />
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