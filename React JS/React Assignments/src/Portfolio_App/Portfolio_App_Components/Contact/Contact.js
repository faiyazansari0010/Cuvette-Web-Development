import "./Contact.css"

function Contact() {
  return (
    <>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>

        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your@example.com" required />
        </div>

        <div>
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </>
  )
}

export default Contact;