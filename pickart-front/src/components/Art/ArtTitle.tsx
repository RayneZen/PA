import Image from 'next/image'
import styles from './Art.module.scss'
import { signIn, signOut, useSession } from 'next-auth/react';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';

export default function ArtTitle({ Title, ArtWorkId }: { Title: string, ArtWorkId: number }) {
    const session = useSession();
    const [views, setViews] = useState();
    const [liks, setLiks] = useState();
    const [comments, setComments] = useState();
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (session.status === "authenticated") {
        //     axios.defaults.headers.common['Authorization'] = `Bearer ${session.data?.user.token}`;
            setFetching(true);
        }
    }, [session]);

    useEffect(() => {
        if (fetching) {
            // console.log("sesion: ", session.status);
            axios.get(`http://localhost:3001/CountInfo?ArtWorkId=${ArtWorkId}`)
                .then((response) => {
                    setViews(response.data.Views);
                    setLiks(response.data.Liks);
                    setComments(response.data.Comments);
                })
                .finally(() => {
                    setFetching(false);
                });
        }
    }, [fetching]);

    return (
        <>
            <div className={styles.Conteiner}>
                <div className={styles.ConteinerTopCenter}>
                    <text>{Title}</text>
                    <p>8 hours ago</p>
                </div>
                <div className={styles.ConteinerInside}>
                    <div>
                        <div>
                            <Image src="/likesWhite.png" alt="Liks" width={32} height={32} />
                            <p>{liks + " Likes"}</p>
                        </div>
                        {/* <IPT title={String(Liks+" Likes")} img='/Login_White.png' size='S'></IPT> */}
                        <div>
                            <Image src="/viewsWhite.png" alt="Views" width={32} height={32} />
                            <p>{views + " Views"}</p>
                        </div>
                        <div>
                            <Image src="/commentsWite.png" alt="Comments" width={32} height={32} />
                            <p>{comments + " Comments"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


