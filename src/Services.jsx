import ServiceItem from "./components/ServiceItem";
import CtaBtn from "./components/CtaBtn";

function Services(){
    return(
        <section className="px-32 mt-64 grid w-full max-w-[2400px] justify-self-center max-xl:px-16 max-sm:px-4">
            <h2 className="uppercase font-bold text-5xl max-sm:text-2xl">
                {"Web solutions </>"}
            </h2>
            <div className="my-16 grid grid-cols-[1fr_1fr_1fr] gap-[31px] max-xl:grid-cols-[1fr_1fr] max-lg:grid-cols-1">
                <ServiceItem 
                    description={"Single-page websites perfect for showcasing a product, service, or event — designed to convert visitors into customers."}
                    title={"Landing Pages"}
                    number={"01"}
                />
                <ServiceItem 
                    description={"Simple but professional multi-page websites for small businesses, startups, or personal brands — fast and affordable launch."}
                    title={"Business Sites (MVP)"}
                    number={"02"}
                />
                <ServiceItem 
                    description={"Modernize your outdated website with a fresh, responsive design that works on all devices."}
                    title={"Website Redesign"}
                    number={"03"}
                />
                <ServiceItem 
                    description={"Have a Figma, XD, or Photoshop design? I’ll turn it into a pixel-perfect, responsive website."}
                    title={"Design to Code"}
                    number={"04"}
                />
                <ServiceItem 
                    description={"Fix layout issues, broken elements, or performance problems to make your site run smoothly."}
                    title={"Fixes & Improvements"}
                    number={"05"}
                />
                <ServiceItem 
                    description={"Have a unique idea or special requirement? I can tailor a solution just for your project."}
                    title={"Custom Service"}
                    number={"06"}
                />
            </div>
            <CtaBtn text={"Start Your Project"} style={"justify-self-center"}/>
        </section>
    )
}
export default Services;