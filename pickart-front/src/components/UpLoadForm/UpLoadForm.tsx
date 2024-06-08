import styles from './UpLoadForm.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';

export default function UpLoadForm() {
    return (
        <div className={styles.UpLoadForm}>
            <div className={styles.Conteiner}>
                <div className={styles.ConteinerTop}>
                    <p>Art title:</p>
                </div>
                <div className={styles.ConteinerInside}>
                    <input placeholder='Title'></input>
                </div>
            </div>
            <div className={styles.Conteiner}>
                <div className={styles.ConteinerTop}>
                    <p>Upload art:</p>
                </div>
                <div>
                    <div className={styles.Button}>
                        Pick File
                    </div>
                </div>
            </div>
            <div className={styles.Conteiner}>
                <div className={styles.ConteinerTop}>
                    <p>Art description:</p>
                </div>
                <div className={styles.ConteinerInside}>
                    <input placeholder='Description'></input>
                </div>
            </div>
            <div className={styles.Conteiner}>
                <div className={styles.ConteinerTop}>
                    <p>Art tegs:</p>
                </div>
                <div className={styles.ConteinerInside}>
                    <input placeholder='Tegs'></input>
                </div>
            </div>
            <div className={styles.UpButton}>
                Upload Art
            </div>
        </div>
    );
};

