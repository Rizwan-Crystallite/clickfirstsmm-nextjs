// Next
import Image from "next/image"
// Media
import one from "media/contant-us/1.png"
import two from "media/contant-us/2.png"
import three from "media/contant-us/3.png"
import four from "media/contant-us/4.png"
// Components
import { FrontEndForm } from "@/components"

export default function Form() {
    return (
        <section>
            <div className="py-[100px] relative z-10 overflow-hidden">
                <Image src={one} alt="Click First SMM" className="absolute top-10 -left-5 animate-awards opacity-25 md:opacity-100 -z-10" />
                <Image src={four} alt="Click First SMM" className="absolute top-10 -right-5 animate-awards opacity-25 md:opacity-100 -z-10" />
                <Image src={two} alt="Click First SMM" className="absolute bottom-10 -left-5 animate-awards opacity-25 md:opacity-100 -z-10" />
                <Image src={three} alt="Click First SMM" className="absolute bottom-10 -right-5 animate-awards opacity-25 md:opacity-100 -z-10" />
                <div className="container">
                    <div className="text-center mx-auto max-w-[1050px]">
                        <h2 className="text-[28px] sm:text-[35px] md:text-[35px] lg:text-[45px] font-semibold leading-tight mb-5">
                            Your Growth <span className="text-primary">Partner</span>, Not Another <span className="text-primary">Agency</span>.
                        </h2>
                        <p className="max-w-[480px] sm:max-w-[700px] lg:max-w-[938px] inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal text-text mb-[50px]">
                            At Click First, we’re committed to being more than just another agency. We aim to be your dedicated growth partner, offering tailored strategies that drive real results. Our focus is on understanding your unique needs and helping you achieve sustainable success. Choose us for a personalized
                            approach that truly supports your growth.
                        </p>
                        <FrontEndForm label={false} button="Click To Become The Next Big Brand!" />
                    </div>
                </div>
            </div>
        </section>
    )
}
