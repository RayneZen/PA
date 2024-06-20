"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios"
import styles from './ProfileImgBoard.module.scss'
import ImgPreview from "../ImgBoard/ImgPreview";
import { signIn, signOut, useSession } from 'next-auth/react';
import { API_URL } from "../../../Const";



interface Art {
    ArtWorkId: number;
    Title: string;
    FileName: string;
}

const filePath = `${API_URL}/Arts/`;

export default function ImgBoard({ ProfileId }: { ProfileId: number }) {

    const [arts, setArts] = useState<Art[]>([]);
    const [fetching, setFetching] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
    const [isPartfolio, setIsPartfolio] = useState<boolean>(true);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    useEffect(() => {
        if (isInitialLoad) {
            setFetching(true);
        }
    }, [isInitialLoad]);

    useEffect(() => {
        if (fetching) {
            if (isPartfolio) {
                axios.get<Art[]>(`${API_URL}/CreatedBy?page=${currentPage}&AuthorId=${ProfileId}`)
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
            } else if (isLiked) {
                axios.get<Art[] | null>(`${API_URL}/LikedBy?page=${currentPage}&AuthorId=${ProfileId}`)
                    .then(response => {
                        setArts(arts => [...arts, ...response.data!]);
                        setCurrentPage(currentPage + 1);
                    })
                    .finally(() => {
                        setFetching(false);
                        if (isInitialLoad) {
                            setIsInitialLoad(false);
                        }
                    });
            }
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
    const session = useSession();
    const PartfolioClick = () => {
        setIsPartfolio(true);
        setIsLiked(false);
        setCurrentPage(1);
        setArts([]);
        setFetching(true);
    }; const LikedClick = () => {
        setIsPartfolio(false);
        setIsLiked(true);
        setCurrentPage(1);
        setArts([]);
        setFetching(true);
    };
    return (
        <>
            <div className={styles.MidBar}>
                <p onClick={PartfolioClick} className={isPartfolio ? styles.Active : styles.Passive}>Partfolio</p>
                <p onClick={LikedClick} className={isLiked ? styles.Active : styles.Passive}>Liked</p>
            </div>
            <div className={styles.ImgBoard}>
            {arts.length > 0 ? (
                    arts.map((post: Art) => (
                        <Link href={`/Art/${post.ArtWorkId}`} key={post.ArtWorkId}>
                            <ImgPreview key={post.ArtWorkId} title={post.Title} img={filePath + post.FileName} />
                        </Link>
                    ))
                ) : (
                    <h1>Loading</h1>
                )}
            </div>
        </>
    )
}