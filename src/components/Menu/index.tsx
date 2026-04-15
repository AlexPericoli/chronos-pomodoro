import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
   const [theme, setTheme] = useState<AvailableThemes>(() => {
      const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
      return storageTheme;
   });

   function handleChangeTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
      event.preventDefault();

      setTheme(prevState => {
         const newTheme = prevState === 'dark' ? 'light' : 'dark';
         return newTheme;
      });
   }

   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
   }, [theme]);

   return (
      <>
         <nav className={styles.menu}>
            <a
               className={styles.menuLink}
               href='#'
               aria-label='Ir para a Home'
               title='Ir para a Home'
               onClick={handleChangeTheme}
            >
               <HouseIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Ir para o Histórico' title='Ir para Histórico'>
               <HistoryIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Ir para Configurações' title='Ir para Configurações'>
               <SettingsIcon />
            </a>
            <a
               className={styles.menuLink}
               href='#'
               aria-label='Mudar Tema'
               title='Mudar Tema'
               onClick={event => handleChangeTheme(event)}
            >
               {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </a>
         </nav>
      </>
   );
}
