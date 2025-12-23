import './styles.module.css';
import styles from './styles.module.css';
import SvgComponent from '../../../public/LogoVulpes';
import Link from 'next/link';
import { contactAgent } from '../../../public/Assets/Contact-Agent';

const NavSession = () => {

  const onScrolling = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

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

      <div className={styles.sessions}>
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
        {/* <span className={styles.session}>
          Fundadora
        </span>
        <span className={styles.session}>
          Depoimentos
        </span> */}
      </div>

      <button className={styles.button}>
        <div className={styles.legend__button}>
          <Link href={contactAgent} target='_blank' rel="noopener noreferrer" className={styles.remove__style}>
            Entre em Contato
          </Link>
        </div>
      </button>
    </div>
  );
};

export default NavSession;
