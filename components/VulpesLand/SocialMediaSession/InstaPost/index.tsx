import './styles.module.css';
import styles from './styles.module.css';
import Image from 'next/image';
import { FaEllipsisH } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { TbMessageCircle } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { HiOutlineBookmark } from "react-icons/hi";

import insta_icon from '../../../../public/LANDPAGE/icon-insta-vulpes.png';
import { PostVar } from '../insta-vulpes-posts.mock';

interface AtributPost {
    post_var: PostVar
}

const InstaPost = (props: AtributPost) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.join}>
                    <div className={styles.image__circle_2}>
                        <Image
                            src={insta_icon}
                            alt="Instagram Vulpes Logo"
                            width={44}
                            height={44}
                        />
                    </div>
                    vulpesidiomas
                </div>
                <FaEllipsisH />
            </div>
            <div className={styles.body}>
                <Image
                    src={props.post_var.image}
                    alt="A picture one randle post of Vulpes on instagram"
                    width={383}
                    height={479}
                />
            </div>
            <div className={styles.footer}>
                <div className={styles.icons_line}>
                    <div className={styles.join}>
                        <FcLike />
                        <TbMessageCircle size={28} />
                        <FiSend />
                    </div>

                    <HiOutlineBookmark />
                </div>
                <span className={styles.description}>
                    <b>vulpesidiomas </b>
                    {props.post_var.description}
                </span>
            </div>
        </div>
    );
}

export default InstaPost;