"use client"
import styles from './Styles.module.scss'
import Art from '@/components/Art/Art';
import { usePathname } from 'next/navigation'
export default function ArtPage({ params }: { params: { Id: number } }) {
  return (
    <main >
      <Art id={params.Id}></Art>
    </main>
  );
}
