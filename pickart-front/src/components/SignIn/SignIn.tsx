
import LeftSide from '@/components/SignIn/LeftSide'
import styles from './SignIn.module.scss'
import RightSide from './RightSite'

export default function SignIn() {
    return(
        <div className={styles.SignIn}>
            <LeftSide></LeftSide>
            <RightSide></RightSide>
        </div>
    )
}