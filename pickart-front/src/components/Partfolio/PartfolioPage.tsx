import styles from './Partfolio.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link';



const filePath = "http://localhost:3001/Arts/";

export default function PartfolioPage() {

    return (
        <>
            <div className={styles.PBoard}>
                <div>
                    <div className={styles.Conteiner}>
                        <Image src={'/TopTyn.jpg'} priority alt='' width={400} height={400} />
                        <div>
                            <p>Title</p>
                            <div>
                                <div className={styles.Button}>Delete</div>
                                <div className={styles.Button}>View</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

