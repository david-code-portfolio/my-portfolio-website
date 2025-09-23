import Navlink from "./components/Navlink";
import CtaBtn from "./components/CtaBtn";
import BurgerMenuBtn from "./components/BurgerMenuBtn";

import {useState} from "react";

function Navbar(){
    const [burgerMenuState, setBurgerMenuState] = useState(false)

    const toggleBurgerMenu = () => {
        setBurgerMenuState((prevState) => !prevState)
    }
    
    burgerMenuState ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    return (
        <>
            <section className="grid grid-cols-[1fr_2fr_1fr] max-lg:grid-cols-[2fr_1fr] items-center py-5 px-32 max-xl:px-16 max-sm:px-4 shadow-[0_0_16px_rgba(0,0,0,0.25)] max-w-[2400px] w-full justify-self-center fixed top-0 left-0 z-20 bg-[var(--bg-color)]">
                <h2 className="note-text uppercase text-[var(--accent-color)] font-semibold text-2xl max-md:text-xl cursor-default w-fit">
                    David Code
                </h2>
                <nav className="flex gap-32 max-xl:gap-16 max-lg:hidden justify-self-center">
                    <Navlink location='home' text='home'/>
                    <Navlink location='services' text='services'/>
                    <Navlink location='about' text='about me'/>
                </nav>
                <CtaBtn text='get in touch' style='justify-self-end max-lg:hidden'/>
                <BurgerMenuBtn onClick={toggleBurgerMenu} menuState={burgerMenuState}/>

                <div className={`my-16 grid col-span-2 gap-8 justify-items-center overflow-y-auto ${burgerMenuState ? '' : 'hidden'}`}>
                    <Navlink text="home" location="home" style="w-fit" onClick={toggleBurgerMenu}/>
                    <Navlink text="services" location="services" style="w-fit" onClick={toggleBurgerMenu}/>
                    <Navlink text="about" location="about" style="w-fit" onClick={toggleBurgerMenu}/>
                    <CtaBtn text="get in touch" style="mt-16" onClick={toggleBurgerMenu}/>
                </div>
            </section>
            <div className={`w-full h-full bg-black opacity-50 fixed z-10 top-0 ${burgerMenuState ? '' : 'hidden'}`}>

            </div>
        </>
    )
}
export default Navbar;