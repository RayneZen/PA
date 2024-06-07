"use client"
import React, { useEffect, useState } from "react";
import axios from "axios"
import styles from './Art.module.scss'
import IPT from "../ImgPlusText/IPT";
import Link from "next/link";



interface Comment {
    ArtWorkId: number;
    CommentatorId: number;
    Name: string;
    Avatar: string;
    CommentText: string;
}

const filePath = "http://localhost:3001/Arts/";
const AvatarPath = "http://localhost:3001/Avatars/";


export default function Art({ ArtWorkId }: { ArtWorkId: number }) {
    const [comment, setComment] = useState<Comment[]>([]);
    const [fetching, setFetching] = useState<boolean>(false);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
    useEffect(() => {
        if (isInitialLoad) {
            setFetching(true);
        }
    }, [isInitialLoad]);

    useEffect(() => {
        if (fetching) {
            axios.get<Comment[]>(`http://localhost:3001/Comments?ArtWorkId=${ArtWorkId}`)
                .then(response => {
                    console.log("Comments ", response.data);
                    setComment(comment => [...comment, ...response.data]);
                })
                .finally(() => {
                    setFetching(false);
                    if (isInitialLoad) {
                        setIsInitialLoad(false);
                    }
                });
        }
    }, [fetching]);


    console.log("Length ", comment.length);
    if (comment.length <= 0) {
        return <div className={styles.CommentInside} >This work has no comments yet.</div>;
    } else {
        return (
            <>
                {comment.map((comment: Comment) => {
                    return (
                        <div className={styles.Comment}>
                            <div className={styles.CommentTop}>
                                <Link href={`/Profile/${comment.CommentatorId}`}>
                                    <IPT title={comment.Name} img={AvatarPath + comment.Avatar} size='M'></IPT>
                                </Link>
                                <p className={styles.time}>8 hours ago</p>
                            </div>
                            <div className={styles.CommentInside}>
                                <text>{comment.CommentText}</text>
                            </div>
                        </div>
                    )
                })
                }
            </>
        );
    }

};








// else if (comment.length <= 3) {
//     return (
//         <>
//             {comment.map((comment: Comment) => {
//                 return (
//                     <div className={styles.Comment}>
//                         <div className={styles.CommentTop}>
//                             <Link href={`/Profile/${comment.CommentatorId}`}>
//                                 <IPT title={comment.Name} img={AvatarPath + comment.Avatar} size='M'></IPT>
//                             </Link>
//                             <p className={styles.time}>8 hours ago</p>
//                         </div>
//                         <div className={styles.CommentInside}>
//                             <text>{comment.CommentText}</text>
//                         </div>
//                     </div>
//                 )
//             })
//             }
{/* <div className={styles.Button}> <p>Load more</p> </div> */ }
//         </>
//     );
// }