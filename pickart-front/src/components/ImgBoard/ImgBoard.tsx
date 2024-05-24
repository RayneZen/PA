"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios"
import styles from './ImgBoard.module.scss'
import ImgPreview from './ImgPreview'
import MidBar from './MidBar'

interface Art {
    ArtWorkId: number;
    Title: string;
    FileName: string;
}

const filePath = "http://localhost:3001/Arts/";

export default function ImgBoard() {
    const [arts, setArts] = useState<Art[]>([]);
    const [fetching, setFetching] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    useEffect(() => {
        if (isInitialLoad) {
            setFetching(true);
        }
    }, [isInitialLoad]);

    useEffect(() => {
        if (fetching) {
            axios.get<Art[]>(`http://localhost:3001/?page=${currentPage}`)
                .then(response => {
                    setArts(arts => [...arts, ...response.data]);
                    setCurrentPage(currentPage + 1);
                })
                .finally(() => {
                    setFetching(false);
                    if (isInitialLoad) {
                        setIsInitialLoad(false);
                    }
                });
        }
    }, [fetching]);

    useEffect(() => {
        const scrollHandler = () => {
            if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {
                setFetching(true);
            }
        }
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, [fetching]);

    return (
        <>
            <MidBar></MidBar>
            <div className={styles.ImgBoard}>
                {arts.map((post: Art) => {
                    return (
                        <Link href={`/Art/${post.ArtWorkId}`} >
                            <ImgPreview key={post.ArtWorkId} title={post.Title} img={filePath + post.FileName}></ImgPreview>
                        </Link>
                    )
                })
                }
            </div>
        </>
    )
}