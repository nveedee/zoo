// src/components/Header.tsx
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <span>Address: 123 Zoo Street, City</span>
                <span>Phone: (123) 456-7890</span>
                <span>Summer Season 2024</span>
            </div>
        </header>
    );
}