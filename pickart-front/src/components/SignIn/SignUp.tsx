"use client"
import styles from './SignIn.module.scss';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";
import axios from 'axios';
import { API_URL } from '../../../Const';


export default function SignUp() {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (event.target === userName.current) {
                email.current.focus();
            } else if (event.target === email.current) {
                password.current.focus();
            } else if (event.target === password.current) {
                confirmPassword.current.focus();
            } else if (event.target === confirmPassword.current) {
                onSubmit(event);
            }
        }
    };
    const [error, setError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [isWrong, setIsWrong] = useState(false);
    const userName = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const confirmPassword = useRef<HTMLInputElement>(null);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userName.current || !password.current) return;
        try {
            if (userName.current.value != '' && email.current.value != '' && password.current.value != '' && password.current.value == confirmPassword.current.value) {
                const isValid = validateEmail(email.current.value);
                if (!isValid) {
                    setIsWrong(true);
                } else {
                    const Reg = await axios.post(`${API_URL}/Reg?name=${userName.current.value}&email=${email.current.value}&password=${password.current.value}`);
                    if (Reg) {
                        const result = await signIn("credentials", {
                            email: userName.current.value,
                            password: password.current.value,
                            redirect: true,
                            callbackUrl: "/",
                        });
                        if (!result) console.log("error");
                    }
                }
            } else setIsWrong(true);

        } catch (e: any) {
            setError(e.message);
            console.log("Error ", error);
            setTimeout(() => {
                // setFocused(false);
            }, 50000);
        }
    };
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };
    return (
        <div className={styles.UpLoadForm}>
            <div className={styles.Conteiner}>
                <div className={styles.ConteinerTop}>Sign Up</div>
                <div className={styles.ConteinerInside}>
                        <form className={styles.Center} onSubmit={onSubmit}>
                            <input
                                placeholder='UserName'
                                onChange={(e) => (userName.current.value = e.target.valuse)}
                                onKeyPress={handleKeyPress}
                                ref={userName}></input>
                            <input
                                type='email'
                                placeholder='Email'
                                onChange={(e) => (email.current.value = e.target.value)}
                                onKeyPress={handleKeyPress}
                                ref={email}></input>
                            <input
                                placeholder='Password'
                                onChange={(e) => (password.current.value = e.target.value)}
                                onKeyPress={handleKeyPress}
                                ref={password}></input>
                            <input
                                placeholder='Confirm password'
                                onChange={(e) => (confirmPassword.current.value = e.target.value)}
                                onKeyPress={handleKeyPress}
                                ref={confirmPassword}></input>
                        </form>
                    <p className={isWrong ? styles.Error : styles.Hide}>The fields are filled in incorrectly</p>
                    <div>
                        <div className={styles.Button} onClick={onSubmit}>Sign Up</div>
                        <Link href={'/SignIn'} className={styles.Link}>
                            <div className={styles.Button} >Sign In</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};