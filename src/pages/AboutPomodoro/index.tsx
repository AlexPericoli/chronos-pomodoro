import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { MainTemplate } from '../../templates/MainTemplates';

export function AboutPomodoro() {
   return (
      <MainTemplate>
         <Container>
            <GenericHtml>
               <h1>Página não encontrada</h1>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, neque quos? Reprehenderit
                  similique odit minima accusamus velit incidunt nesciunt, ea facilis harum eligendi sequi deleniti
                  atque quae vel pariatur vero!
               </p>
            </GenericHtml>
         </Container>
      </MainTemplate>
   );
}
