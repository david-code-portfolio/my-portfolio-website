function CtaBtn({text, style, svg, onClick, href}){
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

    if (href){
        return(
            <a href={href}
                target="_blank" 
                rel="noopener noreferrer"
                className={`${style} btn capitalize font-bold w-fit rounded-lg py-4 px-8 duration-200 hover:opacity-75 cursor-pointer max-sm:w-full flex gap-2 items-center justify-center`}>
                {svg}{text}
            </a>
        )
    }
    else{
        return(
            <button onClick={handleClick}
                className={`${style} btn capitalize font-bold w-fit rounded-lg py-4 px-8 duration-200 hover:opacity-75 cursor-pointer max-sm:w-full`}>
                {svg}{text}
            </button>
        )
    } 
}
export default CtaBtn;