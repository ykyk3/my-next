import '../styles/globals.css';
import App, { type AppProps } from 'next/app';
import styles from './App.module.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={styles.main}>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;
