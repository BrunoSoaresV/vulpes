import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';
import sparkles from '../../../public/LANDPAGE/sparkles.png';
import { VscVerifiedFilled } from "react-icons/vsc";

const ManifestSession = () => {

  return (
    <div className={styles.container}>
      

      {/* <div className={styles.main__box}>
        <div className={styles.know__more__session}>
          <div className={styles.insignia__image}>
            <Image
              src={insignea}
              alt="insignia of a fox to exalt commitment in the service of vulpes"
              width={338}
              height={338}
            />
          </div>
          <span className={styles.know__more}>Selo <span className={styles.text__blue}>Vulpes</span> de Garantia</span>
        </div>
      </div> */}
      <div className={styles.paragr__place}>
        <span className={styles.title__manifest}><VscVerifiedFilled className={styles.text__blue}/> Manifesto Vulpes</span>
        <p className={styles.paragr}>“Conhecer a gramática” não basta para se comunicar em um idioma de forma eficiente. O que abre as portas para as melhores oportunidades do mundo é uma comunicação que <span className={styles.text__blue}>funciona</span>. Por isso, nossas aulas são comunicativas e totalmente personalizadas para atender às suas necessidades e objetivos.</p>
        <p className={styles.paragr}>Na Vulpes, nós garantimos que é possível aprender a se comunicar com confiança e fluência, dentro da sua disponibilidade. Esqueça aulas genéricas que só consomem seu tempo e dinheiro. Você precisa de um inglês que funcione para a <span className={styles.text__blue}>sua vida</span>.</p>
        <p className={styles.paragr}>Com nossa metodologia online exclusiva, você aprende no seu ritmo, em um ambiente seguro e com conversação autêntica, em aulas que são feitas para você. Na Vulpes, transformamos o seu tempo em sucesso.</p>
      </div>
      <div className={styles.sparkles__image}>
          <Image
            src={sparkles}
            alt="shape of 3 sparkles"
            width={99}
            height={196}
          />
        </div>
    </div>
  );
};

export default ManifestSession;
