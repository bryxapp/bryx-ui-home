import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__content}>
                <h1 className={styles.hero__title}>Welcome to <span className={styles.hero__title__span}>BRYX</span></h1>
                <p className={styles.hero__text}>Transforming the boring spreadsheet quotes into visually stunning proposals</p>
                <button className={styles.hero__button}>Get Started</button>
            </div>
        </div>

    );
};