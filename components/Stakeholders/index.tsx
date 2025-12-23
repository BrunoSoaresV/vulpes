import modalType from '../../interface/modalType';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const Stakeholders = ({ modalChangers }: modalType) => {
    return (
        <div className={styles.container}>
            <div className={styles.cards__group}>
                <div className={styles.card__stakeholder__yes}>
                    <div className={styles.card__title__yes}>PARA QUEM É:</div>
                    <p className={styles.card}>Para você que não se contenta com um desempenho de “economy class”.</p>
                    <div className={styles.break__line}></div>
                    <p className={styles.card}>Para profissionais comprometidos e ambiciosos, que sabem que o inglês é uma alavanca na sua carreira.</p>
                    <div className={styles.break__line}></div>
                    <p className={styles.card}>Para você que está no ramo de negócios, engenharia, indústria, corporativo, empreendedorismo, tecnologia e direito.</p>
                </div>
                <div className={styles.card__stakeholder__no}>
                    <div className={styles.card__title__no}>PARA QUEM NÃO É:</div>
                    <p className={styles.card}>Não é para quem ainda acredita que saber inglês é conhecer as regras de gramática.</p>
                    <div className={styles.break__line}></div>
                    <p className={styles.card}>Não é para quem se contenta em colocar “inglês fluente” no currículo e torcer para ter sorte</p>
                    <div className={styles.break__line}></div>
                    <p className={styles.card}>Não é para quem encara o inglês como um obstáculo e está disposto a abrir mão de grandes avanços e oportunidades que só conseguiria com um inglês bem trabalhado.</p>
                </div>
            </div>

            <Button className={styles.button}>
                <div className={styles.legend__button}>
                    <Link href="https://sun.eduzz.com/1897833" target='_blank' rel="noopener noreferrer" className={styles.remove__style}>
                        <b>ACESSAR O BUSINESS CLUB</b>
                    </Link>
                </div>
            </Button>
            {/* <Button href='#header' onClick={() => setTimeout(() => modalChangers(true), 500)} className={styles.button}><b>PRECISO DO VULPES BUSINESS CLASS</b></Button> */}
        </div>
    );
};

export default Stakeholders;