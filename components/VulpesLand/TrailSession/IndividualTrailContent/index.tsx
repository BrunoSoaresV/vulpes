import { Button } from 'react-bootstrap';
import { choseTrail } from '../trailsContentData';
import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";

interface IndividualTrailContentProps {
  active?: boolean;
  indice: number;
}

const IndividualTrailContent = (props: IndividualTrailContentProps) => {
  const trail = choseTrail(props);

  return (
    <div className={styles.container}>
      <div className={styles.explanation}>
        <h3 className={styles.trail__title__top}>{trail.name}</h3>
        <h3 className={styles.trail__title}>{trail.title}</h3>
        {trail.description.map((m, idx) => {
          return <p className={styles.trail__paragr} key={idx}>{
            m.map((m2, idx2) => m2.tag === 'p' ? m2.text : <strong className={styles.trail__bold} key={idx2}>{m2.text}</strong>)
          }</p>
        })}
        <Button className={styles.button}>
          <div className={styles.legend__button}>
            <Link href={trail.buttonLink} target='_blank' rel="noopener noreferrer" className={styles.remove__style}>
              {trail.buttonTitle}
              <FiArrowUpRight className={styles.link__arrow} />
            </Link>
          </div>
        </Button>
      </div>
      <div className={styles.centralize__img}>
        <div className={styles.trail__img}>
          <Image
            src={trail.image}
            alt={'icon of ' + trail.name + 'trail of Vulpes'}
            width={trail.imgWidth}
            height={trail.imgHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default IndividualTrailContent;
