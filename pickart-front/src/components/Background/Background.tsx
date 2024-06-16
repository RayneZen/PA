"use client"
import styles from './Background.module.scss';
import React, { useEffect, useState, useRef } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Background({
  isSearch = false,
  Background = "Background",
  Logo = "/Logotip_Black.png",
  Title = "PickArt",
  Description = "A project for the promotion and development of art.",
}: {
  isSearch?: boolean;
  Background?: string;
  Logo?: string;
  Title?: string;
  Description?: string;
}) {
  const inputSearch = useRef(null);
  const router = useRouter();
  const str: string = usePathname();
  const words: string[] = str.split('/'); // Разбиваем строку на массив слов
  const SearchData: string = words[words.length - 1]; // Получаем последнее слово
  const [inputValue, setInputValue] = useState(SearchData);

  const handleSubmit = async () => {
    try {
      if (inputValue !== '') {
        // setInputValue('');
        console.log("Entered!");
        router.push(`/Search/${inputValue}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (inputSearch.current) {
      inputSearch.current.focus();
      const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
          handleSubmit();
        }
      };
      inputSearch.current.addEventListener("keyup", handleKeyUp);
      return () => {
        if (inputSearch.current) {
          inputSearch.current.removeEventListener("keyup", handleKeyUp);
        }
      };
    }
  }, []);

  return (
    <>
      <div className={styles.BackImg}>
        <div className={styles.Content}>
          {!isSearch ? (
            <>
              <div className={styles.Logo}>
                <Image src={Logo} priority alt='' width={500} height={500} />
                <p>{Title}</p>
              </div>
              <p>{Description}</p>
            </>
          ) : (
            <div className={styles.RightSite}>
              <input
                id='Search'
                placeholder="Search"
                ref={inputSearch}
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSubmit();
                  }
                }}
              ></input>
              <div className={styles.Send} onClick={handleSubmit}>
                <p>Send</p>
                <div className={styles.arrow}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}