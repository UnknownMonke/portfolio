import { FunctionComponent } from "react"
import Image from "next/image"

import styles from "../styles/Title.module.scss"
import logo from "../public/logo.png"


// Declares component props type.
type Props = {
    title: string,
    author: string
};

/**
 * Component for title and author.
 */
const Title: FunctionComponent<Props> = (props) => {
    return (
        <div className={styles.main_title}>

            <div className={styles.logo}>
                <Image src={logo} alt="logo" />
            </div>
            <div className={styles.top_title}>
                <span>{props.author}</span>
            </div>
            <div className={styles.title}>
                <span>{props.title}</span>
            </div>
        </div>
    );
};

export default Title;