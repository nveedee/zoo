import styles from './CategoryButton.module.css';

interface CategoryButtonProps {
    title: string;
    link: string;
}

export default function CategoryButton({ title, link }: CategoryButtonProps) {
    return (
        <a href={link} className={styles.button}>
            {title}
        </a>
    );
}