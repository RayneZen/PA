import IPT from '../ImgPlusText/IPT';
import SubButton from '../SubButton/SubButton';
import styles from './Art.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import Comment from '../Comment/Comment';

export default function ArtInfo({ Title, Login }: { Title: string, Login: string }) {
    const Liks: number = 1;
    return (
        <>
            <div className={styles.ArtInfo}>
                <div className={styles.AuthorInfo}>
                    <Link href={`/`}>
                        <IPT title={Login} img="/Login_White.png" size='L'></IPT>
                    </Link>
                    <SubButton></SubButton>
                </div>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTopCenter}>
                        <text>{Title}</text>
                        <p>8 hours ago</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                        <div>
                            <div>
                                <Image src="/likesWhite.png" alt="Liks" width={32} height={32} />
                                <p>{Liks + " Likes"}</p>
                            </div>
                            {/* <IPT title={String(Liks+" Likes")} img='/Login_White.png' size='S'></IPT> */}
                            <div>
                                <Image src="/viewsWhite.png" alt="Views" width={32} height={32} />
                                <p>{Liks + " Views"}</p>
                            </div>
                            <div>
                                <Image src="/commentsWite.png" alt="Comments" width={32} height={32} />
                                <p>{Liks + " Comments"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Description:</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                        <text>Пример большого длинного текста для описания произведения исскуства, такого как показано слево от блока на котором написано описание. Этого еще мало поэтому нужно добавить дополнительный текст. вот еще что-то</text>
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
                        <Comment author="Admin" avatar="/likesWhite.png" comment="Text comment!"></Comment>
                        <Comment author="Admin" avatar="/likesWhite.png" comment="Text comment!"></Comment>
                    </div>
                </div>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Tegs:</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                    </div>
                </div>
                <div className={styles.Conteiner}>
                    <div className={styles.ConteinerTop}>
                        <p>Add to group:</p>
                    </div>
                    <div className={styles.ConteinerInside}>
                    </div>
                </div>
            </div>
        </>
    )
}