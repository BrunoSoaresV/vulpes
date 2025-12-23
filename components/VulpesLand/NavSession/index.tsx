import { useState } from 'react';
import './styles.module.css';
import styles from './styles.module.css';
import SvgComponent from '../../../public/LogoVulpes';
import Link from 'next/link';
import { contactAgent } from '../../../public/Assets/Contact-Agent';
import { IoMenu, IoClose } from 'react-icons/io5';

const NavSession = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const onScrolling = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on click

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.container} id='header'>
      <div className={styles.logo}>
        <SvgComponent />
      </div>

      <div className={`${styles.sessions} ${isMenuOpen ? styles.sessions__open : ''}`}>
        <span className={styles.session}>
          <a href='#method' className={styles.remove__style} onClick={onScrolling} rel="noopener noreferrer">
            Metodologia
          </a>
        </span>
        <span className={styles.session}>
          <a href='#quest' className={styles.remove__style} onClick={onScrolling} rel="noopener noreferrer">
            Dúvidas
          </a>
        </span>

        <button className={styles.button_mobile}>
          <div className={styles.legend__button}>
            <Link href={contactAgent} target='_blank' rel="noopener noreferrer" className={styles.remove__style}>
              Entre em Contato
            </Link>
          </div>
        </button>
      </div>

      <button className={styles.button}>
        <div className={styles.legend__button}>
          <Link href={contactAgent} target='_blank' rel="noopener noreferrer" className={styles.remove__style}>
            Entre em Contato
          </Link>
        </div>
      </button>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <IoClose size={32} color="#04152f" /> : <IoMenu size={32} color="#04152f" />}
      </div>
    </div>
  );
};

export default NavSession;

