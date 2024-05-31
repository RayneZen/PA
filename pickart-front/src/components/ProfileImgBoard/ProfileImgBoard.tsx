"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios"
import styles from './ProfileImgBoard.module.scss'
import ImgPreview from "../ImgBoard/ImgPreview";



interface Art {
    ArtWorkId: number;
    Title: string;
    FileName: string;
}

const filePath = "http://localhost:3001/Arts/";

export default function ImgBoard({ProfileId}:{ProfileId: number}) {
    
    const [arts, setArts] = useState<Art[]>([]);
    const [fetching, setFetching] = useState<boolean>(false);
    // const [currentPage, setCurrentPage] = useState<number>(1);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
    // console.log("Id ",ProfileId);

    useEffect(() => {
        if (isInitialLoad) {
            setFetching(true);
        }
    }, [isInitialLoad]);

    useEffect(() => {
        if (fetching) {
            axios.get<Art[]>(`http://localhost:3001/CreatedBy?AuthorId=${ProfileId}`)
                .then(response => {
                    setArts(arts => [...arts, ...response.data]);
                })
                .finally(() => {
                    setFetching(false);
                    if (isInitialLoad) {
                        setIsInitialLoad(false);
                    }
                });
        }
    }, [fetching]);

    // useEffect(() => {
    //     const scrollHandler = () => {
    //         if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {
    //             setFetching(true);
    //         }
    //     }
    //     document.addEventListener('scroll', scrollHandler);
    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler);
    //     };
    // }, [fetching]);

    return (
        <>
            <div className={styles.MidBar}></div>
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