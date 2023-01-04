import styles from "./Home.module.css"
import Layout from "../../Layout/Layout"

export const Home = () => {
    return (
        <Layout>
            {/* Create a home page that shows the products abilities */}
            <div className={styles.home}>
                <h1>Home</h1>
                <p>Home page</p>
            </div>

        </Layout>

    );
};