"use client"
import Background from '@/components/Background/Background';
import ImgBoard from '@/components/ImgBoard/ImgBoard';
import ProfileImgBoard from '@/components/ProfileImgBoard/ProfileImgBoard';
import { usePathname } from 'next/navigation'
import Profile from '@/components/Profile/Profile'
export default async function ProfilePage({ params }: { params: { Id: number } }) {
    return (
        <main >
            <Profile Id={params.Id}></Profile>
        </main>
    );
}
