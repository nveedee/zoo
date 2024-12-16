// src/app/components/CategoryButton.tsx
import Link from 'next/link';
import styles from './CategoryButton.module.css';

interface CategoryButtonProps {
    title: string;
    link: string;
}

export default function CategoryButton({ title, link }: CategoryButtonProps) {
    return (
        <Link href={link} className={styles.button}>
            {title}
        </Link>
    );
}
