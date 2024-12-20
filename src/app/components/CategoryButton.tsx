// src/app/components/CategoryButton.tsx
import Link from 'next/link';
import styles from './CategoryButton.module.css';

interface CategoryButtonProps {
    title: string;
    link: string;
    imageSrc: string;
}

export default function CategoryButton({ title, link, imageSrc }: CategoryButtonProps) {
    return (
        <Link href={link} className={styles.button}>
            <img src={imageSrc} alt={title} className={styles.image} />
            <div className={styles.text}>
                {title.split(' ').map((word, index) => (
                    <span key={index}>{word}</span>
                ))}
            </div>
        </Link>
    );
}