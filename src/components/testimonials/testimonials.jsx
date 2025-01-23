// Components
import Slider from "./slider"

export default function Testimonials() {
    return (
        <section>
            <div className="bg-black py-[100px] text-white overflow-hidden">
                <div className="container">
                    <div className="mb-[50px]">
                        <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] leading-tight font-semibold mb-6">
                            We <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">Love</span> Our Clients
                        </h2>
                        <p className="inline-block text-[20px] lg:text-[25px] leading-relaxed sm:leading-normal">
                            And clients love to work with us
                        </p>
                    </div>
                    <Slider />
                </div>
            </div>
        </section>
    )
}
