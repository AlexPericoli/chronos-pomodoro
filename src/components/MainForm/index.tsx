import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton/inde';
import { DefaultInput } from '../DefaultInput/inde';

export function MainForm() {
   return (
      <form action='' className='form'>
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
   );
}
