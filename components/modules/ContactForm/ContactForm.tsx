import { SITE_URL } from '@/constants/route';
import styles from '@/styles/contact-form/index.module.scss'
import Link from 'next/link';

const ContactForm = () => {
    return (
        <div className={styles.contact}>
            <h1 className='isDesktop'>
                Заполните форму
            </h1>
            <h2 className='isTablet'>
                Заполните форму
            </h2>
            <div className={styles.contact__box}>
                <textarea
                    className={styles.contact__box_text_area}
                    placeholder='Напишите свой вопрос'
                // name={messageRegister.name}
                // ref={messageRegister.ref}
                // onFocus={handleDetailsInputFocus}
                // onBlur={handleDetailsInputBlur}
                // onChange={handleMessageChange}
                />
                {/* <span
                        className={style.order__list__item__details__form__floating_label}
                    >
                        Напишите свой вопрос
                    </span> */}
                {/* {errors.message_label && errors.message_label?.type === 'maxLength' && (
                        <span className={style.order__list__item__details__form__error}>
                            Не более 250 символов!
                        </span>
                    )} */}
                <div className={styles.contact__box__right_section}>
                    <label
                    // className={style.order__list__item__details__form__label}
                    >
                        <input
                            type='text'
                            placeholder='Email'
                            className={styles.contact__box__right_section_input_fild}
                        // name={emailRegister.name}
                        // ref={emailRegister.ref}
                        // onFocus={handleDetailsInputFocus}
                        // onBlur={handleDetailsInputBlur}
                        // onChange={handleEmailChange}
                        />
                        {/* <span
                        // className={style.order__list__item__details__form__floating_label}
                        >
                            Email
                        </span> */}
                        {false && (
                            <span className={styles.contact__box__right_section__error}>
                                Неправильно указана почта
                            </span>
                        )}
                    </label>
                    <label className={styles.contact__box_text}>
                        <input
                            // className={style.order_block__agreement__input}
                            type='checkbox'
                            tabIndex={-1}
                        // onChange={handleAgreementChange}
                        // checked={isUserAgree}
                        // ref={checkboxRef}
                        />
                        <span
                        // className={style.order_block__agreement__mark} 
                        />
                        <span
                            // className={style.order_block__agreement__checkbox}
                            tabIndex={0}
                        // onKeyDown={handleTabCheckbox}
                        />
                        <span
                        // className={style.order_block__agreement__text}
                        >
                            {'Я ознакомлен(а) c  '}
                            <Link
                                href={SITE_URL}
                            // className={style.order_block__agreement__link}
                            >
                                {"политекой конфиденциальности"}
                            </Link>
                            {'и'}<br />
                            {'согласен(на) на обработку '}
                            <Link
                                href={SITE_URL}
                            // className={style.order_block__agreement__link}
                            >
                                {"персональных данных."}
                            </Link>
                        </span>
                    </label>
                    <button
                    // className={style.order_block__btn}
                    // disabled={!isUserAgree || !currentCartByAuth.length || paymentSpinner}
                    // onClick={handleMakePayment}
                    >
                        Оформить заказ
                    </button>
                    {/* <div>
                    <div>email</div>
                    <div className={styles.contact__box_text}>
                        Я ознакомлен(а) c <a href='/'> политекой конфиденциальности </a>и<br />
                        согласен(на) на обработку <a href='/'>персональных данных.</a>
                    </div>
                    <button>Отправить</button>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;