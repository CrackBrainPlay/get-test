import BurgerButton from '@/components/elements/BurgerButton/BurgerButton';
import Logo from '@/components/elements/Logo/Logo';
import styles from '@/styles/header/index.module.scss'


const Header = () => {
    return (
        <div className={styles.section}>
            <Logo />
            <div className={styles.action}>
                <button className={styles.action_btn}>Преимущества</button>
                <button className={styles.action_btn}>Как работаем</button>
            </div>
            <div className={styles.burger}>
                <BurgerButton />
            </div>
        </div>
    );
};

export default Header;