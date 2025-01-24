// Link
import Link from "next/link"
// React
import { useState, useRef } from "react"
// Lucide
import { ChevronDown } from "lucide-react"
// Components
import { CTA } from "../index"
import MobileNav from "./mobileNav"

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false)
  const timerRef = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current)
    setIsHovered(true)
    timerRef.current = setTimeout(() => {
      setIsSubmenuVisible(true)
    }, 500)
  }

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current)
    setIsHovered(false)
    timerRef.current = setTimeout(() => {
      if (!isHovered) {
        setIsSubmenuVisible(false)
      }
    }, 5000)
  }

  const handleSubmenuMouseEnter = () => {
    setIsSubmenuVisible(true)
  }

  const handleSubmenuMouseLeave = () => {
    setIsSubmenuVisible(false)
  }

  const services = [
    {
      title: "Social Media Marketing",
      svg: "smm",
      desc: "Our social media marketing solutions help brands create an ever-lasting impression on their target audience.",
      link: "/social-media-marketing",
    },
    {
      title: "YouTube Monetization",
      svg: "ym",
      desc: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
      link: "/youtube-monetization",
    },
    {
      title: "Social Media Management",
      svg: "smmTwo",
      desc: "Efficiently manage your brand’s online presence with strategies that build engagement and loyalty.",
      link: "/social-media-management",
    },
    {
      title: "Search Engine Optimization",
      svg: "seo",
      desc: "Boost your visibility with data-driven SEO strategies tailored to drive traffic and increase conversions.",
      link: "/search-engine-optimization",
    },
    {
      title: "Social Media Advertising",
      svg: "sma",
      desc: "Drive targeted traffic and maximize ROI with precision-focused ad campaigns that capture attention.",
      link: "/social-media-advertising",
    },
    {
      title: "Google Ads (PPC)",
      svg: "ppc",
      desc: "Boost your visibility with data-driven SEO strategies tailored to drive traffic and increase conversions.",
      link: "/google-ads",
    },
    {
      title: "Influencer Marketing",
      svg: "im",
      desc: "Harness the power of influencers to amplify your brand’s reach and connect with your target audience.",
      link: "/influencer-marketing",
    },
    {
      title: "Email Marketing",
      svg: "em",
      desc: "Engage your audience with personalized email campaigns designed to nurture leads and drive sales.",
      link: "/email-marketing",
    },
    {
      title: "YouTube Optimization",
      svg: "yo",
      desc: "Maximize your YouTube presence with optimized content that attracts views and grows your subscriber base.",
      link: "/youtube-optimization",
    },
  ]

  const renderSVG = (type) => {
    switch (type) {
      case "smm":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
            className="transition-all ease-in-out duration-300"
          >
            <g data-name="Group 53293" transform="translate(-826 -148)">
              <g data-name="Group 53219" transform="translate(17 -4)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 59"
                  transform="translate(809 152)"
                ></circle>

                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 58"
                  transform="translate(814 157)"
                ></circle>
              </g>

              <g
                fill="white"
                data-name="advertising (2)"
                transform="translate(837.42 161.5)"
              >
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M44.76 39.165c-.1-.07-3.984-8.513-4.2-8.889a1.226 1.226 0 00-.244-1.176c-1.525-1.349-5.242 2.137-6.712 3.472-.647.688-5.134 4.821-3.753 6.556a1.212 1.212 0 001.145.288l5.78 3.04-2.8 2.69a1.536 1.536 0 00-.488 1.1 2.094 2.094 0 00.857 1.564 1.579 1.579 0 002.233.05l3.753-3.6a3.71 3.71 0 004.435-5.1zm-13.887-.988c-.007-.555 1.24-2.425 3.591-4.7 2.384-2.267 4.263-3.364 4.861-3.4-.335.962-1.335 2.458-3.628 4.692-2.316 2.158-3.863 3.131-4.825 3.407z"
                  data-name="Path 7516"
                  transform="translate(-7.514 -9.298)"
                ></path>

                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M36.976 23.9a.625.625 0 00-.6.65l.1 2.425a.625.625 0 001.25-.049l-.1-2.425a.617.617 0 00-.65-.6z"
                  data-name="Path 7517"
                  transform="translate(-10.061 -7.461)"
                ></path>

                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M25.695 34.777a.626.626 0 10-.1 1.247l2.419.2a.626.626 0 10.1-1.247z"
                  data-name="Path 7518"
                  transform="translate(-5.802 -11.541)"
                ></path>

                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M31.371 30.917a.626.626 0 10.9-.866l-1.452-1.516a.626.626 0 00-.9.866z"
                  data-name="Path 7519"
                  transform="translate(-7.575 -9.128)"
                ></path>

                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M15.5 38.531a5.958 5.958 0 105.962 5.961 5.963 5.963 0 00-5.962-5.961zm1.195 4.8v2.4a1.887 1.887 0 01-1.814 1.945h-.538a1.648 1.648 0 010-3.29.655.655 0 01.657.626.6.6 0 01-.6.626c-.2-.026-.348.153-.35.394 0 .213.131.394.294.394h.538a.639.639 0 00.563-.694v-3.811a.631.631 0 011.057-.45 18.185 18.185 0 001.877 1.583.612.612 0 01.463.269.625.625 0 01-.163.87c-.307.213-.544.375-1.983-.857z"
                  data-name="Path 7520"
                  transform="translate(0 -12.949)"
                ></path>

                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M15.5 27.3a5.958 5.958 0 10-5.955-5.955A5.963 5.963 0 0015.5 27.3zm-2.077-6.331h.97v-1.054a2.311 2.311 0 012.307-2.308c.646-.015 1.85.362 1.414 1.2a.627.627 0 01-.857.206 1.042 1.042 0 00-.557-.156 1.056 1.056 0 00-1.057 1.057v1.051h1.182a.626.626 0 110 1.251h-1.18v2.234a.626.626 0 11-1.251 0v-2.233h-.97a.626.626 0 110-1.251z"
                  data-name="Path 7521"
                  transform="translate(0 -4.279)"
                ></path>

                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M36.383 16.061a6.046 6.046 0 10-6.049-6.049 6.052 6.052 0 006.049 6.049zm-3.359-7.794a1.613 1.613 0 011.608-1.614h3.5a1.618 1.618 0 011.614 1.614v3.5a1.612 1.612 0 01-1.614 1.608h-3.5a1.607 1.607 0 01-1.608-1.608z"
                  data-name="Path 7522"
                  transform="translate(-7.796)"
                ></path>

                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M37 14.462h3.5a.358.358 0 00.363-.357v-3.5a.363.363 0 00-.363-.363H37a.358.358 0 00-.357.363v3.5a.352.352 0 00.357.357zm1.752-3.822a1.717 1.717 0 11-1.717 1.717 1.717 1.717 0 011.717-1.717z"
                  data-name="Path 7523"
                  transform="translate(-10.16 -2.342)"
                ></path>

                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M39.74 13.81a.466.466 0 10-.454-.466.466.466 0 00.454.466z"
                  data-name="Path 7524"
                  transform="translate(-11.153 -3.329)"
                ></path>
              </g>
            </g>
          </svg>
        )
      case "ym":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
          >
            <g data-name="Group 53292" transform="translate(-1231 -148)">
              <g data-name="Group 53239" transform="translate(422 -4)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 59"
                  transform="translate(809 152)"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 58"
                  transform="translate(814 157)"
                ></circle>
              </g>
              <g
                fill="#fff"
                data-name="youtube (1)"
                transform="translate(1148 4.48)"
              >
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M146.2 161.52v21.644h1.832v-19.576h28.743v19.576h1.832V161.52z"
                  data-name="Path 7533"
                  transform="translate(-44.084)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M134.523 576.16h-32.407L100 589.722h36.639zm-15.059 3.908h1.824a.521.521 0 010 1.034h-1.824a.521.521 0 010-1.034zm-4.168 0h1.823a.521.521 0 010 1.034H115.3a.521.521 0 010-1.034zm-10.772 5.648h-1.772a.528.528 0 010-1.034h1.772a.528.528 0 010 1.034zm.087-4.616h-1.824a.521.521 0 010-1.034h1.824a.521.521 0 010 1.034zm3.963 4.616H106.8a.528.528 0 010-1.034h1.772a.528.528 0 010 1.034zm.206-4.616h-1.824a.521.521 0 010-1.034h1.824a.521.521 0 010 1.034zm3.844 4.616h-1.771a.528.528 0 010-1.034h1.772a.528.528 0 010 1.034zm.325-4.616h-1.824a.521.521 0 010-1.034h1.824a.521.521 0 010 1.034zm1.168 6.286l1.263-3.822h5.877l1.263 3.822zm9.081-6.8a.482.482 0 01.435-.517h1.824a.521.521 0 010 1.034h-1.826a.482.482 0 01-.431-.518zm3.032 5.131h-1.663a.535.535 0 010-1.034h1.663a.535.535 0 010 1.034zm1.137-5.133a.482.482 0 01.435-.517h1.824a.521.521 0 010 1.034H127.8a.481.481 0 01-.435-.515zm2.665 5.133h-1.662a.536.536 0 010-1.034h1.663a.536.536 0 010 1.034zm3.8 0h-1.663a.535.535 0 010-1.034h1.663a.535.535 0 010 1.034zm-.032-4.617h-1.824a.521.521 0 010-1.034h1.824a.521.521 0 010 1.034z"
                  data-name="Path 7534"
                  transform="translate(0 -393.202)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M324.929 256.07h-10.89a3.446 3.446 0 00-3.219 3.634v6.463a3.446 3.446 0 003.219 3.634h10.89a3.446 3.446 0 003.219-3.634V259.7a3.446 3.446 0 00-3.219-3.63zm-2.412 7.569l-5.423 3.078a.645.645 0 01-.7-.035.836.836 0 01-.339-.689v-6.119a.836.836 0 01.338-.687.645.645 0 01.7-.037l5.423 3.043a.858.858 0 010 1.446z"
                  data-name="Path 7535"
                  transform="translate(-201.165 -89.662)"
                ></path>
              </g>
            </g>
          </svg>
        )
      case "smmTwo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
          >
            <g data-name="Group 53291" transform="translate(-826 -254)">
              <g data-name="Group 53218" transform="translate(17 -6)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 61"
                  transform="translate(809 260)"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 60"
                  transform="translate(814 265)"
                ></circle>
              </g>
              <path
                className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                fill="#fff"
                d="M40.185 31.023l1.067 1.126v-.786a.494.494 0 01.494-.494h.743a1.258 1.258 0 001.256-1.256v-5.266h-1.669a2.247 2.247 0 01-2.2-1.795h-4.647a1.258 1.258 0 00-1.256 1.256v5.8a1.258 1.258 0 001.256 1.256h4.6a.494.494 0 01.359.154zm-2.792-1.276a.494.494 0 01-.707-.514l.234-1.617-1.14-1.172a.494.494 0 01.27-.831l1.61-.278.763-1.446a.494.494 0 01.874 0l.763 1.446 1.61.278a.494.494 0 01.27.831l-1.14 1.171.234 1.617a.494.494 0 01-.707.514l-1.466-.722zm6.5-8.592h-.4v-2.209h.4zm2.784 2.205a.494.494 0 01.359.154L48.1 24.64v-.786a.494.494 0 01.494-.494h.743a1.257 1.257 0 001.256-1.254V16.3a1.258 1.258 0 00-1.256-1.256h-7.261A1.258 1.258 0 0040.82 16.3v5.805a1.257 1.257 0 001.256 1.254zM42.5 18.674a.717.717 0 01.716-.716h.944a.712.712 0 01.24.042l.835-1.5a.694.694 0 01.612-.36h.089a.7.7 0 01.7.7v1.286h1.576a.7.7 0 01.676.879l-.737 2.75a.7.7 0 01-.676.519h-2.254a.494.494 0 01-.247-.066l-.372-.215a.712.712 0 01-.442.154h-.944a.717.717 0 01-.716-.716zm21.867 13.413l.94.2v1.346l-.94.2a.494.494 0 00-.353.294l-.525 1.273a.494.494 0 00.042.458l.523.805-.952.954-.802-.527a.494.494 0 00-.458-.042l-1.27.525a.494.494 0 00-.294.353l-.2.938h-1.256v-2.716a3.239 3.239 0 100-6.374v-2.72h1.252l.2.94a.494.494 0 00.294.354l1.27.525a.494.494 0 00.458-.042l.805-.523.952.952-.523.805a.494.494 0 00-.042.458l.525 1.27a.494.494 0 00.354.295zM45.353 21.281l-.476-.275v-1.827l.771-1.389v.825a.494.494 0 00.494.494h1.694l-.582 2.172zm-6 19.616a2.105 2.105 0 002.1 2.1h14.278a2.105 2.105 0 002.1-2.1v-1.062H39.353zm7.792.027h2.9a.494.494 0 110 .988h-2.9a.494.494 0 010-.988zM57.352 21.25a.494.494 0 01-.311-.459v-1.532h-.249a2.247 2.247 0 01-2.244-2.244v-5.8a2.247 2.247 0 012.244-2.244h.708A2.1 2.1 0 0055.731 8H53.18v.992a1.278 1.278 0 01-1.28 1.277h-6.615a1.278 1.278 0 01-1.277-1.277V8h-2.552a2.105 2.105 0 00-2.1 2.1v11.465h.479V16.3a2.247 2.247 0 012.244-2.244h7.259A2.247 2.247 0 0151.58 16.3v5.805a2.246 2.246 0 01-2.244 2.242h-.249v1.531a.494.494 0 01-.852.34l-1.773-1.871h-1.729v5.265a2.247 2.247 0 01-2.244 2.244h-.249v1.531a.494.494 0 01-.852.34l-1.773-1.871h-.261v6.991h18.48V21.183a.492.492 0 01-.483.067zM46.514 35.421a.494.494 0 11.494-.494.5.5 0 01-.494.494zm2.078 0a.494.494 0 11.494-.494.5.5 0 01-.493.494zm2.08 0a.494.494 0 11.494-.494.5.5 0 01-.493.494zM45 8.992V8h7.2v.992a.293.293 0 01-.289.289h-6.626A.293.293 0 0145 8.992zm14.4 26.22a2.246 2.246 0 01-.579-.076v-4.35a2.251 2.251 0 11.579 4.426zm4.65-25.256h-7.258a1.258 1.258 0 00-1.256 1.256v5.8a1.258 1.258 0 001.256 1.256h.743a.494.494 0 01.494.494v.786l1.071-1.122a.494.494 0 01.359-.154h4.6a1.258 1.258 0 001.256-1.256v-5.8a1.258 1.258 0 00-1.256-1.256zm-3.4 6.891a.494.494 0 01-.454 0c-2.661-1.376-2.96-2.851-2.9-3.607a2.1 2.1 0 011.4-1.82 1.634 1.634 0 011.726.39 1.634 1.634 0 011.726-.39 2.1 2.1 0 011.4 1.82c.061.76-.238 2.231-2.9 3.607zm1.917-3.531c.064.829-.714 1.744-2.144 2.532-1.43-.788-2.208-1.7-2.144-2.532a1.1 1.1 0 01.73-.96.823.823 0 01.257-.044.625.625 0 01.484.224l.3.343a.494.494 0 00.743 0l.3-.342a.664.664 0 01.742-.181 1.1 1.1 0 01.73.96zM39.921 27.1a.494.494 0 00-.135.415l.134.93-.843-.415a.5.5 0 00-.436 0l-.843.415.134-.93a.494.494 0 00-.132-.415l-.656-.674.926-.16a.494.494 0 00.353-.256l.439-.833.439.833a.494.494 0 00.353.256l.926.16z"
                data-name="social-media (2)"
                transform="translate(811.36 263.5)"
              ></path>
            </g>
          </svg>
        )
      case "seo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
          >
            <g data-name="Group 53290" transform="translate(-1231 -254)">
              <g data-name="Group 53240" transform="translate(422 -6)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 61"
                  transform="translate(809 260)"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 60"
                  transform="translate(814 265)"
                ></circle>
              </g>
              <g transform="translate(1249 271)">
                <g fill="#fff" data-name="Glyph">
                  <path
                    className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                    d="M92.6 71.789a1.506 1.506 0 001.5-1.5V67a1.5 1.5 0 10-3 0v3.281a1.506 1.506 0 001.5 1.5z"
                    data-name="Path 7558"
                    transform="translate(-66.19 -47.59)"
                  ></path>
                  <path
                    className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                    d="M0 53.105A3.7 3.7 0 003.691 56.8h27.618A3.7 3.7 0 0035 53.105V30H0zm23-11.894a3.418 3.418 0 016.836 0v3.281a3.418 3.418 0 01-6.836 0zm-8.914-.82a2.6 2.6 0 012.6-2.6h3.281a.957.957 0 010 1.914H16.68a.684.684 0 00-.684.684v1.5h3.965a.957.957 0 010 1.914H16v1.5a.684.684 0 00.68.697h3.281a.957.957 0 010 1.914H16.68a2.6 2.6 0 01-2.6-2.6zM9 43.809h-.82a3.008 3.008 0 010-6.016h1.23a2.6 2.6 0 012.6 2.6.957.957 0 01-1.914 0 .684.684 0 00-.684-.684H8.176a1.094 1.094 0 100 2.188H9a3.008 3.008 0 010 6.013H7.766a2.6 2.6 0 01-2.6-2.6.957.957 0 111.914 0 .684.684 0 00.686.69H9a1.094 1.094 0 000-2.187z"
                    data-name="Path 7559"
                    transform="translate(0 -21.797)"
                  ></path>
                  <path
                    className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                    d="M31.309 0H3.691A3.7 3.7 0 000 3.691v3.692h35V3.691A3.7 3.7 0 0031.309 0zM4.238 5.059a.82.82 0 11.82-.82.82.82 0 01-.82.82zm4.375 0a.82.82 0 11.82-.82.82.82 0 01-.82.82zm4.375 0a.82.82 0 11.82-.82.82.82 0 01-.82.82zm17.5 0h-4.375a.82.82 0 110-1.641h4.375a.82.82 0 010 1.641z"
                    data-name="Path 7560"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case "sma":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
          >
            <g data-name="Group 53280" transform="translate(-826 -360)">
              <g data-name="Group 53220" transform="translate(17 100)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 61"
                  transform="translate(809 260)"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 60"
                  transform="translate(814 265)"
                ></circle>
              </g>
              <g fill="#fff" transform="translate(838 374)">
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M34.1 74.775a1.175 1.175 0 00-1.157-.871l-.032-.294h-3.6l.545 5.179a2.391 2.391 0 00.871 1.607c.915.811 2.908.788 2.812-.792l-.266-2.542a1.2 1.2 0 001.042-1.507l-.215-.776z"
                  data-name="Path 7525"
                  transform="translate(-13.436 -41.923)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M23.308 9H8.591A1.591 1.591 0 007 10.591V21.33a1.591 1.591 0 001.591 1.591h8.571l2.665 3.047a.4.4 0 00.7-.263v-2.784h2.784A1.591 1.591 0 0024.9 21.33V10.591A1.591 1.591 0 0023.308 9zm-3.48 7.47l-3.146 3.146a1.039 1.039 0 01-1.464 0l-3.147-3.146a2.633 2.633 0 01-.024-3.687 2.663 2.663 0 013.9.163 2.663 2.663 0 013.9-.163 2.633 2.633 0 01-.024 3.687z"
                  data-name="Path 7526"
                  transform="translate(0 -3.011)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M60.392 4H45.675a1.591 1.591 0 00-1.535 1.193h1.535a2.388 2.388 0 012.387 2.387v10.341h.4v2.784a.4.4 0 00.7.263l2.665-3.047h8.571a1.591 1.591 0 001.591-1.591V5.591A1.591 1.591 0 0060.392 4zm-4.335 8.257L52.1 14.234a1.456 1.456 0 01-2.1-1.3V8.98a1.459 1.459 0 012.1-1.3l3.957 1.98a1.459 1.459 0 010 2.593z"
                  data-name="Path 7527"
                  transform="translate(-22.368)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M29.159 53.61h-4.773A2.388 2.388 0 0022 56v2.386a2.388 2.388 0 002.386 2.386h4.773z"
                  data-name="Path 7528"
                  transform="translate(-9.034 -29.878)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M51.546 45.594a17.121 17.121 0 01-7.891 2.955L42 48.732v7.251l1.655.183a17.1 17.1 0 017.891 2.959V45.59z"
                  data-name="Path 7529"
                  transform="translate(-21.079 -25.048)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M69.193 41.61A1.2 1.2 0 0068 42.8v14.322a1.193 1.193 0 102.386 0V42.8a1.2 1.2 0 00-1.193-1.19z"
                  data-name="Path 7530"
                  transform="translate(-36.737 -22.651)"
                ></path>
              </g>
            </g>
          </svg>
        )
      case "ppc":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
          >
            <g data-name="Group 53289" transform="translate(-1231 -360)">
              <g data-name="Group 53241" transform="translate(422 100)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 61"
                  transform="translate(809 260)"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 60"
                  transform="translate(814 265)"
                ></circle>
              </g>
              <g fill="#fff" transform="translate(1242.909 377.5)">
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M42.68 25A15.8 15.8 0 0027.3 44.417c.16-.026-.187.006 4.43-.378a11.416 11.416 0 117.992 7.785c-.37 4.45-.364 4.382-.368 4.415A15.793 15.793 0 1042.68 25z"
                  data-name="Path 7546"
                  transform="translate(-19.452 -23.294)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M437.751 26.849l1.094-1.094a1.025 1.025 0 10-1.45-1.45L436.3 25.4a1.025 1.025 0 001.45 1.45z"
                  data-name="Path 7547"
                  transform="translate(-400.605 -22.363)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M388.632 3.136a1.025 1.025 0 001.339-.558l.478-1.162a1.025 1.025 0 10-1.9-.781l-.474 1.165a1.025 1.025 0 00.557 1.336z"
                  data-name="Path 7548"
                  transform="translate(-355.883)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M463.034 80.568a1.025 1.025 0 00-1.376-.459l-1.094.547a1.025 1.025 0 00.917 1.834l1.094-.547a1.025 1.025 0 00.459-1.375z"
                  data-name="Path 7549"
                  transform="translate(-422.962 -74.532)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M17.53 327.111l-9.281.773a1.026 1.026 0 00-.64 1.747l1.6 1.6-2.909 2.941a1.025 1.025 0 000 1.446l3.828 3.828a1.025 1.025 0 001.446 0l2.942-2.911 1.6 1.6a1.026 1.026 0 001.747-.64l.773-9.281a1.026 1.026 0 00-1.106-1.103z"
                  data-name="Path 7550"
                  transform="translate(0 -304.746)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M130.366 119a9.366 9.366 0 00-8.848 12.434c3.2-.266 3.059-.259 3.236-.259a3.077 3.077 0 013.065 3.332l-.233 2.8a9.365 9.365 0 102.78-18.307zm2.943 11.406a3.037 3.037 0 01-1.964 2.356v.256a1.025 1.025 0 01-1.075 1.024 1.044 1.044 0 01-.976-1.053v-.111a3.676 3.676 0 01-1.414-.593 1.047 1.047 0 01-.353-1.409 1.025 1.025 0 011.44-.33 1.817 1.817 0 001.345.348.974.974 0 00.974-.827.684.684 0 00-.514-.818 8.483 8.483 0 01-2.343-1.131 2.568 2.568 0 01.865-4.3v-.106a1.025 1.025 0 011.075-1.024 1.044 1.044 0 01.976 1.072 4 4 0 011.193.508 1.025 1.025 0 01.311 1.452 1.045 1.045 0 01-1.439.262 1.875 1.875 0 00-1.243-.26.607.607 0 00-.512.465.457.457 0 00.04.316 5.355 5.355 0 001.761.812 2.73 2.73 0 011.853 3.092z"
                  data-name="Path 7551"
                  transform="translate(-107.139 -110.868)"
                ></path>
              </g>
            </g>
          </svg>
        )
      case "im":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
          >
            <g data-name="Group 53288" transform="translate(-826 -466)">
              <g data-name="Group 53221" transform="translate(17 206)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 61"
                  transform="translate(809 260)"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 60"
                  transform="translate(814 265)"
                ></circle>
              </g>
              <path
                className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                fill="#fff"
                fillRule="evenodd"
                d="M21.815 26.723a4.717 4.717 0 11-4.775 4.717 4.746 4.746 0 014.775-4.716zm24.264 5.163a.535.535 0 11-.276-1.034l2-.535a.535.535 0 01.276 1.034zm-2.159-3.093a.535.535 0 11-1.034-.276l.5-1.858a.535.535 0 111.034.276zm1.484 1.3l1.436-1.435a.536.536 0 10-.758-.757l-1.435 1.436a.536.536 0 10.757.757zm-.682 5.279a.536.536 0 01.758-.758l1.36 1.36a.536.536 0 01-.758.757zm1.118-1.587a.535.535 0 11.276-1.034l1.961.525a.535.535 0 01-.276 1.034zm-2.584 4.751a.808.808 0 00.57-.987l-2.8-10.465a.806.806 0 10-1.557.417l2.8 10.465a.808.808 0 00.986.566zm-9.5-7.132l-2.247.6a1 1 0 00-.7 1.221l1.1 4.11a1 1 0 001.221.705l2.247-.6zm2.695 5.923l-1.7-6.363 3.875-2.474 2.423 9.042zm7.437-3.687l-.858-3.2a2.156 2.156 0 01.858 3.2zm-13.169 3.411a1.724 1.724 0 01-.8-2.992zm3.17 1.891l1.747 3.027a.482.482 0 00.657.176l.866-.5a.482.482 0 00.176-.657l-1.485-2.571zM43.569 11H30.2a.89.89 0 00-.887.887v8.451a.89.89 0 00.887.887h8.047l1.834 1.411 1.978 1.522v-2.933h1.507a.89.89 0 00.887-.887v-8.451a.89.89 0 00-.884-.887zm-11.348 2.911a.536.536 0 010-1.071h9.33a.536.536 0 010 1.071zm0 5.474a.536.536 0 010-1.071h9.33a.536.536 0 010 1.071zm0-2.737a.536.536 0 010-1.071h9.33a.536.536 0 010 1.071zm-5.845-2.113a.89.89 0 00-.887.887v8.45a.89.89 0 00.887.887h1.507v2.932l1.978-1.522 1.833-1.411h8.048a.889.889 0 00.768-.445L37.886 22.3H30.2a1.962 1.962 0 01-1.959-1.959v-5.8zM13.886 46h15.858v-3.8a6.77 6.77 0 00-4.249-6.264 5.891 5.891 0 01-7.36 0 6.77 6.77 0 00-4.249 6.264V46z"
                transform="translate(830.128 473)"
              ></path>
            </g>
          </svg>
        )
      case "em":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
          >
            <g data-name="Group 53287" transform="translate(-1231 -466)">
              <g data-name="Group 53242" transform="translate(422 206)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 61"
                  transform="translate(809 260)"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 60"
                  transform="translate(814 265)"
                ></circle>
              </g>
              <g fill="#fff" transform="translate(1247 482)">
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M27 6.5l-8.406-2.452A1.25 1.25 0 0017 5.25v10a1.25 1.25 0 001.594 1.2L27 14z"
                  data-name="Path 7552"
                  transform="translate(3.75 .5)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M28.5 6H26v7.5h2.5A2.5 2.5 0 0031 11V8.5A2.5 2.5 0 0028.5 6z"
                  data-name="Path 7553"
                  transform="translate(6 1)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M27.5 16.75H25L26.25 13h2.5z"
                  data-name="Path 7554"
                  transform="translate(5.75 2.75)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M19.027 9.382l-2.371-.593a6.159 6.159 0 00-.341-.83l1.255-2.094a.625.625 0 00-.094-.763L16.4 4.024a.625.625 0 00-.763-.094l-2.095 1.256a6.169 6.169 0 00-.83-.341l-.593-2.371A.625.625 0 0011.512 2H9.988a.625.625 0 00-.606.473l-.593 2.372a6.159 6.159 0 00-.83.341L5.865 3.93a.625.625 0 00-.763.094L4.024 5.1a.625.625 0 00-.094.763l1.256 2.095a6.159 6.159 0 00-.341.83l-2.371.593A.625.625 0 002 9.988v1.524a.625.625 0 00.473.606l2.371.593a6.159 6.159 0 00.341.83L3.93 15.635a.625.625 0 00.094.763L5.1 17.476a.625.625 0 00.763.094l2.093-1.256a6.159 6.159 0 00.83.341l.593 2.371a.625.625 0 00.606.473h1.524a.625.625 0 00.606-.473l.593-2.371a6.169 6.169 0 00.83-.341l2.093 1.256a.625.625 0 00.763-.094l1.082-1.076a.625.625 0 00.094-.763l-1.256-2.093a6.159 6.159 0 00.341-.83l2.371-.593a.625.625 0 00.473-.606V9.988a.625.625 0 00-.473-.606zM10.75 14.5a3.75 3.75 0 113.75-3.75 3.75 3.75 0 01-3.75 3.75z"
                  data-name="Path 7555"
                ></path>
                <circle
                  cx="2.5"
                  cy="2.5"
                  r="2.5"
                  data-name="Ellipse 72"
                  transform="translate(8.25 8.25)"
                ></circle>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M22.125 27.5a6.192 6.192 0 01-3.435-1.04L9 20v10a2.5 2.5 0 002.5 2.5h21.25a2.5 2.5 0 002.5-2.5V20l-9.69 6.46a6.193 6.193 0 01-3.435 1.04z"
                  data-name="Path 7556"
                  transform="translate(1.75 4.5)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M9 18.628a1.628 1.628 0 00.725 1.355l8.965 5.977A6.193 6.193 0 0022.125 27a6.193 6.193 0 003.435-1.04l8.965-5.977a1.628 1.628 0 00.725-1.355A1.628 1.628 0 0033.622 17H10.628A1.628 1.628 0 009 18.628z"
                  data-name="Path 7557"
                  transform="translate(1.75 3.75)"
                ></path>
              </g>
            </g>
          </svg>
        )
      case "yo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            viewBox="0 0 70 70"
          >
            <g data-name="Group 53286" transform="translate(-826 -572)">
              <g data-name="Group 53222" transform="translate(17 312)">
                <circle
                  cx="35"
                  cy="35"
                  r="35"
                  fill="rgba(45,64,246,0.15)"
                  data-name="Ellipse 61"
                  transform="translate(809 260)"
                ></circle>
                <circle
                  cx="30"
                  cy="30"
                  r="30"
                  fill="#2d40f6"
                  data-name="Ellipse 60"
                  transform="translate(814 265)"
                ></circle>
              </g>
              <g
                fill="#fff"
                data-name="Group 53274"
                transform="translate(-1690 7632)"
              >
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M9.912 19.824a9.912 9.912 0 119.912-9.912 9.923 9.923 0 01-9.912 9.912zm-5-7.314a1.336 1.336 0 00.912.93h.009a31.432 31.432 0 004.149.225 31.508 31.508 0 004.149-.225 1.336 1.336 0 00.92-.925v-.009a13.788 13.788 0 00.221-2.493v-.1-.1a14.285 14.285 0 00-.234-2.58l.013.087a1.336 1.336 0 00-.913-.932h-.009a31.519 31.519 0 00-4.149-.224h-.017c-.094 0-.943 0-1.854.03a12.836 12.836 0 00-2.281.195 1.336 1.336 0 00-.919.925v.009a14.7 14.7 0 00.012 5.277l-.013-.086zm4.009-.983V8.308l2.761 1.612-2.765 1.607z"
                  data-name="Subtraction 1"
                  transform="translate(2541.546 -7034.454)"
                ></path>
                <path
                  className="transition-all ease-in-out duration-300 group-hover:fill-[#f6ac00]"
                  d="M35 19.688v-4.375h-2.344a15.206 15.206 0 00-.935-3.5l2.028-1.171-2.187-3.786-2.03 1.172a15.4 15.4 0 00-2.559-2.559l1.172-2.03-3.789-2.188-1.171 2.027a15.206 15.206 0 00-3.5-.935V0h-4.372v2.344a15.206 15.206 0 00-3.5.935l-1.169-2.028-3.788 2.187 1.172 2.03a15.4 15.4 0 00-2.56 2.56l-2.03-1.172-2.187 3.788 2.028 1.171a15.206 15.206 0 00-.935 3.5H0v4.375h2.344a15.206 15.206 0 00.935 3.5l-2.028 1.166 2.187 3.789 2.03-1.172a15.4 15.4 0 002.559 2.559l-1.172 2.03 3.789 2.188 1.171-2.028a15.206 15.206 0 003.5.935V35h4.375v-2.344a15.206 15.206 0 003.5-.935l1.171 2.028 3.789-2.188-1.172-2.03a15.4 15.4 0 002.559-2.559l2.03 1.172 2.187-3.789-2.028-1.171a15.206 15.206 0 00.935-3.5zm-17.5 9.775A11.963 11.963 0 1129.463 17.5 11.976 11.976 0 0117.5 29.463z"
                  data-name="Path 7532"
                  transform="translate(2534 -7042)"
                ></path>
              </g>
            </g>
          </svg>
        )
      default:
        return null
    }
  }
  return (
    <nav className="relative flex items-center justify-end 2xl:gap-x-10 md:gap-x-5">
      <ul className="xl:flex items-center justify-end 2xl:gap-x-5 gap-x-4 text-white xl:static absolute hidden">
        {[
          ["Home", "/"],
          ["Services"],
          ["Influencer Marketing", "/influencer-marketing"],
          ["YouTube monetization", "/youtube-monetization"],
          ["About", "/about-us"],
          ["Contact Us", "/contact-us"],
        ].map(([text, link], i) => {
          if (text === "Services") {
            return (
              <li
                key={i}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="relative font-sans 2xl:text-base text-sm leading-tight font-medium flex items-center gap-x-2"
                >
                  Services
                  <ChevronDown className="size-5" />
                </button>
                <ul
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                  className={`absolute transition-all ease-in-out duration-500 ${
                    isHovered && isSubmenuVisible
                      ? "scale-100 opacity-100 translate-x-0"
                      : "scale-0 opacity-0 -translate-x-[10%]"
                  } delay-200 top-16 p-5 bg-white rounded-xl text-black grid grid-cols-2 gap-y-8 gap-x-4 max-w-[900px]`}
                >
                  {services.map(({ title, svg, desc, link }, i) => (
                    <li key={i}>
                      <Link
                        href={link}
                        className="group flex items-center gap-x-3"
                      >
                        {renderSVG(svg)}
                        <div>
                          <div className="w-max relative overflow-hidden">
                            <span className="transition-all ease-in-out duration-300 group-hover:text-secondary block text-sm leading-tight mb-[5px] font-semibold">
                              {title}
                            </span>
                            <span className="transition-all ease-in-out duration-300 -translate-x-full group-hover:translate-x-0 bg-primary block absolute w-full bottom-px h-[2px]"></span>
                          </div>
                          <p className="text-xs leading-normal font-medium">
                            {desc}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          }
          return (
            <li key={i}>
              <Link
                href={link}
                className="font-sans 2xl:text-base text-sm leading-tight font-medium"
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="xl:hidden block p-0 my-auto h-full ml-auto">
        <MobileNav />
      </div>
      <CTA
        text="Call Now: 346-299-2202"
        css="md:inline-flex hidden w-[220px] h-[45px] bg-transparent border border-white hover:bg-secondary hover:border-secondary hover:rounded-[5px_0_15px_5px]"
      />
    </nav>
  )
}

export default Navigation
