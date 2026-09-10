import { StaticImageData } from 'next/image';

import journeyImgIcon from '../../../public/LANDPAGE/icons/journey.png'
import overseasImgIcon from '../../../public/LANDPAGE/icons/overseas.png'
import paceImgIcon from '../../../public/LANDPAGE/icons/pro-ace.png'
import businessClubImgIcon from '../../../public/LANDPAGE/icons/business-class.png'

import journeyImg from '../../../public/LANDPAGE/trailsContent/pic-pc-with-time.jpg';
import overseasImg from '../../../public/LANDPAGE/trailsContent/hands-with-passport.jpg';
import paceImg from '../../../public/LANDPAGE/trailsContent/mug-and-plants.jpg';
import businessClubImg from '../../../public/LANDPAGE/trailsContent/hotel.jpg';

import {
  jouneyContact,
  overseasContact,
  proAceContact,
  proBusinessMasterClass
} from '../../../public/Assets/Contact-Agent';

enum PROGRAM {
  JOURNEY = 'Journey',
  OVERSEAS = 'Overseas',
  PRO_ACE = 'Pro Ace',
  BUSINESS_MASTERCLASS = 'Business Masterclass',
}

interface IndividualTrailContentProps {
  active?: boolean;
  indice: number;
}

interface descriptionTag {
  tag: string;
  text: string;
}

interface IndividualContent {
  name: string;
  iconPath: StaticImageData;
  title: string;
  description: descriptionTag[][];
  buttonTitle: string;
  buttonLink: string;
  image: StaticImageData;
  imgWidth: number;
  imgHeight: number;
}

export const choseTrail = (props: IndividualTrailContentProps) => {
  switch(props.indice) { 
    case 0:
    default: {
      return {
        name: PROGRAM.JOURNEY,
        iconPath: journeyImgIcon,
        title: `
          Programa de desenvolvimento
          da competência linguística
        `,
        description: [
          [
            { tag: 'p', text: 'Aprenda a se comunicar em inglês ' },
            { tag: 'strong', text: 'de verdade.' },
          ],
          [
            { tag: 'p', text: `Conheça o Vulpes ${PROGRAM.JOURNEY}. Nós te acompanhamos do início ao fim da sua jornada rumo à fluência, do iniciante ao avançado. Partindo de onde você está, até onde você quer chegar.` },
          ],
          [
            { tag: 'p', text: `Com aulas comunicativas e personalizadas para o seu perfil e objetivos, o Vulpes ${PROGRAM.JOURNEY} é o caminho mais eficiente para aprender inglês de fato. Aulas individuais ou em dupla, na frequência ideal para você.` },
          ],
          [
            { tag: 'strong', text: 'Para todos os níveis de proficiência.' },
          ]
        ],
        buttonTitle: 'Conhecer jornada',
        buttonLink: jouneyContact,
        image: journeyImg,
        imgWidth: 340,
        imgHeight: 520
      } as IndividualContent;
    }

    case 1: {
      return {
        name: PROGRAM.OVERSEAS,
        iconPath: overseasImgIcon,
        title: 'Preparatório para viagens, intercâmbios e imigrações',
        description: [
          [
            { tag: 'p', text: `Prepare-se para a sua viagem internacional. Explore o mundo com fluência e segurança.` },
          ],
          [
            { tag: 'p', text: `Transforme suas viagens internacionais em experiências extraordinárias. Você receberá preparação linguística e cultural para aproveitar ao máximo sua jornada no exterior.` },
          ],
          [
            { tag: 'p', text: `Nossos professores especializados vão guiar você desde o aeroporto até situações do dia a dia, como compras e interações profissionais. Ao final das 15 sessões, você terá o repertório necessário para se comunicar com confiança, evitando estresse e insegurança com o Vulpes ${PROGRAM.OVERSEAS}.` },
          ],
          [
            { tag: 'strong', text: 'Para todos os níveis de proficiência.' },
          ]
        ],
        buttonTitle: 'Embarcar',
        buttonLink: overseasContact,
        image: overseasImg,
        imgWidth: 360,
        imgHeight: 500
      } as IndividualContent;
    }

    case 2: {
      return {
        name: PROGRAM.PRO_ACE,
        iconPath: paceImgIcon,
        title: 'Preparatório para Testes de Proficiência',
        description: [
          [
            { tag: 'p', text: `Prepare-se para as provas de proficiência mais relevantes do mundo.` },
          ],
          [
            { tag: 'p', text: `Nenhum curso disponível no mercado te prepara para conquistar resultados excepcionais em exames de proficiência como o Vulpes ${PROGRAM.PRO_ACE}. Se você precisa se preparar para o TOEFL, TOEIC, IELTS, FCE, CAE ou FCE, o VPA é o programa para você.` },
          ],
          [
            { tag: 'p', text: 'Você terá acesso a materiais robustos, simulações guiadas e as melhores estratégias para provas de proficiência. Nossos professores especializados estarão ao seu lado, com um acompanhamento personalizado para maximizar seu desempenho. Com a Vulpes, as provas se tornam portas abertas para os seus objetivos.' },
          ],
          [
            { tag: 'strong', text: 'Para intermediários e avançados.' },
          ]
        ],
        buttonTitle: 'Conhecer jornada',
        buttonLink: proAceContact,
        image: paceImg,
        imgWidth: 350,
        imgHeight: 480
      } as IndividualContent;
    }

    case 3: {
      return {
        name: PROGRAM.BUSINESS_MASTERCLASS,
        iconPath: businessClubImgIcon,
        title: 'Clube de Conversação em Inglês para Negócios',
        description: [
          [
            { tag: 'p', text: `A aula que vai transformar o seu inglês para negócios para sempre.` },
          ],
          [
            { tag: 'p', text: `A Vulpes ${PROGRAM.BUSINESS_MASTERCLASS} é para você que precisa do inglês no seu trabalho, e não tem tempo a perder. Nesta aula de uma hora, você encontrará as melhores ferramentas e orientações para fazer o inglês que você tem funcionar na prática, para a sua vida, seja seu nível iniciante ou avançado.` },
          ],
          [
            { tag: 'p', text: `Ao adquirir a Masterclass, você recebe também um material de apoio e tem direito à correção personalizada do seu texto.` },
          ]
        ],
        buttonTitle: 'Quero a Masterclass',
        buttonLink: proBusinessMasterClass,
        image: businessClubImg,
        imgWidth: 420,
        imgHeight: 420
      } as IndividualContent;
    }
  }
}
