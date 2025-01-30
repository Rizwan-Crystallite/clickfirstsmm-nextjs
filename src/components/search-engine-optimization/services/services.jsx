// Components
import Card from "./card"

export default function Services() {
    return (
        <section>
            <div className="bg-black py-[100px] text-white">
                <div className="container">
                    <div className="text-center mb-[50px]">
                        <h2 className="text-[28px] lg:text-[40px] xl:text-[50px] leading-relaxed font-semibold mb-8 max-w-[500px] mx-auto lg:max-w-full">
                            SEO That <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">Delivers More</span> Than Just Rankings
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal max-w-[900px]">
                            SEO isn’t just about showing up on listings; it’s about getting found by the right people and turning them into customers. If your website isn’t bringing in leads, your SEO strategy isn’t working. We change that.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}
