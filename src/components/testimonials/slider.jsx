// Components
import { AutoPlaySlider } from "@/components"
import VideoPlayer from "./videoplayer"
// Media
import t1 from "media/testimonials/1.webp"
import t2 from "media/testimonials/2.webp"
import t3 from "media/testimonials/3.webp"
import t4 from "media/testimonials/4.webp"
import t5 from "media/testimonials/5.webp"


const data = [
    {
        message: "They really brought us some good sales with their Facebook and Instagram ad campaigns. The customer support from Tim kept us updated on the progress of the social media campaigns.",
        name: "Ralph, Owner & CEO",
        jd: "Mirage Luxury Travel",
        rating: "4.9 / 5.0",
        logo: (`<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" xml:space="preserve" id="Social_Icons" version="1.1" viewBox="0 0 128 128"><g id="_x36__stroke"><g id="Yelp" fill-rule="evenodd" clip-rule="evenodd"><path fill="none" d="M0 0h128v128H0z"></path><path id="Yelp_1_" fill="#D32200" d="M64.69 52.375c-.366-8.644-2.924-47.155-3.226-48.943C61.021 1.82 59.785.664 57.993.204c-5.477-1.384-26.43 4.588-30.317 8.66-1.244 1.32-1.712 2.952-1.337 4.388.608 1.28 26.579 42.784 26.579 42.784 3.842 6.324 6.971 5.344 7.994 5.02 1.019-.325 4.132-1.305 3.778-8.681m21.57 18.019c21.477-5.284 22.307-5.568 23.156-6.132 1.297-.884 1.949-2.376 1.84-4.192 0-.06.008-.116 0-.184-.552-5.352-9.798-19.296-14.349-21.556-1.611-.788-3.23-.732-4.559.176-.83.552-1.446 1.38-12.943 17.356 0 0-5.199 7.196-5.259 7.264-1.373 1.688-1.385 4.12-.052 6.2 1.385 2.152 3.729 3.2 5.876 2.596 0 0-.089.152-.113.184 1.059-.412 2.956-.88 6.403-1.712m9.758 47.658c4.772-1.932 15.191-15.392 15.923-20.572.25-1.8-.302-3.356-1.526-4.344-.797-.612-1.418-.852-20.313-7.152 0 0-8.288-2.784-8.397-2.836-2.001-.788-4.297-.064-5.835 1.876-1.595 1.98-1.844 4.584-.568 6.564l3.339 5.516c11.224 18.516 12.078 19.824 12.887 20.464 1.248 1 2.834 1.164 4.49.484m-32.111 7.025c.33-.964.366-1.632.423-21.82 0 0 .048-8.916.052-9.012.133-2.18-1.252-4.168-3.54-5.068-2.348-.916-4.873-.348-6.29 1.452 0 0-4.144 5-4.16 5-14.244 16.988-14.828 17.772-15.178 18.78a4.1 4.1 0 0 0-.221 1.852c.085.896.479 1.792 1.148 2.616 3.298 3.992 19.133 9.912 24.187 9.036 1.759-.328 3.032-1.332 3.579-2.836M18.445 61.623c-2.046 3.332-2.908 13.824-2.203 20.788.25 2.3.66 4.216 1.252 5.36.818 1.58 2.195 2.524 3.765 2.576 1.007.056 1.631-.12 20.543-6.3 0 0 8.405-2.72 8.441-2.74 2.094-.536 3.504-2.496 3.645-5 .133-2.56-1.172-4.828-3.318-5.644 0 0-5.92-2.456-5.936-2.456-20.321-8.516-21.231-8.852-22.258-8.864-1.567-.06-2.968.74-3.931 2.28"></path></g></g></svg>`),
        src: "https://player.vimeo.com/progressive_redirect/playback/1025080172/rendition/480p/file.mp4?loc=external&log_user=0&signature=a24fd9ea730a3494e4eb538a990d787a43ae55c2b9aaf69d839d446b62551d82",
        thumbnail: t1
    },
    {
        message: "We hired Click First SMM to handle our social media marketing and the outcomes have been outstanding. Our campaign manager Omar Perez made sure that our plan precisely targeted our intended audience.",
        name: "Levi Anderson, Owner",
        jd: "Park Place Medical Spa",
        rating: "5.0 / 5.0",
        logo: (`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="45" height="45" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 431 416"><g id="Artboard1"><path fill="none" d="M0 0h430.327v415.84H0z"></path><path fill="#00B67A" fill-rule="nonzero" d="M427.626 162.791H264.752L214.614 7.928 164.179 162.79l-162.874-.297L133.03 258.32 82.593 413.183l131.724-95.826 131.724 95.826-50.139-154.864z"></path><path fill="#005128" fill-rule="nonzero" d="m307.176 293.327-11.274-35.008-81.288 59.038z"></path></g></svg>`),
        src: "https://player.vimeo.com/progressive_redirect/playback/1025080113/rendition/480p/file.mp4?loc=external&log_user=0&signature=bbe7aef20c27c1f05928524750fdea5132b19032b0c737ec9a77729e03b0f900",
        thumbnail: t2
    },
    {
        message: "The website design they created for us is very modern and it exceeded our expectations. Tim and his team have provided superb support to us throughout the project.",
        name: "Heyman, Director",
        jd: "Brain Wide Global Immigration",
        rating: "4.9 / 5.0",
        logo: (`<svg xmlns="http://www.w3.org/2000/svg" width="41.272" height="46.901" viewBox="0 0 41.272 46.901"><g data-name="Group 45986"><path fill="#fff" d="M105.49 35.558c.321-7.584 4.384-14.949 13.385-19.1a25.031 25.031 0 0127.457 5.1c.424.438.482.7 0 1.154a353.149 353.149 0 00-6.181 6.181c-.716.745-1.081.117-1.461-.263a13.926 13.926 0 00-10.624-3.83 12.581 12.581 0 00-12.158 14.613 12.114 12.114 0 008.665 10.843 13.151 13.151 0 0013.9-3.142c.891-.862 1.359-.76 2.148.073 1.827 1.914 3.77 3.741 5.67 5.582.438.424.745.672.117 1.315a24.637 24.637 0 01-31.9 2.513c-5.686-4.249-9.018-11.161-9.018-21.039z" data-name="Path 3092" transform="translate(-105.49 -14.402)"></path><path fill="#ff3d00" d="M116 32.87a7.715 7.715 0 017.789-7.73A7.77 7.77 0 11116 32.87z" data-name="Path 3093" transform="translate(-100.642 -9.45)"></path></g></svg>`),
        src: "https://player.vimeo.com/progressive_redirect/playback/1025080134/rendition/480p/file.mp4?loc=external&log_user=0&signature=b106843293f5c5c65306f95c95bb1982ba21e1fef8ec3a006d38763299defead",
        thumbnail: t3
    },
    {
        message: "Click First SMM has been just such a game changer. Omar, who worked closely with us throughout the entire project really just ensured that our social media and SEO strategies were perfectly aligned with our goals.",
        name: "Emily, Marketing Director",
        jd: "Cinnaholic",
        rating: "5.0 / 5.0",
        logo: (`<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" xml:space="preserve" id="Layer_1" version="1.1" viewBox="0 0 24 24"><path fill="#F44336" d="M12 5c1.617 0 3.101.554 4.286 1.474l3.637-3.47A11.94 11.94 0 0 0 12 0C7.392 0 3.397 2.6 1.386 6.41L5.43 9.603A7 7 0 0 1 12 5"></path><path fill="#2196F3" d="M23.896 13.502C23.96 13.01 24 12.509 24 12c0-.858-.094-1.693-.265-2.5H12v5h6.486a7.07 7.07 0 0 1-2.648 3.32l4.06 3.204a12 12 0 0 0 3.998-7.522"></path><path fill="#FFC107" d="M5 12c0-.843.157-1.648.43-2.397L1.386 6.41A11.94 11.94 0 0 0 0 12c0 1.997.495 3.876 1.358 5.533l4.05-3.197A7 7 0 0 1 5 12"></path><path fill="#00B060" d="M12 19a7 7 0 0 1-6.592-4.664l-4.05 3.197C3.36 21.373 7.37 24 12 24c3.028 0 5.789-1.125 7.897-2.976l-4.059-3.205A6.83 6.83 0 0 1 12 19"></path><path d="M12 23.75a12.42 12.42 0 0 1-8.952-3.779C5.245 22.438 8.436 24 12 24a11.94 11.94 0 0 0 8.888-3.96A12.4 12.4 0 0 1 12 23.75M12 14.25v.25h6.486l.101-.25z" opacity="0.1"></path><path fill="#E6E6E6" d="M23.994 12.147c.001-.05.006-.098.006-.147l-.002-.041c0 .063-.004.125-.004.188"></path><path fill="#FFF" d="M12 9.5v.25h11.786l-.05-.25z" opacity="0.2"></path><linearGradient id="SVGID_1_" x1="0" x2="24" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFF" stop-opacity="0.2"></stop><stop offset="1" stop-color="#FFF" stop-opacity="0"></stop></linearGradient><path fill="url(#SVGID_1_)" d="M23.735 9.5H12v5h6.486C17.478 17.122 14.977 19 12 19a7 7 0 0 1 0-14c1.402 0 2.694.43 3.789 1.14.167.11.34.212.497.334l3.637-3.47-.082-.063A11.93 11.93 0 0 0 12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.118 0 11.155-4.581 11.896-10.498.063-.492.104-.993.104-1.502 0-.858-.094-1.693-.265-2.5"></path><path d="M15.789 5.89A6.93 6.93 0 0 0 12 4.75a7 7 0 0 0-6.999 7.117A6.994 6.994 0 0 1 12 5c1.402 0 2.694.43 3.789 1.14.167.11.34.212.497.334l3.637-3.47-3.637 3.22c-.157-.122-.33-.224-.497-.333" opacity="0.1"></path><path fill="#FFF" d="M12 .25c2.975 0 5.683 1.098 7.78 2.892l.143-.138-.11-.096A11.83 11.83 0 0 0 12 0C5.373 0 0 5.373 0 12c0 .042.006.083.006.125C.074 5.555 5.415.25 12 .25" opacity="0.2"></path></svg>`),
        src: "https://player.vimeo.com/progressive_redirect/playback/1025080075/rendition/480p/file.mp4?loc=external&log_user=0&signature=b962f04017888128a6f4fdeb9a6692d557ff03295dc75646e58ef98cdd6a0533",
        thumbnail: t4
    },
    {
        message: "Within 45 minutes, Ronnie sorted out the problem with our Facebook page. He didn’t try to sell me other stuff but only focused on my problem and solved it. I will be working with Ronnie on other projects in the future.",
        name: "Jean Gilford, CEO",
        jd: "Institute Of Hazardous Materials Management",
        rating: "5.0 / 5.0",
        logo: (`<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 431 416"><g id="Artboard1"><path fill="none" d="M0 0h430.327v415.84H0z"></path><path fill="#00B67A" fill-rule="nonzero" d="M427.626 162.791H264.752L214.614 7.928 164.179 162.79l-162.874-.297L133.03 258.32 82.593 413.183l131.724-95.826 131.724 95.826-50.139-154.864z"></path><path fill="#005128" fill-rule="nonzero" d="m307.176 293.327-11.274-35.008-81.288 59.038z"></path></g></svg>`),
        src: "https://player.vimeo.com/progressive_redirect/playback/1025080037/rendition/480p/file.mp4?loc=external&log_user=0&signature=913ff9b42a7eb7049bb3a195b49b76d284d67369f948e454ee0fd39975dbf245",
        thumbnail: t5
    }
]

export default function Slider() {
    return (
        <AutoPlaySlider>
            {
                data && data.map(({ message, name, jd, rating, logo, src, thumbnail }, i) => (
                    <div className="grow-0 shrink-0 basis-full pl-4" key={i}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 lg:gap-y-0 items-center">
                            <div>
                                <div className="max-w-[674px]">
                                    <p className="text-[20px] sm:text-[22px] lg:text-[18px] xl:text-[22px] 2xl:text-[28px] font-medium italic leading-relaxed mb-10">
                                        {message}
                                    </p>
                                    <div className="xl:flex gap-x-5 justify-between">
                                        <div>
                                            <h4 className="text-[20px] text-secondary leading-tight font-bold mb-1">
                                                {name}
                                            </h4>
                                            <p className="text-[14px] sm:text-[16px] leading-normal text-text">
                                                {jd}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3 mt-5 xl:mt-0">
                                            <p className="text-[20px] font-medium leading-none">{rating}</p>
                                            <div dangerouslySetInnerHTML={{ __html: logo }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <VideoPlayer src={src} thumbnail={thumbnail} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </AutoPlaySlider>
    )
}
