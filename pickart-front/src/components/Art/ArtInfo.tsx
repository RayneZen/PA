import IPT from '../ImgPlusText/IPT';
import SubButton from '../SubButton/SubButton';
import styles from './Art.module.scss'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Link from 'next/link';

import Comments from './Comment';
import ArtTitle from './ArtTitle';
import Tegs from './Tegs';

export default function ArtInfo({ArtWorkId, Title, Name,AuthorId,AuthorImg }: {ArtWorkId:number, Title: string, Name: string,AuthorId: number,AuthorImg:string}) {
       return (
        <>
            <div className={styles.ArtInfo}>
                <div className={styles.AuthorInfo}>
                    <Link href={`/Profile/${AuthorId}`}>
                        <IPT title={Name} img={AuthorImg} size='L'></IPT>
                    </Link>
                    <SubButton AuthorId={AuthorId} ></SubButton>
                </div>
                <ArtTitle ArtWorkId={ArtWorkId} Title={Title}></ArtTitle>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Description:</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                        <p>Пример большого длинного текста для описания произведения исскуства, такого как показано слево от блока на котором написано описание. Этого еще мало поэтому нужно добавить дополнительный текст. вот еще что-то</p>
                    </div>
                </div>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Comments:</p>
                    </div>
                    <div className={styles.Comments}>
                        <div className={styles.CommentInput}>
                            <IPT title=' ' img="/likesWhite.png" size='S'></IPT>
                            {/* <Image src="/likesWhite.png" alt="Liks" width={32} height={32} /> */}
                            <input placeholder='Comment'></input>
                            <div className={styles.Send} >
                                <p>
                                    Send
                                </p>
                                <div className={styles.arrow}></div>
                                {/* <Image src="/Send.png" alt="Liks" width={32} height={32} /> */}
                                {/* <img src='LibraryTransparent.png' onmouseover="this.src='LibraryHoverTrans.png';" onmouseout="this.src='LibraryTransparent.png';" /> */}
                            </div>
                        </div>
                        <Comments ArtWorkId={ArtWorkId}></Comments>
                    </div>
                </div>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Tegs:</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                        <Tegs ArtWorkId={ArtWorkId}></Tegs>
                    </div>
                </div>
                {/* <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Add to group:</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                    </div>
                </div> */}
            </div>
        </>
    )
}