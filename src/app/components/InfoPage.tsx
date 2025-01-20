"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./InfoPage.module.css";

export default function InfoPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div
                className={styles.burgerMenu}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                &#9776;
            </div>
            {menuOpen && (
                <div className={styles.menuOverlay}>
                    <div className={styles.menuContent}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setMenuOpen(false)}
                        >
                            &times;
                        </button>
                        <nav>
                            <Link href="/" className={styles.menuItem}>
                                Home
                            </Link>
                            <Link href="/ponchos" className={styles.menuItem}>
                                Ponchos
                            </Link>
                            <Link href="/tickets" className={styles.menuItem}>
                                Tickets
                            </Link>
                            <Link href="/zoo-map" className={styles.menuItem}>
                                Zoo Map
                            </Link>
                            <Link href="/info" className={styles.menuItem}>
                                Info
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
            <h1 className={styles.title}>Information Page</h1>
            <div className={styles.infoSection}>
                <h2>Adresse</h2>
                <p>Zoo Musterstadt<br />Musterstraße 1<br />12345 Musterstadt</p>
            </div>
            <div className={styles.infoSection}>
                <h2>Öffnungszeiten</h2>
                <p>Montag - Freitag: 09:00 - 18:00<br />Samstag - Sonntag: 10:00 - 20:00</p>
            </div>
            <div className={styles.infoSection}>
                <h2>Kontakt</h2>
                <p>Telefon: 01234 / 567890<br />E-Mail: info@zoo-musterstadt.de</p>
            </div>
        </div>
    );
}