function CtaBtn({text, style, svg}){
    return(
        <button className={`${style} btn capitalize font-bold w-fit rounded-lg py-4 px-8 duration-200 hover:opacity-75 cursor-pointer max-sm:w-full`}>
            {svg}{text}
        </button>
    )
}
export default CtaBtn;