import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="hero-name">Hi, I am John,<br />
                Creative Technologist</h1>
              <p className="hero-pera">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="hero-btn">Download Resume</button>
            </div>
            
            <div>
              <div>
                <img src="/person.png" width={200} height={200} alt="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent">
      <div className="text-container">
        <div className="main1">
        <div className="heading">
          <h3>Recent Post</h3>
          <button className="view">View all</button>
        </div>
        <div className="card-parent">
          <div className="hea">
           <h2>Making a design system from scratch</h2>
           <p className="date">12 Feb 2020&nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern</p>
           <p className="para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
           <br /> nostrud amet.</p>
          </div>
          <div className="hea">
            <h2>Making a design system from scratch</h2>
           <p className="date">12 Feb 2020&nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern</p>
           <p className="para">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
           <br /> nostrud amet.</p>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div className="feature">
      <div className="text-container">
        <div className="working">
        <div className="head">
          <h3>Featured works</h3>
        </div>
        <div className="child1">
        <div className="pic1"><Image src="/first.png" alt="first-pic" height={180} width={246}></Image></div>
          <div className="texting">
          <h1>Designing Dashboards</h1>
          <button className="button">2020 </button><p className="para1">Dashboard</p>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>

        <div className="child2">
        <div className="pic1"><Image src="/second.png" alt="first-pic" height={180} width={246}></Image></div>
          <div className="texting">
          <h1>Designing Dashboards</h1>
          <button className="button">2020 </button><p className="para1">Dashboard</p>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>

        <div className="child3">
        <div className="pic1"><Image src="/third.png" alt="first-pic" height={180} width={246}></Image></div>
          <div className="texting">
          <h1>Designing Dashboards</h1>
          <button className="button">2020 </button><p className="para1">Dashboard</p>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}