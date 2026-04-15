import type React from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
   icon: React.ReactNode;
   color?: 'buttonColorGreen' | 'buttonColorRed';
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, color = 'buttonColorGreen', ...rest }: DefaultButtonProps) {
   return (
      <>
         <button className={`${styles.button} ${styles[color]}`} {...rest}>
            {icon}
         </button>
      </>
   );
}
