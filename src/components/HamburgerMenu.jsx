function HamburgerMenu(){
    return(
        <div className="flex flex-col gap-1 justify-self-end cursor-pointer hover:opacity-75 duration-200 lg:hidden">
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
        </div>
    )
}
export default HamburgerMenu