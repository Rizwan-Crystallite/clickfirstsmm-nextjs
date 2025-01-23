// Components
import { Hero, Services, Opportunity, Content1, Content2, Influencers, Content3 } from "@/components/home"
import { Awards, CaseStudy, ChatBanner, Creations, CustomizeBanner, FAQs, Industries, Packages, Platfarm, Testimonials } from "@/components"

export default function Page() {
  return (
    <>
      <Hero />
      <Awards />
      <Services />
      <Opportunity />
      <CaseStudy />
      <Content1 />
      <Content2 />
      <Influencers />
      <Content3 />
      <Platfarm />
      <Testimonials />
      <Creations />
      <Industries />
      <Packages />
      <CustomizeBanner />
      <FAQs />
      <ChatBanner />
    </>
  )
}