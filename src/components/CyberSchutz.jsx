import { atom } from '../assets';
import styles, {layout} from '../style';
import Button from './Button'; 


const CyberSchutz = () => {
  const scrollToCTASection = () => {
    const ctaSection = document.getElementById('cta-section'); // Get the CTA section
    ctaSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the CTA section smoothly
  };

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={atom} alt="electro" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Virtuelle Konsultation</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Unsere virtuellen Konsultationen ermöglichen Ihnen einen schnellen, sicheren und ortsunabhängigen Zugang zu medizinischer Versorgung. Über Video- oder Chat-Sprechstunden können Sie qualifizierte Ärztinnen und Ärzte bequem von zu Hause oder unterwegs kontaktieren.
            <br />
            Die virtuelle Konsultation eignet sich für Erstabklärungen, Verlaufskontrollen, Zweitmeinungen sowie für die Besprechung von Befunden. Alle Interaktionen erfolgen verschlüsselt, datenschutzkonform und gemäß medizinischer Leitlinien, sodass Ihre sensiblen Gesundheitsdaten jederzeit geschützt sind.
        </p>
        <Button styles="mt-10" onClick={scrollToCTASection} />
      </div>
    </section>
  )
}

export default CyberSchutz
