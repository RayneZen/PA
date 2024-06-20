"use client"
import styles from './SignIn.module.scss';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";
// import { useRouter } from 'next/router';

export default function SignIn() {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (event.target === userName.current) {
                password.current.focus();
            } else if (event.target === password.current) {
                onSubmit(event);
            }
        }
    };
    const [isWrong, setIsWrong] = useState(false);
    const [error, setError] = useState(null);
    const userName = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    // const router = useRouter();
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        console.log("Onsubmit");
        if (!userName.current || !password.current) return;
        try {
          const result = await signIn("credentials", {
            email: userName.current.value,
            password: password.current.value,
            redirect: true,
            callbackUrl: "/",
          });
          if (result?.error) {
            setIsWrong(true);
            setError(result?.error || "An unknown error occurred.");
          } else {
            // Redirect the user to the desired page
            // router.push('/');
          }
        } catch (e: any) {
          setIsWrong(true);
          setError(e.message);
        }
      };

    const handleSignUp = () => {
        router.push('/SignUp');
    };

    return (
        <div className={styles.UpLoadForm}>
            <div className={styles.Conteiner}>
                <div className={styles.ConteinerTop}>Sign In</div>
                <div className={styles.ConteinerInside}>
                    <form onSubmit={onSubmit} className={styles.Center}>
                        <input
                            placeholder='UserName'
                            onChange={(e) => (userName.current.value = e.target.value)}
                            onKeyPress={handleKeyPress}
                            ref={userName}></input>
                        <input
                            placeholder='Password'
                            onChange={(e) => (password.current.value = e.target.value)}
                            onKeyPress={handleKeyPress}
                            ref={password}></input>
                        {/* <button type='submit'>222</button> */}
                    </form>
                    <p className={isWrong? styles.Error: styles.Hide}>The fields are filled in incorrectly</p>
                    <div>
                        <div className={styles.Button} onClick={onSubmit}>Sign In</div>
                        <Link href={'/SignUp'} className={styles.Link}>
                            <div className={styles.Button} >Sign Up</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};