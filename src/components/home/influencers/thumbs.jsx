// Next
import Image from "next/image"

export const Thumbs = ({ onClick, selected, img, name, index }) => {

    return (
        <div
            className={"".concat(
                selected ? `embla-thumbs__slide--selected slide-${index}` : ""
            )}
        >
            <button
                onClick={onClick}
                type="button"
                className="w-full h-[300px] relative z-10 overflow-hidden rounded-xl"
            >
                <Image src={img} alt="Click First SMM" fill={true} sizes="100vh" className="object-cover object-center -z-10" />
                <h4 className="text-[10px] leading-none text-white border-2 rounded-md w-max px-5 py-2 absolute left-5 bottom-5 transition-all duration-300">
                    {name}
                </h4>
            </button>
        </div>
    )
}