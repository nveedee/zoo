// src/app/components/PonchoOrderForm.tsx
"use client";

import { useState } from 'react';
import styles from './PonchoOrderForm.module.css';

export default function PonchoOrderForm() {
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleQuantityChange = (amount: number) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
    };

    if (submitted) {
        return (
            <div className={styles.confirmation}>
                <h2>Bestellung erfolgreich!</h2>
                <p>Sie können Ihre Regenponchos am Info-Point abholen.</p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.quantityLabel}>
                Wie viele Ponchos möchten Sie kaufen?
                <div className={styles.quantityControl}>
                    <button type="button" onClick={() => handleQuantityChange(-1)}>-</button>
                    <input
                        className={styles.input}
                        type="number"
                        value={quantity}
                        readOnly
                    />
                    <button type="button" onClick={() => handleQuantityChange(1)}>+</button>
                </div>
            </label>
            <p className={styles.price}>pro Poncho 3 CHF</p>
            <fieldset className={styles.fieldset}>
                <legend>Größe:</legend>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        name="size"
                        value="S"
                        checked={size === 'S'}
                        onChange={(e) => setSize(e.target.value)}
                        required
                    />
                    S
                </label>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        name="size"
                        value="M"
                        checked={size === 'M'}
                        onChange={(e) => setSize(e.target.value)}
                        required
                    />
                    M
                </label>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        name="size"
                        value="L"
                        checked={size === 'L'}
                        onChange={(e) => setSize(e.target.value)}
                        required
                    />
                    L
                </label>
            </fieldset>
            <button className={styles.button} type="submit">Bestellen</button>
        </form>
    );
}