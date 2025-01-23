// Components
import Card from "./card"

export default function Services() {
    return (
        <section>
            <div className="py-[100px] bg-black text-white">
                <div className="container">
                    <div className="max-w-[450px] sm:max-w-[700px] lg:max-w-[1010px] mx-auto text-center mb-[50px]">
                        <h2 className="text-[25px] sm:text-[30px] md:text-[38px] lg:text-[45px] xl:text-[50px] leading-relaxed font-semibold mb-8">
                            Our <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">YouTube Optimization</span> Services
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal">
                            Unlock your channel's potential with our comprehensive YouTube optimization services. From keyword research and video SEO to analytics and audience retention, we ensure your content reaches and engages a wider audience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}