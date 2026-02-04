import { medtech2 } from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const Schulung = () => {
  const scrollToCTASection = () => {
    const ctaSection = document.getElementById('cta-section'); // Get the CTA section
    ctaSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the CTA section smoothly
  };

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={medtech2} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Digitale Diagnose</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Unsere digitale Diagnoselösung unterstützt die medizinische Einschätzung durch eine strukturierte Erfassung von Symptomen, Vorerkrankungen und relevanten Gesundheitsdaten. Intelligente Fragebögen und regelbasierte Analysen helfen dabei, medizinische Informationen systematisch aufzubereiten.
            <br />
            Dies ermöglicht eine schnellere und fundiertere ärztliche Bewertung, reduziert unnötige Wartezeiten und unterstützt eine zielgerichtete Weiterleitung an die passende medizinische Fachdisziplin. Die finale Diagnose und Therapieentscheidung bleibt dabei stets in ärztlicher Verantwortung.
            <br />
        </p>
        <Button styles="mt-10" onClick={scrollToCTASection} />
      </div>
    </section>
  )
}

export default Schulung