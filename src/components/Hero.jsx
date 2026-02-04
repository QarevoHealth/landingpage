import styles from '../style';
import { discount, thumbnail } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Rabatt für Neubestellungen {" "}
            <span className="text-white">1 Mal</span> Pro Monat           
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Der ultimative <br className="sm:block hidden" /> {" "} 
            <span className="text-gradient">Health Care Provider</span> {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> 
        </div> 
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Deutschland und Europa.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Wir bieten telemedizinische Sprechstunden, digitale Anamneseprozesse sowie eine fundierte medizinische Analyse und Diagnostik. Unser ärztliches Team steht Ihnen rund um die Uhr im Berliner Raum zur Verfügung. Terminierung und technische Betreuung werden zentral durch unsere IT- und Serviceeinheit koordiniert – deutschlandweit und bei Bedarf auch europaweit.        </p>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <div className="relative w-full max-w-[620px] flex justify-center">
          <img
              src={thumbnail}
              alt="billing"
              className="w-full object-contain relative z-[9]"
          />

          {/* gradients */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-1/2 -translate-x-1/2 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-32 left-1/2 -translate-x-1/2" />
          <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 left-1/2 -translate-x-1/2 blue__gradient" />
        </div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>    
    </ section>
  );
};

export default Hero;