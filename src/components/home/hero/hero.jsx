// Components
import Video from "./video"

export default function Hero() {
    return (
        <section>
            <div className="relative pb-[60px] sm:pb-[100px] pt-[150px] lg:pb-0 lg:pt-0 bg-primary lg:h-[650px] xl:h-screen overflow-hidden z-[1]">
                <Video />
                <div className="lg:absolute lg:left-0 lg:right-0 lg:bottom-0 text-white lg:text-center z-[2]">
                    <div className="container">
                        <h1 className="text-[25px] sm:text-[35px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-tight font-semibold">
                            No#1 SMM Company in US
                        </h1>
                        <div className="px-4 py-2 text-[20px] sm:text-[30px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] leading-tight bg-secondary w-max inline-block rounded-tr-[30px] my-5 xl:my-7">
                            Digital Marketing Agency
                        </div>
                        <p className="text-[16px] sm:text-[25px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] leading-tight lg:mb-10">
                            Equipping Businesses for the Digital Era
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}