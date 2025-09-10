import About_Img from "./assets/Images/About_img.png"

function About(){
    return(
        <section className="grid grid-cols-[1fr_max-content] max-xl:flex max-xl:flex-col-reverse px-32 max-xl:px-16 max-sm:px-4 mt-64 max-sm:mt-32 w-full max-w-[2400px] justify-self-center gap-8 max-xl:gap-16">
            <img src={About_Img} alt="About Me Illustration" className="relative -top-8 max-xl:top-0 max-xl:w-2/3 max-lg:w-full self-center"/>
            <div className="w-[40vw] max-w-[1080px] max-[1920px]:w-[720px] max-2xl:w-[480px] max-xl:w-full">
                <h2 className="uppercase font-bold text-5xl max-sm:text-2xl w-fit">
                    About Me
                </h2>
                <div className="text-xl mt-16 grid gap-4 max-sm:text-[1rem]">
                    <p>
                        Hi, I’m David — a 20-year-old web developer from Slovakia.
                    </p>
                    <p>
                        My journey started back in 2018 when I discovered YouTube. 
                        I wanted to become a content creator, which led me into video editing and social media. 
                        After years of creating content, I uncovered a new passion: coding.           
                    </p>
                    <p>
                        In 2023, I wrote my very first lines of HTML. Since then, 
                        I’ve gone from simple HTML and CSS to building complete websites with JavaScript, 
                        React.js, and Tailwind CSS.
                    </p>
                    <p>
                        This is only the beginning — I’m learning and improving every day, 
                        and I’m excited to use my skills to help others succeed online.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About;