import '../css/contactStyle.css';

export default function Contact() {
    function handleSubmit() {
      alert("Your email has been sent");
    }

    return ( 
      <div class="contact-container" id="contact">
        <div class="title">
            <span>Get in Touch</span>
            <h2>Contact</h2>
        </div>
        <div class="box">
        <div class="columnOne">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            src="https://www.google.com/maps/embed/v1/place?q=Richmond+hill&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div style={{zIndex: 99, position: 'absolute'}} class="infoBox">
            <div class="add">
              <p style={{textTransform: "uppercase", marginBottom: '5px'}}><strong>Location</strong></p>
              <p>
                I am located in the<br></br>
                Richmond Hill Area<br></br>
                <br></br>
              </p>
            </div>
            <div class="email">
              <p style={{textTransform: "uppercase", marginBottom: '5px'}}><strong>Email</strong></p>
              <a href="mailto:ggruenspan@outlook.com">ggruenspan@outlook.com</a>
            </div>
            <div class="phone">
              <p style={{textTransform: "uppercase", marginBottom: '5px'}}><strong>phone</strong></p>
              <p>647 - 323 - 4373</p>
            </div>
          </div>
        </div>
        <div class="columnTwo">
          <h2>Hire Me</h2>
          <p>
            If you like what you see, feel free to send me an email.<br></br>
            I will respond as quickly as possible
          </p>
          <br></br>

          <form action="https://submit-form.com/bvhlT0BQ" onSubmit={handleSubmit}>
            <label for="name">Name</label><br></br>
            <input type="text" id="name" name="name" placeholder="Name" required/><br></br>
            <label for="email">Email</label><br></br>
            <input type="email" id="email" name="email" placeholder="Email" required/><br></br>
            <label for="message">Message</label><br></br>
            <textarea id="message" name="message"placeholder="Message" required></textarea><br></br>
            <input type="hidden" name="_redirect" value="https://ggruenspan-portfolio.netlify.app"/>
            <input type="hidden" name="_append" value="false" />
            <input type="submit" value="Send Message"></input>
            <input type="reset" value="Clear"/>
          </form>
        </div>
      </div>
    </div>
  );
}