// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages, Platfarm, Testimonials } from "@/components"
import { Hero, Form, Services, Content1, Content2, Content3, Clients } from "@/components/social-media-marketing"

export default function Page() {
    return (
        <>
            <Hero />
            <Awards />
            <Form />
            <Services />
            <Content1 />
            <Content2 />
            <Content3 />
            <Testimonials />
            <Clients />
            <Packages wrapperCss="pt-[100px] pb-[150px] bg-accent" />
            <Platfarm wrapperCSS="pt-[100px] pb-[50px]" />
            <Creations />
            <Industries />
            <CustomizeBanner />
            <FAQs />
            <ChatBanner />
        </>
    )
}