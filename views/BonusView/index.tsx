import './styles.module.css';
import styles from './styles.module.css';
import BonusSession from '../../components/Bonus';
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const BonusView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.float__card}>
        <div className={styles.slider__card}>
          <span className={styles.box__card__small}>MATERIAL DE APOIO PERSONALIZADO</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
          <span className={styles.box__card}>ARTIGOS QUALIFICADOS EM INGLÊS PARA DAR UM PASSO ALÉM E SE APROFUNDAR NO TEMA</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
          <span className={styles.box__card}>VOCABULÁRIO LEGÍTIMO, USUAL E ESPECÍFICO SOBRE O TEMA, PARA ENRIQUECER O DIÁLOGO, COM DEFINIÇÕES E EXEMPLOS</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
          <span className={styles.box__card}>VÍDEOS E ÁUDIOS DE EXPERTS SOBRE O TEMA DA DISCUSSÃO</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
          <span className={styles.box__card}>PROPOSTAS DE ESCRITA PARA APRIMORAR SUA RETÓRICA</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />

          <span className={styles.box__card__small}>MATERIAL DE APOIO PERSONALIZADO</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
          <span className={styles.box__card}>ARTIGOS QUALIFICADOS EM INGLÊS PARA DAR UM PASSO ALÉM E SE APROFUNDAR NO TEMA</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
          <span className={styles.box__card}>VOCABULÁRIO LEGÍTIMO, USUAL E ESPECÍFICO SOBRE O TEMA, PARA ENRIQUECER O DIÁLOGO, COM DEFINIÇÕES E EXEMPLOS</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
          <span className={styles.box__card}>VÍDEOS E ÁUDIOS DE EXPERTS SOBRE O TEMA DA DISCUSSÃO</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
          <span className={styles.box__card}>PROPOSTAS DE ESCRITA PARA APRIMORAR SUA RETÓRICA</span>
          <TbRosetteDiscountCheckFilled className={styles.box__icon} />
        </div>
      </div>
      <BonusSession />
    </div >
  );
};

export default BonusView;
