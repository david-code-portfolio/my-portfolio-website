function CtaBtn({text, style}){
    return(
        <button className={`${style} btn capitalize font-bold w-fit rounded-lg py-4 px-8 duration-200 hover:opacity-75 cursor-pointer max-sm:w-full`}>
            {text}
        </button>
    )
}
export default CtaBtn;