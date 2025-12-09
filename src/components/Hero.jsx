import '../styles/hero.css';
import graduation from '../assets/graduation.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <img src={graduation} alt="Graduation" className="hero-image" />
    </section>
  );
};

export default Hero;
