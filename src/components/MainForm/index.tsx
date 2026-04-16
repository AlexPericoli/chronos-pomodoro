import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton/inde';
import { DefaultInput } from '../DefaultInput/inde';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
   const { setState } = useTaskContext();

   function handleClick() {
      setState(prevState => {
         return {
            ...prevState,
            formattedSecondsRemaining: '16:03',
         };
      });
   }

   return (
      <>
         <form action='' className='form'>
            <button type='button' onClick={handleClick}>
               Mariana Ximenes
            </button>
            <div className='formRow'>
               <DefaultInput id='input' labelText='Task' type='type' placeholder='Digite algo...' />
            </div>

            <div className='formRow'>
               <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='formRow'>
               <Cycles />
            </div>

            <div className='formRow'>
               <DefaultButton icon={<PlayCircleIcon />} />
            </div>
         </form>
      </>
   );
}
