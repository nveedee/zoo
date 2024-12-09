// src/app/page.tsx
import Header from './components/Header';
import CategoryButton from './components/CategoryButton';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.buttons}>
                    <CategoryButton title="Infos" link="/info" />
                    <CategoryButton title="Regenponchos mieten" link="/ponchos" />
                    <CategoryButton title="Zoo Plan" link="/map" />
                    <CategoryButton title="Kontakt" link="/contact" />
                </div>
            </main>
        </div>
    );
}