// Media
import IMG01 from "media/industries/Cleaning-Services.webp"
import IMG02 from "media/industries/Packaged-Consumer-Goods.webp"
import IMG03 from "media/industries/Makeup-Artists.webp"
import IMG04 from "media/industries/Real-Estate.webp"
import IMG05 from "media/industries/Finance.webp"
import IMG06 from "media/industries/Music.webp"
import IMG07 from "media/industries/Restaurant.webp"
import IMG08 from "media/industries/Furniture-Interior-Designing.webp"
import IMG09 from "media/industries/Fashion.webp"
import IMG10 from "media/industries/Health-Wellness.webp"
import IMG11 from "media/industries/Dry-Cleaning.webp"
import IMG12 from "media/industries/Cosmetics.webp"
import IMG13 from "media/industries/Security-Services.webp"
import IMG14 from "media/industries/Supplements.webp"
import IMG15 from "media/industries/Ecommerce.webp"
import IMG16 from "media/industries/Fitness-Modeling.webp"
import IMG17 from "media/industries/Spa-Salon.webp"
import IMG18 from "media/industries/Handyman.webp"
import IMG19 from "media/industries/Sports.webp"
import IMG20 from "media/industries/Automotive.webp"
import IMG21 from "media/industries/Jewelry-Accessories.webp"
import IMG22 from "media/industries/Content-Creators.webp"
import IMG23 from "media/industries/Event-Ticket-Sales.webp"
import IMG24 from "media/industries/B2B-Businesses.webp"
import IMG25 from "media/industries/Construction.webp"
import IMG26 from "media/industries/Learning-Education.webp"
import IMG27 from "media/industries/Insurance.webp"
import IMG28 from "media/industries/Engineering-Firms.webp"
import IMG29 from "media/industries/Animal-Pets.webp"
import IMG30 from "media/industries/Hotel-Resorts.webp"
import IMG31 from "media/industries/Non-Profits-Causes.webp"
import IMG32 from "media/industries/Transportation-Logistics.webp"
import IMG33 from "media/industries/Legal.webp"
import IMG34 from "media/industries/Travel-Tours.webp"
import IMG35 from "media/industries/Film-Photography.webp"
// Components
import { AutoPlaySlider, CTA } from "@/components"
import Image from "next/image"

