// Components
import Card from "./card"

export default function Opportunity() {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <h2 className="max-w-[450px] sm:max-w-[700px] lg:max-w-[1010px] mx-auto text-[25px] sm:text-[35px] md:text-[40px] lg:text-[50px] leading-snug font-semibold text-center mb-[50px] text-black">
                        What <span className="text-primary">Marketing Opportunities</span> We Bring To Your Easy Disposal?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}