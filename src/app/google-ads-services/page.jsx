// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages, Platfarm, Testimonials } from "@/components"
import { Form, Hero, Services, Content1, Content2, Content3, Benefits, VS } from "@/components/google-ads"

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
            <Benefits />
            <VS />
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