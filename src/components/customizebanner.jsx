// Media
import left from "media/customize-banner/left.webp"
import right from "media/customize-banner/right.webp"
import Image from "next/image"

export default function CustomizeBanner() {
    return (
        <section>
            <div className="sm:pt-[50px]">
                <div className="container">
                    <div className="rounded-2xl bg-primary py-[100px] relative z-10 sm:w-[calc(100%-60px)] ml-auto">
                        <Image src={left} alt="Click First SMM" className="absolute left-0 sm:-left-[60px] -bottom-[10px] -z-10 opacity-25 lg:opacity-100" />
                        <div className="max-w-[550px] xl:max-w-[735px] mx-auto text-white relative lg:left-[100px] text-center lg:text-left">
                            <h2 className="text-[25px] max-w-[300px] sm:max-w-full mx-auto sm:text-[30px] xl:text-[40px] font-semibold leading-snug mb-5">
                                Want a <span className="text-secondary">Customized Package</span> Tailored Just for You?
                            </h2>
                            <div className="flex flex-col md:flex-row gap-5 justify-center lg:justify-start">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href="javascript:;" class="text-[14px] xl:text-[16px] inline-block font-semibold px-[10] xl:px-[20px] py-[30px] lg:py-[40px] bg-black border-2 border-black w-[330px] md:w-max">
                                Booked an Appointment With Our Expert
                            </a>`}} />
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href="javascript:;" class="text-[14px] xl:text-[16px] inline-block font-semibold px-[10] xl:px-[20px] py-[30px] lg:py-[40px] bg-transparent border-2 border-white hover:bg-secondary hover:border-secondary transition-all duration-300 hover:py-[10px] w-[330px] md:w-max">
                                Get a Free Consultation
                            </a>`}} />
                            </div>
                        </div>
                        <Image src={right} alt="Click First SMM" className="absolute top-0 sm:top-[inherit] sm:bottom-0 right-0 -z-10 sm:hidden lg:block opacity-25 sm:opacity-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}
