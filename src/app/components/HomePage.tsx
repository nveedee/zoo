"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './HomePage.module.css';

const images = [
    'https://images.pexels.com/photos/615277/pexels-photo-615277.jpeg?cs=srgb&dl=pexels-goran-vrakela-64248-615277.jpg&fm=jpg',
    'https://images.pexels.com/photos/1000529/pexels-photo-1000529.jpeg?cs=srgb&dl=pexels-jimbear-1000529.jpg&fm=jpg',
];

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0); // Default index
    const [menuOpen, setMenuOpen] = useState(false);
    const startX = useRef(0);
    const endX = useRef(0);

    // Set a random index on page load
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentIndex(randomIndex);
    }, []);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (startX.current - endX.current > 50) {
            handleNextImage();
        } else if (endX.current - startX.current > 50) {
            handlePrevImage();
        }
    };

    return (
        <div
            className={styles.container}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={styles.overlay}></div>
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
            <div className={styles.carousel}>
                <div
                    className={styles.track}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={styles.slide}
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    ))}
                </div>
            </div>
            <div className={styles.content}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/38/Logo_Zoo_Z%C3%BCrich.svg"
                    alt="Zoo Zürich Logo"
                    className={styles.logo}
                />
            </div>
        </div>
    );
}