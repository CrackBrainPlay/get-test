import ContactForm from "../ContactForm/ContactForm";
import styles from "@/styles/footer/index.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <ContactForm />
        </div >
    );
};

export default Footer;