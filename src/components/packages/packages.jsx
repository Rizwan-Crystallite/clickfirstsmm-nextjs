// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CTA } from "@/components"
// JSON
import data from "./data.json"
// Media
import check from "media/packages-check.png"
// Next
import Image from "next/image"

export default function Packages({ wrapperCss = "py-[100px]" }) {
    return (
        <section>
            <div className={`${wrapperCss}`}>
                <div className="container">
                    <h2 className="max-w-[1084px] mx-auto text-[25px] sm:text-[35px] md:text-[34px] lg:text-[45px] xl:text-[50px] leading-snug font-semibold text-center mb-[50px] text-black">
                        <span className="text-primary">Quality Over Discounts</span> <br /> Elevate Your Social Media Presence Today!
                    </h2>
                    <Tabs defaultValue="Annually">
                        <TabsList className="flex mb-[50px] gap-5 snap-x overflow-x-auto justify-start sm:justify-center pb-4 px-5">
                            {
                                data && data.map(({ type }, i) => (
                                    <TabsTrigger className="data-[state=active]:bg-[linear-gradient(180deg,_#f6ac0082,_#F6AC00)]  h-[50px] px-10 text-[16px] sm:text-[20px] inline-flex font-semibold text-black rounded-md transition-all duration-300 bg-[#F5F5F5] items-center snap-center shrink-0" key={i} value={type}>
                                        {type}
                                    </TabsTrigger>
                                ))
                            }
                        </TabsList>
                        {
                            data && data.map(({ type, packages }, i) => (
                                <TabsContent key={i} value={type}>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-5 2xl:gap-10 max-w-[450px] lg:max-w-full mx-auto pt-10 lg:pt-0">
                                        {
                                            packages && packages.map(({ name, note, price, when, list }, i) => (
                                                <div className="text-black bg-[#F5F5F5] [&:nth-child(2)]:bg-primary rounded-2xl [&:nth-child(2)]:text-white [&:nth-child(2)_p]:text-white [&:nth-child(2)_p]:border-white [&:nth-child(2)_ul]:text-white relative lg:top-10 [&:nth-child(2)]:top-0 [&:nth-child(2)_ul_li_img]:brightness-0 [&:nth-child(2)_ul_li_img]:invert [&:nth-child(2)_ul::-webkit-scrollbar-thumb]:bg-secondary [&:nth-child(2)_a]:bg-secondary [&:nth-child(2)_a]:hover:bg-black [&:nth-child(1)]:before:content-[url('/packages/forcard1.png')] [&:nth-child(1)]:before:absolute [&:nth-child(1)]:before:left-0 [&:nth-child(1)]:before:-top-[25px] [&:nth-child(1)]:before:animate-bounce-slow [&:nth-child(2)]:before:content-[url('/packages/forcard2.png')] [&:nth-child(2)]:before:absolute [&:nth-child(2)]:before:right-0 [&:nth-child(2)]:before:top-0 [&:nth-child(2)]:before:animate-bounce-slow [&:nth-child(3)]:before:content-[url('/packages/forcard3.png')] [&:nth-child(3)]:before:absolute [&:nth-child(3)]:before:right-0 [&:nth-child(3)]:before:-top-[25px] [&:nth-child(3)]:before:animate-bounce-slow" key={i}>
                                                    <div className="shadow-[0_0_30px_0_rgba(0,0,0,.2)] rounded-2xl py-[50px] px-[25px]">
                                                        <div className="text-center mb-[30px]">
                                                            <h4 className="text-[25px] xl:text-[30px] leading-tight font-semibold mb-3">
                                                                {name}
                                                            </h4>
                                                            <p className="text-[14px] sm:text-[16px] leading-relaxed text-text max-w-[250px] mx-auto mb-7 pb-5 border-b border-[#707070]">
                                                                {note}
                                                            </p>
                                                            <p className="text-[30px] xl:text-[40px] leading-tight font-semibold mb-3">
                                                                {price}
                                                            </p>
                                                            <p className="text-[16px] xl:text-[18px] leading-tight text-text">
                                                                {when}
                                                            </p>
                                                        </div>
                                                        <ul className="text-[14px] sm:text-[16px] xl:text-[16px] leading-relaxed text-text h-[430px] overflow-y-scroll py-5 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-accent  [&::-webkit-scrollbar-thumb]:bg-[#9A9A9A]">
                                                            {list && list.map(({ title, inlcude }, i) => (
                                                                <div key={i} className="grid grid-cols-1 gap-y-1 mb-4">
                                                                    <li>
                                                                        <strong>{title}</strong>
                                                                    </li>
                                                                    {inlcude && inlcude.length > 0 && inlcude.map((e, i) => (
                                                                        <li key={i} className="flex gap-2 items-start">
                                                                            <Image src={check} alt="Click First SMM" className="relative top-2" />
                                                                            <span className="inline-block w-[calc(100%-22px)]">{e}</span>
                                                                        </li>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </ul>
                                                        <div className="mt-[30px] text-center">
                                                            <CTA css="hover:bg-secondary !px-10" theme="primary" text="Enquire Now" size="large" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </TabsContent>
                            ))
                        }
                    </Tabs>
                </div>
            </div>
        </section>
    )
}