import Button from 'react-bootstrap/Button';
import './styles.module.css';
import styles from './styles.module.css';
import modalType from '../../interface/modalType';
import Link from 'next/link';

const PresentationText = ({ modalChangers }: modalType) => {
    return (
        <div className={styles.container}>
            <div className={styles.reduce__area}>
                <h2 className={styles.title}>Hoje você sabe como transmitir autoridade através do seu discurso em inglês?</h2>
                <p className={styles.paragraph}>É exatamente isso que você vai aprender no <b>Vulpes Business Class</b>, uma Masterclass 100% online e gratuita para você aprender na prática <b>um Inglês voltado totalmente para negócios.</b></p>
                <p className={styles.paragraph}>Além de ter a oportunidade de aprimorar o seu <b>Business English</b> na prática você vai estabelecer contatos valiosos para a sua carreira.</p>
                <p className={styles.paragraph}>Inglês no currículo não é mais um diferencial. Inglês de verdade é. A comunicação eficaz, com confiança, sempre vai ser. Simples assim.</p>
                <div className={styles.centralize__button}>
                    <Button className={styles.button}>
                        <div className={styles.legend__button}>
                            <Link href="https://sun.eduzz.com/1897833" target='_blank' rel="noopener noreferrer" className={styles.remove__style}>
                                <b>ACESSAR O BUSINESS CLUB</b>
                            </Link>
                        </div>
                    </Button>
                    {/* <Button href='#header' onClick={() => setTimeout(() => modalChangers(true), 500)} className={styles.button}><b>PRECISO APRIMORAR MEU<br />BUSINESS ENGLISH</b></Button> */}
                </div>
            </div>
        </div>
    );
};

export default PresentationText;
