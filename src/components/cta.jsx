export default function CTA({
    href = "javascript:;",
    text = "Get a Free Quote",
    theme = "primary",
    size = "medium",
    css = " "
}) {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<a href=${href} class='${theme === "primary" ? 'bg-primary' : null} ${theme === "transparent" ? 'border' : null} ${theme === "secondary" ? 'bg-secondary' : null} ${size === "medium" ? 'px-5' : null} ${size === "large" ? 'px-7' : null}  ${size === "medium" ? 'h-[40px]' : null} ${size === "large" ? 'h-[45px]' : null} inline-flex justify-center items-center ${size === "medium" ? 'text-[14px]' : null} ${size === "large" ? 'text-[16px]' : null} font-medium text-white rounded-md transition-all duration-300 ${css}'>${text}</a>` }} />
    )
}