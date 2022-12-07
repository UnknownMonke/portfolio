import { FunctionComponent } from "react"
import Image from "next/image"

import styles from "../styles/ProjectHeader.module.scss"


type Props = {
    visible: boolean,
    title: string,
    desc: string,
    iconSrc: string,
    alt: string
};

/**
 * Component to display the project header: image, title and short description.
 */
const ProjectHeader: FunctionComponent<Props> = (props) => {
    return (
        <div className={styles.header}>

            <div className={styles.thumbnail}>
                <div className={styles.img_container}>
                    <Image src={props.iconSrc} alt={props.alt} fill />
                </div>
            </div>
            
            <div className={styles.desc}>
                <div className={styles.desc_title}>
                    <span>{props.title}</span>
                </div>
                <div className={styles.desc_content}>
                    <span>{props.desc}</span>
                </div>
            </div>
            <div className={styles.icon}>
                <div className={styles.icon_container}>
                    <Image src={props.visible ? '/icons/chevron-top.svg' : '/icons/chevron-bot.svg'} alt="chevron" fill />
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;