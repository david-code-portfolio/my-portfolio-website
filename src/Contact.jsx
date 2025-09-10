import Gmail_Icon from "./assets/Icons/Gmail_Icon.png";
import LinkedIn_Icon from "./assets/Icons/LinkedIn_Icon.png";
import UpWorkIcon from "./assets/Svgs/upwork_svg.svg?react";
import CtaBtn from "./components/CtaBtn";
import Contact_Img from "./assets/Images/Contact_img.png";

function Contact(){
    return(
        <section id="contact" className="grid grid-cols-[max-content_1fr] max-lg:grid-cols-1 px-32 mt-64 max-sm:mt-32 w-full max-w-[2400px] justify-self-center relative max-xl:px-16 max-lg:gap-16 max-sm:px-8">
            <div className="w-[650px] max-lg:w-full">
                <h2 className="uppercase font-bold text-5xl max-sm:text-2xl">
                    Ready to Get Started? <br />
                    Contact me now.
                </h2>
                <p className="mt-16 text-xl max-sm:text-[1rem]">
                    Whether you need a landing page, a business website, or a custom solution — I’d love to help. 
                    Send me a message and let’s make it happen!
                </p>
                <div className="grid gap-4 mt-16 text-xl">
                    <a href="mailto:ksendzulak.biz@gmail.com" className="flex gap-2 w-fit items-center">
                        <img src={Gmail_Icon} alt="Gmail Icon" className="w-6 h-6"/>
                        <p className="contactText max-sm:text-[1rem]">ksendzulak.biz@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/david-ksendzulak-869335356/" className="flex gap-2 w-fit items-center">
                        <img src={LinkedIn_Icon} alt="LinkedIn Icon" className="w-6 h-6"/>
                        <p className="contactText max-sm:text-[1rem]">@david_linkedin</p>
                    </a>
                </div>
                <div className="mt-16 flex-col flex gap-2 max-sm:hidden">
                    <p className="italic max-sm:text-center">*In case you’d prefer an extra security</p>
                    <CtaBtn text="Hire Me on UpWork" svg={<UpWorkIcon className="relative top-0.25"/>} style="flex gap-2 items-center justify-center"></CtaBtn>
                </div>
            </div>
            <img src={Contact_Img} alt="Contact Illustration" 
                className="absolute -z-10 top-8 right-32 w-[1050px] max-[1920px]:w-[50vw] max-2xl:w-[640px] max-2xl:top-48 max-xl:right-16 max-lg:relative max-lg:right-0 max-lg:top-0 max-lg:justify-self-center max-lg:w-full"/>
            <div className="flex-col flex gap-2 min-sm:hidden">
                <p className="italic max-sm:text-center text-xs">*In case you’d prefer an extra security</p>
                <CtaBtn text="Hire Me on UpWork" svg={<UpWorkIcon className="relative top-0.25"/>} style="flex gap-2 items-center justify-center"></CtaBtn>
            </div>
        </section>
    )
}
export default Contact