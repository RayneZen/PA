'use client'
import styles from './UpLoadForm.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';

export default function UpLoadForm() {
    const session = useSession();
    useEffect(() => {
        if (session.status === "authenticated") {
            axios.defaults.headers.common['Authorization'] = `Bearer ${session.data?.user.token}`;
        }
    }, [session]);
    const [file, setFile] = useState<File>();
    const [title, setTitle] =  useState('');
    const [description, setDescription] = useState('');
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return
        try {
            const data = new FormData()
            data.set('file', file)
            data.set('Title', title)
            data.set('Description', description)
            const res = await axios.post('http://localhost:3001/UpLoad', data);
            if (!res.ok) console.log(res.data.error);
        } catch (e: any) {
            // Handle errors here
            console.error(e)
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div className={styles.UpLoadForm}>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Art title:</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                        <input placeholder='Title' name='Title' value={title}
                    onChange={(event) => setTitle(event.target.value)}></input>
                    </div>
                </div>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Upload art:</p>
                    </div>
                    <div>
                        <div className={styles.Button}>
                            <input
                                type="file"
                                name="file"
                                onChange={(e) => setFile(e.target.files?.[0])}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Art description:</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                        <input placeholder='Description' name='Description' value={description}
                    onChange={(event) => setDescription(event.target.value)}></input>
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
                    <input type="submit" value="Upload" />
                </div>
            </div>
        </form>
    );
};

