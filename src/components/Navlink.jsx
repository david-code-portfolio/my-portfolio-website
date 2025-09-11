function Navlink({location, text, style}){
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section){
            const yOffset = location == 'about' ? -256 : -128
            const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({top: yPosition, behavior: 'smooth'})
        }
    }
    return(
        <button onClick={() => scrollToSection(location)}
            className={`${style} capitalize font-semibold text-xl h-fit duration-200 hover:text-[var(--accent-color)] cursor-pointer`}>
            {text}
        </button>
    )
}
export default Navlink;