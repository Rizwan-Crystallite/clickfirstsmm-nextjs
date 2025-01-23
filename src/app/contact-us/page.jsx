// Components
import { ChatBanner, FAQs, Testimonials } from "@/components"
import { Hero, Form } from "@/components/contact-us"

export default function Page() {
    return (
        <>
            <Hero />
            <Form />
            <Testimonials />
            <FAQs />
            <ChatBanner />
        </>
    )
}