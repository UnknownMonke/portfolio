import { FunctionComponent, useState } from "react"
import ProjectHeader from "../components/project_header"

import styles from "../styles/Project.module.scss"


// Local props variable name must match the JSON data to be able to use array deconstruction.
type Props = {
    title: string,
    desc: string,
    iconSrc: string,
    alt: string,
    details: string
};

/**
 * Component to display the project card with content dropdown.
 * 
 * ---
 * 
 * Details are injected without escaping via dangerouslySetInnerHTML to allow for easy formatting.
 */
const Project: FunctionComponent<Props> = (props) => {

    const [visible, setVisible] = useState(false); // Hook to control the display of details. 
    const {title, desc, iconSrc, alt} = props;

    return (
        <div className={styles.card} onClick={() => setVisible(!visible)}>

            <ProjectHeader visible={visible} {...{title, desc, iconSrc, alt}}></ProjectHeader>

            <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
                <p dangerouslySetInnerHTML={{ __html: props.details }}></p>
            </div>
        </div>
    );
};

export default Project;