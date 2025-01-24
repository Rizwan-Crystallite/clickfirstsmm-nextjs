// Components
import { AutoScrollSlider } from "@/components"
// Media
import IMG47 from "media/creations/img_t_2.webp"
import IMG48 from "media/creations/img_t_3.webp"
import IMG49 from "media/creations/img_t_4.webp"
import IMG50 from "media/creations/img_t_5.webp"
import IMG51 from "media/creations/img_t_6.webp"
import IMG52 from "media/creations/img_t_7.webp"
import IMG53 from "media/creations/img_t_8.webp"
import IMG54 from "media/creations/img_t_9.webp"
import IMG55 from "media/creations/img_t_10.webp"
import IMG58 from "media/creations/img_t_13.webp"
import IMG59 from "media/creations/img_t_14.webp"
import IMG60 from "media/creations/img_t__15.webp"
import IMG61 from "media/creations/img_t__16.webp"
import IMG62 from "media/creations/img_t_17.webp"
import IMG63 from "media/creations/img_t_18.webp"
import IMG64 from "media/creations/img_t_19.webp"
import IMG65 from "media/creations/img_t_20.webp"
import IMG66 from "media/creations/img_t_21.webp"
import IMG68 from "media/creations/img_t_23.webp"
import IMG69 from "media/creations/img_t_24.webp"
import IMG70 from "media/creations/img_t_25.webp"
import IMG71 from "media/creations/img_t_26.webp"
import IMG72 from "media/creations/img_t_27.webp"
import IMG73 from "media/creations/img_t_28.webp"
import IMG33 from "media/creations/img_1.webp"
import IMG34 from "media/creations/img_2.webp"
import IMG35 from "media/creations/img_3.webp"
import IMG36 from "media/creations/img4.webp"
import IMG37 from "media/creations/img_5.webp"
import IMG38 from "media/creations/img_6.webp"
import IMG39 from "media/creations/img7.webp"
import IMG41 from "media/creations/img_9.webp"
import IMG42 from "media/creations/img_10.webp"
import IMG43 from "media/creations/img_11.webp"
import IMG44 from "media/creations/img_12.webp"
import IMG45 from "media/creations/img_13.webp"
import IMG21 from "media/creations/img___02.webp"
import IMG25 from "media/creations/img___06.webp"
import IMG26 from "media/creations/img___07.webp"
import IMG27 from "media/creations/img___08.webp"
import IMG28 from "media/creations/img___09.webp"
import IMG29 from "media/creations/img___10.webp"
import IMG30 from "media/creations/img___11.webp"
import IMG32 from "media/creations/img___12.webp"
import IMG09 from "media/creations/img__01.webp"
import IMG10 from "media/creations/img__02.webp"
import IMG11 from "media/creations/img__03.webp"
import IMG12 from "media/creations/img__04.webp"
import IMG13 from "media/creations/img__05.webp"
import IMG14 from "media/creations/img__06.webp"
import IMG16 from "media/creations/img__08.webp"
import IMG17 from "media/creations/img__09.webp"
import IMG18 from "media/creations/img__10.webp"
import IMG01 from "media/creations/img_01.webp"
import IMG02 from "media/creations/img_02.webp"
import IMG03 from "media/creations/img_03.webp"
import IMG08 from "media/creations/img_08.webp"
// Next
import Image from "next/image"

const slides1 = [
    IMG12,
    IMG16,
    IMG66,
    IMG21,
    IMG42,
    IMG71,
    IMG73,
    IMG47,
    IMG51,
    IMG52,
    IMG58,
    IMG29,
    IMG33,
    IMG35,
    IMG01,
    IMG08,
    IMG09,
    IMG38,
    IMG63,
];
const slides2 = [
    IMG02,
    IMG10,
    IMG13,
    IMG17,
    IMG25,
    IMG27,
    IMG28,
    IMG32,
    IMG34,
    IMG37,
    IMG41,
    IMG45,
    IMG43,
    IMG48,
    IMG53,
    IMG59,
    IMG62,
    IMG65,
    IMG70,
];

const slides3 = [
    IMG03,
    IMG11,
    IMG14,
    IMG18,
    IMG26,
    IMG36,
    IMG30,
    IMG39,
    IMG44,
    IMG49,
    IMG50,
    IMG54,
    IMG55,
    IMG61,
    IMG60,
    IMG64,
    IMG68,
    IMG69,
    IMG72,
];

export default function Creations({ wrapperCss = "py-[100px]" }) {
    return (
        <section>
            <div className={`${wrapperCss}`}>
                <div className="container">
                    <h2 className="max-w-[733px] mx-auto text-[25px] sm:text-[35px] md:text-[40px] lg:text-[50px] leading-snug font-semibold text-center mb-[50px] text-black">
                        Your Thoughts, <span className="text-primary">Our Creation.</span>
                    </h2>
                </div>
                <AutoScrollSlider>
                    {
                        slides1.map((e, i) => (
                            <div key={i} className="grow-0 shrink-0 pl-4 basis-[300px]">
                                <Image src={e} alt="Click First SMM" />
                            </div>
                        ))
                    }
                </AutoScrollSlider>
                <AutoScrollSlider direction="backward" wrapperCss="my-10">
                    {
                        slides2.map((e, i) => (
                            <div key={i} className="grow-0 shrink-0 pl-4 basis-[300px]">
                                <Image src={e} alt="Click First SMM" />
                            </div>
                        ))
                    }
                </AutoScrollSlider>
                <AutoScrollSlider>
                    {
                        slides3.map((e, i) => (
                            <div key={i} className="grow-0 shrink-0 pl-4 basis-[300px]">
                                <Image src={e} alt="Click First SMM" />
                            </div>
                        ))
                    }
                </AutoScrollSlider>
            </div>
        </section>
    )
}