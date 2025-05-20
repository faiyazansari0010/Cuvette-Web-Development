import Header from "./Portfolio_App_Components/Header/Header"
import Home from "./Portfolio_App_Components/Home/Home"
import About from "./Portfolio_App_Components/About/About"
import Contact from "./Portfolio_App_Components/Contact/Contact"

function Portfolio() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'C++'
  ];
  return (
    <>
      <Header />
      <Home />
      <About skills={skills} />
      <Contact />
    </>
  );
}

export default Portfolio;