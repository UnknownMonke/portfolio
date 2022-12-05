import type { AppProps } from 'next/app'
import '../styles/globals.css'


/**
 * Main page of the app, registers the Home component.
 */
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
};
