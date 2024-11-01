import Footer from "@/components/Footer";
import "../../Style/Style.css";

export default function Contact() {
  return (
    <section className="contact">
                  <h2>Contact Me</h2>
          <div className="contact-form">
              
                   <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" required />
                 </div>
              
                 <div className="form-group">
                     <label htmlFor="password">Password:</label>
                     <input type="password" id="password" name="password" required />
                 </div>
              
                 <div className="form-group">
                     <label htmlFor="feedback">Message:</label>
                     <textarea id="feedback" name="feedback" rows={4} required></textarea>
                 </div>
              
                 <button type="submit" className="submit-button">
                       Send Message
                 </button>
         </div>
                 <Footer />
 </section>
  );
}
