function CtaBtn({text, style, svg, onClick}){
    const scrollToContact = (id) => {
        const section = document.getElementById(id);
        if(section){
            const yOffset = -128
            const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({top: yPosition, behavior: 'smooth'})
        }
    }
    const handleClick = () => {
        scrollToContact('contact')
        if(onClick){
            onClick()
        }
    }
    return(
        <button onClick={handleClick}
            className={`${style} btn capitalize font-bold w-fit rounded-lg py-4 px-8 duration-200 hover:opacity-75 cursor-pointer max-sm:w-full`}>
            {svg}{text}
        </button>
    )
}
export default CtaBtn;