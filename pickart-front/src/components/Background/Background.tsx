import styles from './Background.module.scss'
import Image from 'next/image'
export default function Gallery ({Background="Background",Logo="/Logotip_Black.png",Title="PickArt",Description="A project for the promotion and development of art."}:{Background?: string,Logo?: string,Title?: string,Description?: string}) {
    return(
        <>
            <div className={styles.BackImg}>
                <div className={styles.Content}>
                    <div className={styles.Logo}>
                        <Image src={Logo} priority alt='' width={500} height={500} />
                        <p>{Title}</p>
                     </div>
                    <p>{Description}</p>
                </div>
            </div>
        </>
    )
}