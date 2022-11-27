import { ParticlesComponent } from "../Particles/particles.components";
import "./home.styles.scss";
export const Home = () => {
  return (
    <>
      <section id="home" className="home-hero">
        <ParticlesComponent />
        <div className="home-hero__content">
          <h1 className="heading-primary">Im' Bruno Cordeiro</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              A Fullstack developer focused on Java applications using Spring Boot
              and Spring Cloud for microservices
            </p>
          </div>
          <div className="home-hero__cta">
            <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded">
              <a href="https://www.linkedin.com/in/bruno-cordeiro-mendes/">
                LINKEDIN
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
