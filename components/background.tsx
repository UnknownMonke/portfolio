import { FunctionComponent } from "react"

import styles from "../styles/Background.module.scss"


// Star object, the style contains the css props.
type Star = {
    type: string,
    style: {
        left: string,
        top: string,
        opacity: number
    }
};

/**
 * Component for starry background.
 * 
 * ---
 * 
 * All stars are generated, circular, white divs, appended to the container.
 * 
 * The stars have 4 different size and their opacity is randomized.
 * Each star has a random position expressed in percentage of top and left to stay within its parent borders (up to 99%).
 */
const Background: FunctionComponent = () => {

    /** Returns a random percentage position on the grid (up to 99%). */
    function position(): number[] {
        return [Math.random() * 99, Math.random() * 99];
    }

    /** Creates stars of the same type and append them to the star pool. */
    function createStars(stars: Star[], type: string, quantity: number): void {
        for(let i = 0; i <= quantity; i++) {
            const pos = position();
            stars.push(
                {
                    type: type,
                    style: {
                        left: pos[0] + '%',
                        top: pos[1] + '%',
                        opacity: Math.random()
                    }
                }
            );
        }
    }
    let stars: Star[] = [];
    
    createStars(stars, 'star-l', 300);
    createStars(stars, 'star-m', 500);
    createStars(stars, 'star-s', 600);
    createStars(stars, 'star-xs', 700);

    return ( // Returns a React fragment.
        <>
            {stars.map( (star, index) => (
                <div key={index} className={`${styles.star} ${styles[star.type]}`} style={star.style}></div>
            ))}
        </>
    ); 
};

export default Background;