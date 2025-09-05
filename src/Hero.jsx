import CtaBtn from "./components/CtaBtn";
import Hero_img from './assets/Images/Hero_img.png'
import ReactIcon from './assets/Svgs/react_svg.svg?react'
import TailwindIcon from './assets/Svgs/tailwind_svg.svg?react'
import JavaScriptIcon from './assets/Svgs/javascript_svg.svg?react'
import FigmaIcon from './assets/Svgs/figma_svg.svg?react'
import PhpIcon from './assets/Svgs/php_svg.svg?react'

function Hero(){
    return(
        <section id="home" className="grid grid-cols-[2fr_1fr] max-2xl:grid-cols-2 max-lg:grid-cols-1 px-32 max-xl:px-16 max-sm:px-4 pt-64 max-sm:pt-48 max-w-[2400px] w-full justify-self-center">
            <div className="max-lg:grid max-xl:grid-cols-1">
                <h1 className="uppercase font-bold text-[4rem]/[125%] max-2xl:text-[3rem] max-sm:text-[2rem] max-lg:text-center">
                    Modern websites that grow your business.
                </h1>
                <h3 className="text-[2rem]/[125%] font-medium mt-4 max-2xl:text-[1.5rem] max-lg:text-center">
                    Straightforward front-end to online success.
                </h3>
                <CtaBtn text='Let’s Work Together' style='mt-16 justify-self-center'/>
                <img src={Hero_img} alt="Hero Image" className="min-lg:hidden justify-self-center mt-16"/>
                <div className="flex mt-32 max-sm:mt-16 gap-16 max-lg:justify-center max-lg:flex-wrap max-sm:grid">
                    {/* React SVG */}
                    <div className="flex flex-col cursor-default">
                        <ReactIcon className="self-center"/>
                        <p className="note-text text-xl font-medium text-center">React.js</p>
                    </div>
                    {/* TailwindCSS SVG */}
                    <div className="flex flex-col cursor-default">
                        <TailwindIcon className="self-center"/>
                        <p className="note-text text-xl font-medium text-center">TailwindCSS</p>
                    </div>
                    {/* JavaScript SVG */}
                    <div className="flex flex-col self-end cursor-default">
                        <JavaScriptIcon className="self-center"/>
                        <p className="note-text text-xl font-medium mt-2 text-center">JavaScript</p>
                    </div>
                    {/* Figma SVG */}
                    <div className="flex flex-col self-end cursor-default">
                        <FigmaIcon className="self-center"/>
                        <p className="note-text text-xl font-medium mt-1 text-center">Figma</p>
                    </div>
                    {/* PHP SVG */}
                    <div className="flex flex-col self-end cursor-default">
                        <PhpIcon className="self-center"/>
                        <p className="note-text text-xl font-medium text-center">PHP</p>
                    </div>
                </div>
            </div>
            <img src={Hero_img} alt="Hero image" 
                className="max-lg:hidden justify-self-end -translate-y-24 -z-10 absolute w-[710px] h-[710px] max-[1800px]:w-[500px] max-[1800px]:h-[500px] max-[1800px]:-translate-0"/>
        </section>
    )
}
export default Hero;