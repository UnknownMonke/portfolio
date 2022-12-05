import { FunctionComponent } from "react"
import Image from "next/image"

import styles from "../styles/Project.module.scss"


// Local props variable name must match the JSON data to be able to use array deconstruction.
type Props = {
    title: string,
    desc: string,
    iconSrc: string,
    alt: string
};

/**
 * Component to display the list of projects.
 */
const Project: FunctionComponent<Props> = (props) => {
    return (
        <div className={styles.card}>

            <div className={styles.thumbnail}>
                <Image src={props.iconSrc} alt={props.alt} fill />
            </div>
            
            <div className={styles.desc}>
                <div className={styles.header}>
                    <span>{props.title}</span>
                </div>
                <div className={styles.content}>
                    <span>{props.desc}</span>
                </div>
            </div>
        </div>
    );
};

export default Project;