import type { NextPage } from "next";
import Head from 'next/head'
import './styles.module.css';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import img_wpp_group from '../public/group-wpp.png';

import ContentContainer from "../views/Container";
import Header from "../views/Thumbnail";
import FooterView from "../views/FooterView";
import Presentation from "../views/Presentation";
import LearnCardsView from "../views/LearnCards";
import BonusView from "../views/BonusView";
import StakeholdersView from "../views/Stakeholders";
import SpeakerView from "../views/SpeakerView";
import DataView from "../views/DataView";
import InspirationView from "../views/InspirationView";
import PassportSession from "../components/Passport";
import { useState } from "react";


const LandingPage: NextPage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalChanger = (args: boolean) => {
        setModalIsOpen(args);
    }

    return (
        <ContentContainer>
            <Head>
                <title>Vulpes Business Class</title>
                <link rel="shortcut icon" href="/fav-icon-vulpes-azul.png" />
            </Head>
            <Header modalChangers={modalChanger} />
            <DataView />
            <Presentation modalChangers={modalChanger} />
            <SpeakerView />
            <LearnCardsView />
            <BonusView />
            <StakeholdersView modalChangers={modalChanger} />
            <InspirationView />
            <FooterView modalChangers={modalChanger} />
            {modalIsOpen && (
                <PassportSession modalChangers={modalChanger} />
            )}

            <Link
                href="https://chat.whatsapp.com/JVsaxpR9svH4o7zAei4eU8"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.img__wpp__group}>

                <Image
                    src={img_wpp_group}
                    alt="Imagem icone Grupo de Whatsapp"
                    width={47}
                    height={46}
                />

            </Link>
        </ContentContainer>
    );
};

export default LandingPage