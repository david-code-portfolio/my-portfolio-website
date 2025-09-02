import Navlink from "./components/Navlink";
import CtaBtn from "./components/CtaBtn";

function Navbar(){
    return (
        <section className="grid grid-cols-3">
            <h2 className="note-text uppercase text-[var(--accent-color)] font-semibold text-2xl cursor-default self-start">
                David Code
            </h2>
            <nav className="flex gap-32 justify-self-center">
                <Navlink location='home' text='home'/>
                <Navlink location='services' text='services'/>
                <Navlink location='about' text='about me'/>
            </nav>
            <CtaBtn text='get in touch'/>
        </section>
    )
}
export default Navbar;