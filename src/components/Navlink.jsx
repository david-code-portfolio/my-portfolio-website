function Navlink({location, text}){
    return(
        <a className="capitalize font-semibold text-xl"
            href={`#${location}`}>
            {text}
        </a>
    )
}
export default Navlink;