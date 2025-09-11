function Navlink({location, text, style, onClick}){
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section){
            const yOffset = location == 'about' ? -256 : -128
            const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({top: yPosition, behavior: 'smooth'})
        }
    }
    const handleClick = () => {
        scrollToSection(location)
        if(onClick){
            onClick()
        }
    }

    return(
        <button onClick={handleClick}
            className={`${style} capitalize font-semibold text-xl h-fit duration-200 hover:text-[var(--accent-color)] cursor-pointer`}>
            {text}
        </button>
    )
}
export default Navlink;