const data = [
    {
        title: "Cleaning Service",
        txt: "Struggling to stand out in a crowded market? Let our social media magic make your spotless services a trending topic!",
        img: IMG01,
        links: "javascript:;"
    },
    {
        title: "Packaged Consumer Goods",
        txt: "Finding it hard to connect with your  audience? Boost your brand presence and engage customers with our  compelling social media strategies!",
        img: IMG02,
        links: "javascript:;"
    }, {
        title: "Makeup Artists",
        txt: "Want to transform your artistry into a viral sensation? Our social media expertise will help your talent shine online!",
        img: IMG03,
        links: "javascript:;"
    },
    {
        title: "Real Estate",
        txt: "Having trouble getting your listings noticed? Make every property a must-see with our targeted social media campaigns!",
        img: IMG04,
        links: "javascript:;"
    },
    {
        title: "Finance",
        txt: "Is your financial expertise getting lost in the noise? Simplify complex concepts and build trust with engaging social media content!",
        img: IMG05,
        links: "javascript:;"
    }, {
        title: "Music",
        txt: "Struggling to reach a wider audience? Amplify your sound and connect with millions through our dynamic social media strategies!",
        img: IMG06,
        links: "javascript:;"
    }, {
        title: "Restaurant",
        txt: "Need to fill more seats and make mouths water? Our irresistible social media content will turn your dishes into viral hits!",
        img: IMG07,
        links: "javascript:;"
    }, {
        title: "Furniture/Interior Designing",
        txt: "Finding it hard to showcase your designs? Create stunning visual feeds that attract clients with our social media flair!",
        img: IMG08,
        links: "javascript:;"
    }
    , {
        title: "Fashion",
        txt: "Is your brand struggling to stay ahead of the trends? Turn heads and set trends with our stylish social media campaigns!",
        img: IMG09,
        links: "javascript:;"
    }
    , {
        title: "Health and Wellness",
        txt: "Having trouble promoting healthy living? Build a loyal following and inspire wellness with our targeted social media solutions!",
        img: IMG10,
        links: "javascript:;"
    }, {
        title: "Dry Cleaning",
        txt: "Are your services not getting the attention they deserve? Transform your convenience into online buzz with our social media expertise!",
        img: IMG11,
        links: "javascript:;"
    }, {
        title: "Cosmetics",
        txt: "Want your beauty products to go viral? Our social media strategies will make your brand the talk of the town!",
        img: IMG12,
        links: "javascript:;"
    }
    , {
        title: "Security Services",
        txt: "Struggling to build trust in your services? Highlight safety and reliability with our powerful social media campaigns!",
        img: IMG13,
        links: "javascript:;"
    }, {
        title: "Supplements",
        txt: "Need to boost your brand and sales? Drive engagement and conversions with our effective social media strategies!",
        img: IMG14,
        links: "javascript:;"
    }, {
        title: "Ecommerce",
        txt: "Finding it hard to drive traffic and sales? Our cutting-edge social media strategies will turn browsers into buyers!",
        img: IMG15,
        links: "javascript:;"
    },
    {
        title: "Fitness & Modeling",
        txt: "Want to flex your brand and gain followers? Our social media workouts will grow your audience and influence!",
        img: IMG16,
        links: "javascript:;"
    }, {
        title: "Spa and Salon",
        txt: "Want more clients to indulge in your services? Turn treatments into trending topics with our social media prowess!",
        img: IMG17,
        links: "javascript:;"
    }, {
        title: "Handyman",
        txt: "Struggling to showcase your skills and get booked? Highlight your expertise and attract clients with our effective social media!",
        img: IMG18,
        links: "javascript:;"
    }
    , {
        title: "Sports",
        txt: "Finding it hard to engage with fans? Score big and build a loyal fanbase with our engaging social media content!",
        img: IMG19,
        links: "javascript:;"
    }
    , {
        title: "Automotive",
        txt: "Need to drive more sales and engagement? Accelerate your online presence with our high-octane social media strategies!",
        img: IMG20,
        links: "javascript:;"
    }
    , {
        title: "Jewelry & Accessories",
        txt: "Want your pieces to shine online? Our social media sparkle will make your brand dazzle and attract customers!",
        img: IMG21,
        links: "javascript:;"
    }
    , {
        title: "Content Creators",
        txt: "Struggling to grow your audience and influence? Elevate your content and reach more followers with our social media strategies!",
        img: IMG22,
        links: "javascript:;"
    }, {
        title: "Event/Ticket Sales",
        txt: "Need to turn events into sell-out experiences? Create buzz and drive ticket sales with our captivating social media campaigns!",
        img: IMG23,
        links: "javascript:;"
    }
    , {
        title: "B2B Businesses",
        txt: "Finding it hard to build professional relationships? Enhance your brand awareness and connect with clients through targeted social media!",
        img: IMG24,
        links: "javascript:;"
    }
    , {
        title: "Construction",
        txt: "Struggling to showcase your projects? Highlight your expertise and attract clients with our robust social media plans!",
        img: IMG25,
        links: "javascript:;"
    }
    , {
        title: "Learning & Education",
        txt: "Want to engage more students? Educate and inspire with innovative social media strategies that connect!",
        img: IMG26,
        links: "javascript:;"
    }
    , {
        title: "Insurance",
        txt: "Need to build trust and educate clients? Simplify complex concepts and connect with customers through our informative social media content!",
        img: IMG27,
        links: "javascript:;"
    }
    , {
        title: "Engineering Firms",
        txt: "Finding it hard to highlight your expertise? Showcase your projects and attract clients with precise social media campaigns!",
        img: IMG28,
        links: "javascript:;"
    }
    , {
        title: "Animal & Pets",
        txt: "Want to create a paw-some online presence? Engage pet lovers and grow your brand with our pet-friendly social media strategies!",
        img: IMG29,
        links: "javascript:;"
    }
    , {
        title: "Hotel & Resorts",
        txt: "Need to turn stays into unforgettable stories? Attract travelers and inspire journeys with our captivating social media content!",
        img: IMG30,
        links: "javascript:;"
    }
    , {
        title: "Non-Profits & Causes",
        txt: "Struggling to raise awareness and support? Amplify your mission and connect with supporters through impactful social media campaigns!",
        img: IMG31,
        links: "javascript:;"
    }, {
        title: "Transportation and Logistics",
        txt: "Want to drive efficiency and build trust? Streamline your operations and connect with clients through our effective social media strategies!",
        img: IMG32,
        links: "javascript:;"
    }, {
        title: "Legal",
        txt: "Finding it hard to build credibility and connect with clients? Enhance your professional presence and trustworthiness with our legal-friendly social media campaigns!",
        img: IMG33,
        links: "javascript:;"
    }, {
        title: "Travel & Tours",
        txt: "Want to inspire more journeys and attract travelers? Make every destination a dream with our adventurous social media strategies!",
        img: IMG34,
        links: "javascript:;"
    }
    , {
        title: "Film & Photography",
        txt: "Want your images and videos to stand out in the digital crowd? Our social media strategies will elevate your film and photography work, attracting the audience you deserve!",
        img: IMG35,
        links: "javascript:;"
    }
]

