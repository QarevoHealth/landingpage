import { medrays } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const PhySchutz = () => {
  const scrollToCTASection = () => {
    const ctaSection = document.getElementById('cta-section'); // Get the CTA section
    ctaSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the CTA section smoothly
  };

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
            KI-gestützte Healthcare
        </h2>
        <p className={`${styles.paragraph} max-w-[460px] mt-5`}>
            Unsere KI-gestützten Healthcare-Lösungen nutzen moderne Algorithmen, um medizinische Daten effizient auszuwerten und klinische Prozesse sinnvoll zu unterstützen. Die Künstliche Intelligenz hilft bei der Mustererkennung, Priorisierung von Fällen und der Identifikation relevanter medizinischer Zusammenhänge.
            <br />
            Dabei steht die KI nicht als Ersatz, sondern als intelligente Unterstützung für medizinisches Fachpersonal im Fokus. Unsere Systeme werden verantwortungsvoll entwickelt, kontinuierlich überwacht und erfüllen höchste Anforderungen an Datenschutz, Transparenz und medizinische Ethik.
            <br />
        </p>
        <Button styles="mt-10" onClick={scrollToCTASection}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={medrays} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default PhySchutz
