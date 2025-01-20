"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ZooMap.module.css";

export default function ZooMap() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [tooltip, setTooltip] = useState({ visible: false, text: "", coords: { top: 0, left: 0 } });

    const hotspots = [
        { name: "Löwengehege", coords: { x: 67, y: 100 }, description: "Hier sind die Löwen" },
        { name: "Elefantengehege", coords: { x: 90, y: 15 }, description: "Hier sind die Elefanten" },
        { name: "Affengehege", coords: { x: 48, y: 10 }, description: "Hier sind die Affen" },
        { name: "Pferde", coords: { x: 10, y: 10 }, description: "Hier sind die Pferde" },
        { name: "Giraffen", coords: { x: 10, y: 30 }, description: "Hier sind die Giraffen" },
    ];

    const handleMouseEnter = (description: string, coords: { x: number; y: number }) => {
        setTooltip({
            visible: true,
            text: description,
            coords: {
                top: coords.y,
                left: coords.x
            }
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ visible: false, text: "", coords: { top: 0, left: 0 } });
    };

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
            <h1>Zoo Map</h1>
            <div className={styles.mapContainer}>
                <img
                    src="https://media.istockphoto.com/id/527233899/vector/map-of-a-zoo-park.jpg?s=612x612&w=0&k=20&c=PNtKNFnLO7CG8SeJyLPL5qWh9MM-l4wKsNzuKA3zytY="
                    alt="Zoo Map"
                    className={styles.mapImage}
                />
                {hotspots.map((spot, index) => (
                    <button
                        key={index}
                        className={styles.hotspot}
                        style={{
                            top: `${spot.coords.y}%`,
                            left: `${spot.coords.x}%`,
                        }}
                        onMouseEnter={() => handleMouseEnter(spot.description, spot.coords)}
                        onMouseLeave={handleMouseLeave}
                    >
                        ⭕
                    </button>
                ))}
                {tooltip.visible && (
                    <div
                        className={styles.tooltip}
                        style={{
                            top: `calc(${tooltip.coords.top}% - 50px)`,
                            left: `calc(${tooltip.coords.left}% + 30px)`,
                        }}
                    >
                        {tooltip.text}
                    </div>
                )}
            </div>
        </div>
    );
}
