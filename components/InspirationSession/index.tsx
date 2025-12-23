import Link from 'next/link';
import styles from './styles.module.css';
import { IoMdQuote } from "react-icons/io";

const InspirationSession = () => {
    return (
        <div className={styles.container}>
            <div className={styles.line}>
                <IoMdQuote className={styles.icon} />
                <span className={styles.title}>McKinsey <br />& Company</span>
            </div>

            <div className={styles.center__detail}>
                <div className={styles.reduce__width}>
                    <span className={styles.line__detail}>
                        <Link href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy" target="_blank" rel="noopener noreferrer" className={styles.remove__style}>
                            <span className={styles.text__link}>
                                A comunicação eficaz no time aumenta a produtividade entre <b>20</b> e <b>25%</b>.
                            </span>
                        </Link>
                        <div className={styles.break__line}></div>
                    </span>
                </div>
            </div>

            <div className={styles.line}>
                <IoMdQuote className={styles.icon} />
                <span className={styles.title}>Forbes</span>
            </div>

            <div className={styles.center__detail}>
                <div className={styles.reduce__width}>
                    <span className={styles.line__detail}>
                        <Link href="https://www.forbes.com/sites/dorieclark/2012/10/26/english-the-language-of-global-business/?sh=5751244fb57e" target="_blank" rel="noopener noreferrer" className={styles.remove__style}>
                            <span className={styles.text__link}>
                                English will maintain and grow its dominance, moving from “a marker of the elite” in years past to “a basic skill needed for the entire workforce”.
                            </span>
                        </Link>
                        <div className={styles.break__line}></div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InspirationSession;