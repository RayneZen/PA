import { GoogleButton } from '../GoogleButton/GoogleButton';
import styles from './SignIn.module.scss'
import { useState } from 'react';



export default function RightSide() {
    const [isSignIn, setIsSignIn] = useState(true);

    const SignInClick = () => {
        setIsSignIn(true);
    };
    const SignUpClick = () => {
        setIsSignIn(false);
    };
    return (
        <>
            <div className={styles.RightSite}>
                <GoogleButton></GoogleButton>
                <div className={styles.centr}>
                    <p className={isSignIn ? styles.Active : styles.Passive} onClick={SignInClick}>Sign In</p>
                    <p className={isSignIn ? styles.Passive : styles.Active} onClick={SignUpClick}>Sign Up</p>
                </div>
                <div className={isSignIn ? '' : styles.hidden}>
                    <div className={styles.SignInInput}>
                        <input placeholder='Login'></input>
                    </div>
                    <div className={styles.SignInInput}>
                        <input placeholder='Password'></input>
                    </div>
                    <div className={styles.Button}>
                        <p>Sign In</p>
                    </div>
                    <div className={styles.delitel}>
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    <div className={styles.Button}>
                        <p>Continue with Google</p>
                    </div>
                </div>
                <div className={isSignIn ? styles.hidden : ''}>
                    <div className={styles.Button}>
                        <p>Continue with Google</p>
                    </div>
                    <div className={styles.delitel}>
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    <div className={styles.SignInInput}>
                        <input placeholder='Name'></input>
                    </div>
                    <div className={styles.SignInInput}>
                        <input placeholder='@mail'></input>
                    </div>
                    <div className={styles.SignInInput}>
                        <input placeholder='Password'></input>
                    </div>
                    <div className={styles.SignInInput}>
                        <input placeholder=' Repiat password'></input>
                    </div>
                    <div className={styles.Button}>
                        <p>Sign Up</p>
                    </div>
                </div>
            </div>
        </>
    )
}