import "../../Style/Style.css"

export default function Herot() {
    return (
        <div className="About">
            <div className="About-image">
                <img src="/hero-image.png" alt="About" width={300} height={350} />

            </div>

            <div className="About-me">
                <h1 className="About-h1"> <b>About Me</b></h1>
                
                <p className="About-p">This is Muhammad Shaqib an Electrical Engineering student with a solid academic foundation, having achieved Matric in 2017 with an A1 grade from Takbeer Model School and FSC in 2019 with an A1 grade from Government Higher Secondary School Sama Badaber HSD Peshawar. Skilled in HTML & CSS, TypeScript, Next.js, and Figma, I enjoy creating visually engaging and efficient web applications. My engineering studies have equipped me with a strong problem-solving mindset, which I’m eager to bring into my journey toward becoming a Generative AI Engineer. I’m passionate about developing AI-powered solutions that push the boundaries of digital innovation.
                </p>
            </div>
        </div>
    )
}