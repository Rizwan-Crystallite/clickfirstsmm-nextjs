// Components
import Card from "./card"

export default function Services() {
    return (
        <section>
            <div className="bg-black py-[100px] text-white">
                <div className="container">
                    <h2 className="text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] leading-snug font-semibold text-center mb-[80px]">
                        Our Social Media <span className="inline-block text-primary relative before:absolute before:block before:w-full before:h-[19px] before:bg-[url(/path-1.webp)] before:left-0 before:right-0 before:bg-contain before:bg-no-repeat before:bg-center before:top-full">Marketing</span> Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}
