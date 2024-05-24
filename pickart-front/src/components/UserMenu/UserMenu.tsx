import Link from 'next/link'
import styles from './UserMenu.module.scss'
import { GoogleButton } from '../GoogleButton/GoogleButton'


export default function Menu() {
    return (
        <div>
            <div className={styles.Menu}>
                <ul>
                    <li>
                        <Link className={styles.Link} href={`/Profile`}>Profile</Link>
                    </li>
                    <li>
                        <Link className={styles.Link} href={`/Settings`}>Settings</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}