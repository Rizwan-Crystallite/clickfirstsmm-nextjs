// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages, Testimonials, WhyChoose } from "@/components"
import { Association, Content1, Content2, Content3, Content4, Hero } from "@/components/social-media-management"

export default function Page() {
    return (
        <>
            <Hero />
            <Awards />
            <Content1 />
            <Association />
            <Content2 />
            <Content3 />
            <Content4 />
            <Packages wrapperCss="pt-[100px] pb-[150px]" />
            <Testimonials />
            <WhyChoose />
            <Creations />
            <Industries />
            <CustomizeBanner />
            <FAQs />
            <ChatBanner />
        </>
    )
}