// Media
import bg from "media/chat-banner-emojis.webp"
// Next
import Image from "next/image"

export default function ChatBanner() {
    return (
        <section>
            <div className="bg-primary relative z-10 py-[100px] xl:py-[150px]">
                <Image src={bg} alt="Click First SMM" fill={true} className="object-cover object-center -z-10 opacity-50" />
                <div className="container">
                    <div className="lg:text-center text-white">
                        <h2 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] leading-snug font-semibold mb-3 max-w-[600px] lg:max-w-[700px] xl:max-w-full lg:mx-auto">
                            Are You Ready To <span className="text-secondary">Transform</span> Your <span className="text-secondary">Business?</span>
                        </h2>
                        <p className="text-[14px] sm:text-[16px] leading-relaxed xs:text-justify xl:max-w-[1040px] mx-auto mb-7">
                            At Click First SMM , we are a team of dedicated professionals who are deeply passionate about the digital landscape. Our expertise in creativity and technology allows us to turn innovative ideas into effective, revenue-generating solutions for your business. We focus on unlocking your brand’s full potential, driving measurable growth, and enhancing your digital presence.
                            Start your journey to success with us!
                        </p>
                        <div dangerouslySetInnerHTML={{
                            __html: `<a href="javascript:;" class="border-2 w-[300px] sm:w-[400px] inline-flex items-center justify-center h-[150px] text-[40px] leading-tight relative z-10 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0 before:h-full before:bg-white hover:before:w-[10%] before:transition-all before:duration-300 after:content-[url('/hover-chat-icon.webp')] after:absolute after:right-[25px] after:top-0 hover:after:-top-[25px] after:transition-all after:duration-300 after:opacity-0 hover:after:opacity-100">
                            Chat Now
                        </a>`}} />
                    </div>
                </div>
            </div>
        </section>
    )
}
