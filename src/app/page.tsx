import CategoryButton from './components/CategoryButton';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <img src={'/zooImg.png'} alt="Zoo Logo" className={styles.image}/>
                <div className={styles.buttons}>
                    <CategoryButton title="Regenponchos mieten" link="/ponchos"
                                    imageSrc="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/cf/b9/28/cfb9281c-6354-e66e-5ee5-b2aeadf81c37/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/434x0w.webp"/>
                    <CategoryButton title="Infos" link="/"
                                    imageSrc="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d7/71/66/d7716604-5dc6-b682-522e-cb0996de3a04/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/434x0w.webp"/>
                    <CategoryButton title="Zoo Plan" link="/"
                                    imageSrc="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a0/28/10/a02810ff-c2dc-4226-63e2-246e7a38e169/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/434x0w.webp"/>
                    <CategoryButton title="Kontakt" link="/"
                                    imageSrc="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/64/09/09/6409090d-8811-e92f-2ebf-37f842b72e98/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/434x0w.webp"/>
                </div>
            </main>
        </div>
    );
}