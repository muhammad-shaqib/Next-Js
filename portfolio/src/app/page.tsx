import "../Style/Style.css"

export default function Home() {
  return (
      <div className="hero-parent">
      <div className="hero">
        
        <div className="hero-text">
             <h1><span className="hi">Welcome!, </span>I am<span className="hero-name"> Muhammad Shaqib </span></h1>
          <h2>FrontEnd Developer</h2>
          <br />
          <div id="para">
             <p>I'm a passionate front-end developer skilled in HTML & CSS, TypeScript, Next.js, and Figma. My journey in tech has been fueled by a desire to combine creativity with functionality, and I've found my strengths in building visually engaging, efficient web applications. As I continue honing my skills, I’m working toward my ultimate goal of becoming a Generative AI Engineer. With each project, I'm inspired by the potential of AI to transform the digital landscape, and I'm excited to create solutions that are as innovative as they are impactful.
             </p>
          </div>
         </div>

          <div className="hero-image">
            <img src="hero-image.png" alt="hero-image"  width={300} height={350} />
          </div>
        
          
      </div>
      </div>
    );
}