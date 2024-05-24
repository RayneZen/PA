import IPT from '../ImgPlusText/IPT'
import styles from './Comment.module.scss'


export default function Comment ({author,avatar,comment}:{author:string,avatar:string,comment:string}) {
    return (
        <>
            <div className={styles.Conteiner}>
                <div className={styles.ConteinerTop}>
                    <IPT title={author} img={avatar} size='S'></IPT>
                    <p>8 hours ago</p>
                </div>
                <div className={styles.ConteinerInside}>
                    <text>{comment}</text>
                </div>
            </div>
        </>
    )
}