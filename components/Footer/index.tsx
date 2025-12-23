import styles from './styles.module.css';
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

    return (
        <div className={styles.container}>
            <div><Link href="https://www.instagram.com/vulpesidiomas/" target='_blank' rel="noopener noreferrer" className={styles.remove__style}><FaInstagram className={styles.icon} /></Link></div>
            <div className={styles.text}>Vulpes Idiomas · CNPJ 37.280.016/0001-05 · © {new Date().getFullYear()}</div>
            <div><Link href="/politica-privacidade" target='_blank' rel="noopener noreferrer" className={styles.remove__style}>Politica de Privacidade</Link></div>
        </div>
    );
};

export default Footer;
