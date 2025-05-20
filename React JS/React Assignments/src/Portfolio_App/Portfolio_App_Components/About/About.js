import "./About.css"

function About(props) {
  return (
    <>
      <section id="about" className="about-section">

        <p className="about-text">
          Hi, I'm Faiyaz! I'm a passionate web developer with a strong background
          in front-end technologies. I love crafting beautiful and functional
          websites using HTML, CSS, JavaScript, and modern frameworks.
        </p>

        <div className="skills-grid">{
          props.skills.map((skill) => (
            <div className="skill-box">{skill}</div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About;