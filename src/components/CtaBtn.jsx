function CtaBtn({text, style}){
    return(
        <a href="#" className={`${style} btn capitalize font-bold w-fit rounded-lg py-4 px-8 duration-200 hover:opacity-75`}>
            {text}
        </a>
    )
}
export default CtaBtn;