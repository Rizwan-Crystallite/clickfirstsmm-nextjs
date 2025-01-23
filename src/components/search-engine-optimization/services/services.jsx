// Components
import Card from "./card"

export default function Services() {
    return (
        <section>
            <div className="bg-black py-[100px] text-white">
                <div className="container">
                    <div className="text-center mb-[50px]">
                        <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] leading-snug font-semibold mb-6">
                            Our  <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">SEO </span> Services
                        </h2>
                        <p className="inline-block text-[14px] sm:text-[16px] leading-relaxed sm:leading-normal max-w-[500px] lg:max-w-full">
                            Increase Your Search Rankings and Get Discovered More Online With The Best SEO Agency Ever!
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
