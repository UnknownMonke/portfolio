import { FunctionComponent } from "react"
import Image from "next/image"

import styles from "../styles/Social.module.scss"


// Local props variable name must match the JSON data to be able to use array deconstruction.
type Props = {
    class: string,
    name: string,
    iconSrc: string,
    alt: string
};

/**
 * Component for social links and bio.
 */
const Social: FunctionComponent<Props> = (props) => {
    return (
        <div className={`${styles.s_card} ${styles[props.class]}`}>

            <div className={styles.img_container}>
                <Image src={props.iconSrc} alt={props.alt} fill />
            </div>
            <span>{props.name}</span>
        </div>
    );
};

export default Social;