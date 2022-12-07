import { FunctionComponent } from "react"
import Head from 'next/head'
import fsPromises from 'fs/promises';
import path from 'path';

import Background from '../components/background'
import Project from '../components/project'
import Social from '../components/socials'
import Title from '../components/title'

import styles from '../styles/Home.module.scss'


// Type structure of the JSON data.
type Data = {
    metadata: {
        title: string,
        author: string
    },
    socials: [
        {
            name: string,
            iconSrc: string,
            alt: string
        }
    ],
    projects: {
        title: string,
        content: [
            {
                title: string,
                desc: string,
                iconSrc: string,
                alt: string,
                details: string
            }
        ]
    },
    about: string
};

/**
 * Home component.
 * 
 * ---
 * 
 * The component uses React's FunctionComponent notation.
 * Each component can be served entry parameters to populate the layout in the form of props.
 * 
 * The props must be declared as a Type.
 * 
 * The styles are imported and linked to html classes using the style reference.
 * 
 * Images are imported using static file serving.
 * 
 * ---
 * 
 * @param props static data imported from JSON file.
 */
const Home: FunctionComponent<Data> = (props) => {

    return (
        <div id={styles.container}>

            <Head>
                <title>{`${props.metadata.author}'s ${props.metadata.title}`}</title>
                <meta charSet='utf-8' />
                <link rel="icon" href="/logo.png" />
            </Head>

            <div id={styles.content}>

                <Title {...props.metadata}></Title>

                <div className={styles.socials}>
                    {props.socials.map( (social, index) => (
                        <Social key={index} class={social.alt} {...social}></Social>
                    ))}
                </div>

                <div className={styles.projects}>

                    <div className={styles.project_title}>
                        <span>{props.projects.title}</span>
                    </div>
    
                    <div id={styles.projects_content}>
                        {props.projects.content.map( (project, index) => (
                            <Project key={index} {...project}></Project>
                        ))}
                    </div>
                </div>

                <div id={styles.about_container}>
                    
                    <div className={styles.bio}>
                        <span>{props.about}</span>
                    </div>
                </div>
            </div>
            <Background></Background>
        </div>
    );
};

// Fetching data from the JSON file.
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData.toString()) as Data;

    return {
        props: objectData
    };
};

export default Home;