import Navlink from "./components/Navlink";
import CtaBtn from "./components/CtaBtn";
import HamburgerMenu from "./components/HamburgerMenu";

function Navbar(){
    return (
        <section className="grid grid-cols-[1fr_2fr_1fr] max-lg:grid-cols-[2fr_1fr] items-center py-5 px-32 max-xl:px-16 max-sm:px-4 shadow-[0_0_16px_rgba(0,0,0,0.25)] max-w-[2400px] m-auto sticky">
            <h2 className="note-text uppercase text-[var(--accent-color)] font-semibold text-2xl max-md:text-xl cursor-default w-fit">
                David Code
            </h2>
            <nav className="flex gap-32 max-xl:gap-16 max-lg:hidden justify-self-center">
                <Navlink location='home' text='home'/>
                <Navlink location='services' text='services'/>
                <Navlink location='about' text='about me'/>
            </nav>
            <CtaBtn text='get in touch' style='justify-self-end max-lg:hidden'/>
            <HamburgerMenu />
        </section>
    )
}
export default Navbar;