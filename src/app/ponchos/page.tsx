// src/app/ponchos/page.tsx
"use client";

import PonchoOrderForm from '../components/PonchoOrderForm';
import Header from '../components/Header';
import styles from './PonchosPage.module.css';

export default function PonchosPage() {
    return (
        <div className={styles.page}>
            <Header />
            <PonchoOrderForm />
        </div>
    );
}