import styles from './Background.module.scss'
import Image from 'next/image'
export default function Gallery () {
    return(
        <>
            <div className={styles.BackImg}>
                <div className={styles.Content}>
                    <div className={styles.Logo}>
                        <Image src='/Logotip_Black.png' priority alt='' width={500} height={500} />
                        <p>PickArt</p>
                     </div>
                    <p>A project for the promotion and development of art.</p>
                </div>
            </div>
        </>
    )
}