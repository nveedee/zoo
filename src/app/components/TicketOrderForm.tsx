"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './TicketOrderForm.module.css';

export default function TicketOrderForm() {
    const [ticketType, setTicketType] = useState('');
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
            <div className={styles.formContainer}>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <h1 style={{ textAlign: 'center', color: '#00796b' }}>Ticket Bestellung</h1>
                        <label className={styles.formLabel}>
                            Ticket Typ:
                            <select
                                value={ticketType}
                                onChange={(e) => setTicketType(e.target.value)}
                                className={styles.formSelect}
                                required
                            >
                                <option value="">Wählen Sie einen Ticket Typ</option>
                                <option value="Erwachsene">Erwachsene</option>
                                <option value="Kinder">Kinder</option>
                                <option value="Senioren">Senioren</option>
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
                        <p>Ticket Typ: {ticketType}</p>
                        <p>Anzahl: {quantity}</p>
                    </div>
                )}
            </div>
        </div>
    );
}