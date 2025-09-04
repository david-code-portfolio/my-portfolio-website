function Navlink({location, text}){
    return(
        <a className="capitalize font-semibold text-xl h-fit duration-200 hover:text-[var(--accent-color)]"
            href={`#${location}`}>
            {text}
        </a>
    )
}
export default Navlink;