export default function Industries() {
    return (
        <section>
            <div className="overflow-hidden py-[50px]">
                <div className="container">
                    <h2 className="max-w-[600px] lg:max-w-[840px] mx-auto text-[25px] sm:text-[35px] md:text-[40px] lg:text-[50px] leading-snug font-semibold text-center mb-[50px] text-black">
                        Transforming Businesses in Various <span className="text-primary">Industries</span>
                    </h2>
                </div>
                <AutoPlaySlider wrapperClasses="!overflow-visible" options={{ align: "center" }} dots={false} arrows={false} >
                    {
                        data && data.map(({ title, txt, img, links }, i) => (
                            <div key={i} className="shrink-0 grow-0 basis-[280px] md:basis-[400px] pl-4">
                                <div className="h-[350px] md:h-[450px] rounded-xl overflow-hidden relative z-10 before:content-[''] before:inset-0 before:-z-[9] before:absolute before:bg-[linear-gradient(180deg,transparent_50%,#000)] before:w-full before:h-full after:content-[''] after:inset-0 after:-z-[9] after:absolute after:bg-[rgba(0,0,0,.6)] after:w-full after:h-full after:translate-y-[100%] group hover:after:translate-y-0 transition-all duration-300 after:transition-all after:duration-300 text-white">
                                    <Image src={img} alt="Click First SMM" fill={true} sizes="100" className="object-cover object-center -z-10" />
                                    <h4 className="text-[16px] md:text-[20px] font-bold leading-tight absolute z-10 bottom-5 left-0 right-0 text-center group-hover:opacity-0 group-hover:translate-y-[-100%] transition-all duration-300">
                                        {title}
                                    </h4>
                                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 translate-y-[100%] group-hover:translate-y-0 transition-all duration-300">
                                        <h4 className="text-[16px] md:text-[20px] font-bold leading-tight mb-3">
                                            {title}
                                        </h4>
                                        <p className="text-[14px] text-justify md:text-left 2xl:text-[15px] leading-relaxed mb-5 border-b-2 pb-5">
                                            {txt}
                                        </p>
                                        <div className="text-right" dangerouslySetInnerHTML={{
                                            __html: `<a href=${links} class='text-[15px] font-medium inline-flex items-center ml-auto  gap-2.5'>
                                                <span>Learn More</span>
                                                <img src="/industries/right-arrow.webp" alt='Click First SMM' width='23' height='11' class='brightness-0 invert transition-all duration-300' />
                                            </a>`}} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </AutoPlaySlider>
                <div className="mt-[50px] text-center">
                    <CTA css="hover:bg-secondary" theme="primary" text="Let’s Discuss Your Project" size="large" />
                </div>
            </div>
        </section>
    )
}
