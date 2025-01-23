// Components
import { Awards, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages } from "@/components"
import { Hero, Content1, Content2 } from "@/components/about-us"

export default function Page() {
    return (
        <>
            <Hero />
            <Awards />
            <Content1 />
            <Content2 />
            <Creations wrapperCss="pt-[50px] pb-[100px]" />
            <Industries />
            <Packages wrapperCss="pt-[100px] pb-[150px]" />
            <CustomizeBanner />
            <FAQs />
            <ChatBanner />
        </>
    )
}