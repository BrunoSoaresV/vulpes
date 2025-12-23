import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.module.css';
import styles from './styles.module.css';
import img from '../../public/LOGO_EVENTO.png';
import { GrCertificate } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import modalType from '../../interface/modalType';

const CardForm = ({ modalChangers }: modalType) => {
    const [showToast, setShowToast] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [lgpd, setLgpd] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ name, email, agree_lgpd: lgpd }),
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json());
        setMessage(response.message);
        setShowToast(true);
        setName('');
        setEmail('');
        setLgpd(false);
    };

    const isFormValid = () => {
        return name !== '' && name.length > 4 && email !== '' && email.length > 8 && lgpd === true;
    };

    const handleCheckboxChange = () => {
        setLgpd(!lgpd);
    };

    return (
        <div className={styles.container}>
            <div className={styles.form_box}>
                <Image
                    src={img}
                    alt="Logo do evento Vulpes Business Class"
                    width={194}
                    height={72} />
                <h1 className={styles.titulo}>
                    Para você, não basta saber <br />inglês. Você precisa falar inglês <br />com clareza e excelência.
                </h1>
                <p className={styles.small_text}>Aqui, você encontra inglês para negócios, na prática, <b>à altura do profissional que você é.</b></p>
                <Form onSubmit={handleSubmit} className={styles.formulario}>
                    {/* <Form.Control
                        type="text" value={name} onChange={(event) => setName(event.target.value)}
                        placeholder='Nome completo'
                        className={styles.input} />
                    <Form.Control
                        type="email" value={email} onChange={(event) => setEmail(event.target.value)}
                        placeholder='E-mail'
                        className={styles.input} />
                    <div className={styles.line}>
                        <input className={styles.check} type="checkbox" required name="LGPD" onChange={handleCheckboxChange} checked={lgpd} />
                        <p className={styles.small_text_agree}>Estou de acordo com a <Link href="/politica-privacidade"><a target="_blank" rel="noopener noreferrer" className={styles.remove__style}><span className={styles.privacy__link}><strong>Política de Privacidade</strong></span></a></Link> da Vulpes Idiomas</p>
                    </div> */}

                    {/* <Button type='submit' onClick={() => setTimeout(() => modalChangers(true), 1500)} className={styles.button} disabled={!isFormValid()}><div className={styles.legend__button}><b>QUERO PARTICIPAR DO BUSINESS CLASS</b></div></Button> */}
                    <Button className={styles.button}>
                        <div className={styles.legend__button}>
                            <Link href="https://sun.eduzz.com/1897833" target='_blank' rel="noopener noreferrer" className={styles.remove__style}>
                                <b>ACESSAR O BUSINESS CLUB</b>
                            </Link>
                        </div>
                    </Button>
                    {/* <div className={styles.center__data}>
                        <span className={styles.small_text_data}><b>05 DE JUNHO, ÀS 20 HORAS • 100% ONLINE E GRATUITA</b></span>
                        <div className={styles.break__line}></div>
                    </div> */}

                    <div className={styles.bonus__area}>
                        <div className={styles.each__bonus}>
                            <GrCertificate className={styles.icons} />
                            <span className={styles.bonus}>Certificado</span>
                        </div>
                        <div className={styles.each__bonus}>
                            <FaWhatsapp className={styles.icons} />
                            <span className={styles.bonus}>Grupo exclusivo no Whatsapp</span>
                        </div>
                    </div>
                </Form>

                <Toast show={showToast} onClose={() => setShowToast(false)} autohide delay={3000} className={styles.toast}>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </div>
        </div>
    );
};

export default CardForm;
