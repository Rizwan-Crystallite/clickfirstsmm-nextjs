// Components
import Card from "./card"

export default function Services() {
    return (
        <section>
            <div className="bg-black py-[100px] text-white">
                <div className="container">
                    <h2 className="max-w-[450px] sm:max-w-[600px] lg:max-w-[695px] mx-auto text-[30px] sm:text-[40px] lg:text-[50px] leading-snug font-semibold text-center mb-[80px]">
                        Drive <span className="text-primary">Growth</span> with Our Tailored Business <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">Solutions</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}
