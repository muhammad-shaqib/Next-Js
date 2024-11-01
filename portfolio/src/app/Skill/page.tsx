import "../../Style/Style.css";

export default function Skill() {
  return (
    <section className="skills">

             <h2>My Skills</h2>

             <div className="parant-container1">

                <div className="container1">

                   <div className="skills-grid1">

                       <div className="skill-item1">
                            <p>HTML</p>
                             <div className="progress-bar1" data-percent="90%">
                                  <span></span>
                            </div>
                       </div>

                       <div className="skill-item2">
                             <p>CSS</p>
                             <div className="progress-bar2" data-percent="80%">
                                  <span></span>
                            </div>
                       </div>
                   </div>
             </div>

             <div className="container2">

                   <div className="skill-gride2">

                       <div className="skill-item3">
                               <p>TypeScript</p>
                             <div className="progress-bar3" data-percent="60%">
                                <span></span>
                             </div>
                       </div>

                     <div className="skill-item4">
                             <p>Next Js</p>
                           <div className="progress-bar4" data-percent="40%">
                              <span></span>
                           </div>
                     </div>
                   </div>
               </div>
             </div>
    </section>
  );
}
