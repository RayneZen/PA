"use client"
import styles from './SubButton.module.scss'
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios"
import React, { useEffect, useState } from "react";



export default function SubButton() {
    const session = useSession();
    return (
        <>
         {session?.data ? <></>: <></>}
            <div className={styles.Button}>Subscribe</div>
        </>
    )
}