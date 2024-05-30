"use client"
import React, { useEffect, useState } from "react";
import axios from "axios"
import styles from './Art.module.scss'
import ArtImg from './ArtImg'
import ArtInfo from "./ArtInfo";

interface Art {
    ArtWorkId: number;
    Title: string;
    FileName: string;
    Description: string | null;
    AuthorId: number;
    Date_of_creation: string | null;
    Name: string;
}

const filePath = "http://localhost:3001/Arts/";


export default function Art({ id }: { id: number }) {
    const [art, setArt] = useState<Art | null>(null);
    const [fetching, setFetching] = useState<boolean>(false);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
    useEffect(() => {
        if (isInitialLoad) {
            setFetching(true);
        }
    }, [isInitialLoad]);

    useEffect(() => {
        if (fetching) {
            axios.get<Art[]>(`http://localhost:3001/Art?Id=${id}`)
                .then(response => {
                    setArt(response.data[0]);
                })
                .finally(() => {
                    setFetching(false);
                    if (isInitialLoad) {
                        setIsInitialLoad(false);
                    }
                });
        }
    }, [fetching]);

    if (!art) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={styles.Art}>
                <ArtImg img={filePath + art.FileName} />
                <ArtInfo
                    Title={art.Title}
                    Login={art.Name}
                ></ArtInfo>
            </div>
        );
    }

};