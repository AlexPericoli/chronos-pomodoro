import './styles/theme.css';
import './styles/global.css';

import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import React, { useEffect } from 'react';

type MainTemplateProps = {
   children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
   useEffect(() => {
      const storageTheme = localStorage.getItem('theme')?.toString();
      console.log('🚀 ~ App ~ theme:', storageTheme);
   }, []);

   return (
      <>
         <Container>
            <Logo />
         </Container>

         <Container>
            <Menu />
         </Container>

         {children}

         <Container>
            <Footer />
         </Container>
      </>
   );
}
