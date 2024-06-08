"use client";
import styles from './Header.module.scss'
import IPT from '../ImgPlusText/IPT'
import Image from 'next/image'
import ImgButton from './ImgButton'
import Link from 'next/link';
// import { useSession, signOut } from "next-auth/react";
import { signIn, signOut, useSession } from "next-auth/react";

import { useState } from 'react';
import SignInMenu from '../SignInMenu/SignInMenu';
import SignOutMenu from '../SignInMenu/SignOutMenu';
import UserMenu from '../UserMenu/UserMenu';
// import RightSite from './RightSite'

export default function Header() {
    const session = useSession();
    const [isHideSM, setIsHideSM] = useState(true);
    const [isHideSOM, setIsHideSOM] = useState(true);
    const [isHideUM, setIsHideUM] = useState(true);

    const SignInClick = () => {
        setIsHideSM(!isHideSM);

    };
    const SignOutClick = () => {
        setIsHideSOM(!isHideSOM);
        setIsHideUM(true);
    };
    const BurgerClick = () => {
        setIsHideUM(!isHideUM);
        setIsHideSOM(true);
    };
    return (
        <>
            <div className={styles.Empty}></div>
            <div className={styles.Header}>
                <div className={styles.Header}>
                    <Link href={`/`} className={styles.Logo}>
                        <Image src='/Logotip_White.png' priority alt='' width={500} height={500} />
                        <p>PickArt</p>
                    </Link>
                    <div className={styles.RightSite}>
                        <input id='Search' placeholder="Search"></input>
                        {session?.data ? (
                            <>
                            {/* <div>{session.data.user.Name}</div> */}
                            <Link href={`/UpLoad`} className={styles.Logo}>
                                <ImgButton img={"/Loading_Wite.png"} ></ImgButton>
                            </Link>
                                {/* onClick={() => signOut({ callbackUrl: "/" })} */}
                                <div onClick={SignOutClick} >
                                    <IPT title={session.data.user.Name} img={"http://localhost:3001/Avatars/"+session.data.user?.Avatar}  ></IPT>
                                </div>
                                <div onClick={BurgerClick} className={isHideUM ? styles.ImgButton : styles.ImgButtonClick}>
                                    <ImgButton img={"/BM.png"}></ImgButton>
                                </div>
                            </>
                        ) : (
                            <div onClick={() => signIn()}>
                                <IPT title={"Sign In"} img='/Login_White.png'  ></IPT>
                            </div>
                        )}
                    </div >
                </div>
                {/* {!isHideSM && !session?.data ? <SignInMenu></SignInMenu> : <div></div>} */}
                {!isHideSOM && session?.data ? <SignOutMenu></SignOutMenu> : <div></div>}
                {!isHideUM && session?.data ? <UserMenu></UserMenu> : <div></div>}
            </div>
        </>
    )
}