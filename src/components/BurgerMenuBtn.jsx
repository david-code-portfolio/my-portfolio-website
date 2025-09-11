function BurgerMenuBtn({onClick}){
    return(
        <button onClick={onClick} className="flex flex-col gap-1 justify-self-end cursor-pointer hover:opacity-75 duration-200 lg:hidden">
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
        </button>
    )
}
export default BurgerMenuBtn