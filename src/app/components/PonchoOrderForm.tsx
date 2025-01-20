"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './PonchoOrderForm.module.css';

export default function PonchoOrderForm() {
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}></div>
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
                        </nav>
                    </div>
                </div>
            )}
            <div className={styles.formContainer}>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <h1 style={{ textAlign: 'center', color: '#00796b' }}>Bestellung von Regenponchos</h1>
                        <label className={styles.formLabel}>
                            Größe:
                            <select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                className={styles.formSelect}
                                required
                            >
                                <option value="">Wählen Sie eine Größe</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </label>
                        <label className={styles.formLabel}>
                            Anzahl:
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className={styles.formInput}
                                min="1"
                                required
                            />
                        </label>
                        <button type="submit" className={styles.formButton}>
                            Bestellen
                        </button>
                    </form>
                ) : (
                    <div className={styles.confirmation}>
                        <h2>Bestellung Bestätigt</h2>
                        <p>Größe: {size}</p>
                        <p>Anzahl: {quantity}</p>
                    </div>
                )}
            </div>
        </div>
    );
}