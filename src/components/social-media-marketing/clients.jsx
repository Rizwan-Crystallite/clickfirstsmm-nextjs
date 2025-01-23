// Media
import c1 from "media/social-media-marketing/clients/1.png"
import c2 from "media/social-media-marketing/clients/2.png"
import c3 from "media/social-media-marketing/clients/3.png"
import c4 from "media/social-media-marketing/clients/4.png"
import c5 from "media/social-media-marketing/clients/5.png"
import c6 from "media/social-media-marketing/clients/6.png"
import c7 from "media/social-media-marketing/clients/7.png"
import c8 from "media/social-media-marketing/clients/8.png"
import c9 from "media/social-media-marketing/clients/9.png"
import c10 from "media/social-media-marketing/clients/10.png"
import c11 from "media/social-media-marketing/clients/11.png"
import c12 from "media/social-media-marketing/clients/12.png"
import c13 from "media/social-media-marketing/clients/13.png"
import c14 from "media/social-media-marketing/clients/14.png"
import c15 from "media/social-media-marketing/clients/15.png"
import c16 from "media/social-media-marketing/clients/16.png"
import c17 from "media/social-media-marketing/clients/17.png"
import c18 from "media/social-media-marketing/clients/18.png"
import c19 from "media/social-media-marketing/clients/19.png"
import c20 from "media/social-media-marketing/clients/20.png"
import c21 from "media/social-media-marketing/clients/21.png"
import c22 from "media/social-media-marketing/clients/22.png"
import c23 from "media/social-media-marketing/clients/23.png"
import c24 from "media/social-media-marketing/clients/24.png"
import c25 from "media/social-media-marketing/clients/25.png"
import c26 from "media/social-media-marketing/clients/26.png"
import c27 from "media/social-media-marketing/clients/27.png"
import c28 from "media/social-media-marketing/clients/28.png"
// Next
import Image from "next/image"

export default function Clients() {
    return (
        <section>
            <div className="py-[100px] relative z-10 overflow-hidden">
                <div className="container">
                    <div className="text-center mx-auto max-w-[550px] lg:max-w-[700px] xl:max-w-[800px] mb-[50px]">
                        <h2 className="text-[25px] sm:text-[35px] md:text-[30px] lg:text-[40px] xl:text-[45px] font-semibold leading-tight">
                            Click First <span className="text-primary">Businesses and Clients</span> We Manage Their Social Media
                        </h2>
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-7 items-center justify-center">
                        {
                            [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28].map((e, i) => (
                                <div key={i} className="border h-full inline-flex items-center justify-center p-5 hover:bg-primary transition-all duration-300 group">
                                    <Image src={e} alt="Click First SMM" className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
