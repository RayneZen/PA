"use client"
import Background from '@/components/Background/Background';
import SearchImgBoard from '@/components/SearchImgBoard/SearchImgBoard';
import NavButton from '@/components/NavButton/NavButton';
import { usePathname } from 'next/navigation';

export default function SearchPage({ params }: { params: { Data: string } }) {
    return (
        <main>
            <Background isSearch={true} />
            <SearchImgBoard SearchData={params.Data} />
            <NavButton />
        </main>
    );
}