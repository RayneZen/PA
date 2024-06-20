"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import axios from "axios";
import styles from './Partfolio.module.scss';
import ImgPreview from "../ImgBoard/ImgPreview";
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { API_URL } from '../../../Const';


interface Art {
    ArtWorkId: number;
    Title: string;
    FileName: string;
}
const filePath = `${API_URL}/Arts/`;

export default function PartfolioImgBoard({ ProfileId }: { ProfileId: number }) {
    const session = useSession();

    useEffect(() => {
        if (session.status === "authenticated") {
            axios.defaults.headers.common['Authorization'] = `Bearer ${session.data?.user.token}`;
        }
    }, [session]);

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
        }
    }, [fetching, isInitialLoad]);

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

    const DeleteArt = useCallback(async (ArtWorkId: number) => {
        axios.post(`${API_URL}/DeleteArtWork?ArtWorkId=${ArtWorkId}`)
            .then(() => {
                setArts(arts => arts.filter((art) => art.ArtWorkId !== ArtWorkId));
            })
            .finally(() => {
                setFetching(true);
            });
    }, []);

    return (
        <>
            <div className={styles.ImgBoard}>
                {arts.map((post) => (
                    <div key={post.ArtWorkId} className={styles.Conteiner}>
                        <div className={styles.Right}>
                            <Image className={styles.IMG} src={filePath + post.FileName} priority alt='' width={400} height={400} />
                        </div>
                        <div className={styles.Left}>
                            <div className={styles.Top}>
                                <p>{post.Title}</p>
                            </div>
                            <div className={styles.Bottom}>
                                <div className={styles.Button} onClick={() => DeleteArt(post.ArtWorkId)}>Delete</div>
                                <Link className={styles.Link} href={`/Art/${post.ArtWorkId}`}>
                                    <div className={styles.Button}>View</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
                }
                {(fetching && currentPage<1) && <h1>Loading</h1>} 

            </div>
        </>
    );
}