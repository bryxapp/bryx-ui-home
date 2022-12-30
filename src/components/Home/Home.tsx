import styles from "../../home.module.css"

export const Home = () => {
    return (
        
        <div className={styles.grid}>
            <a href="/templates" className={styles.card}>
                <h3>Templates &rarr;</h3>
                <p>Create and modify estimate templates</p>
            </a>
            <a href="/forms" className={styles.card}>
                <h3>Forms &rarr;</h3>
                <p>Create an new estimate from a generate form</p>
            </a>
            <a href="/past-estimates" className={styles.card}>
                <h3>Past Estimates &rarr;</h3>
                <p>Review previously created estimates</p>
            </a>
        </div>
    );
};