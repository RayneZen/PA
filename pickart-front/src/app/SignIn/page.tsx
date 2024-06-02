"use client"
import SignIn from '@/components/SignIn/SignIn'
import styles from './Styles.module.scss'
type Props = {
    searchParams?: Record<"callbackUrl" | "error", string>;
};
export default function SignInPage(props: Props) {
    return (
        <main>
            <SignIn error={props.searchParams?.error}
                callbackUrl={props.searchParams?.callbackUrl}></SignIn>
        </main>
    )
}