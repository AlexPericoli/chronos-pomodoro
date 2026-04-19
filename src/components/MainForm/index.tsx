import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton/inde';
import { DefaultInput } from '../DefaultInput/inde';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { convertSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
   const { state, setState } = useTaskContext();
   const taskNameInput = useRef<HTMLInputElement>(null);

   const nextCycle = getNextCycle(state.currentCycle);
   const nextCycleType = getNextCycleType(nextCycle);

   function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
      event.preventDefault();

      if (taskNameInput.current === null) return;
      const taskName = taskNameInput.current.value.trim();

      if (!taskName) {
         alert('Digite o nome da tarefa');
      }

      // New task
      const newTask: TaskModel = {
         id: Date.now().toString(),
         name: taskName,
         startDate: Date.now(),
         completeDate: null,
         interruptDate: null,
         duration: state.config[nextCycleType],
         type: nextCycleType,
      };

      const secondsRemaining = newTask.duration * 60;
      const formattedSecondsRemaining = convertSecondsToMinutes(secondsRemaining);

      // Task State
      setState(prevState => {
         return {
            ...prevState,
            activeTask: newTask,
            config: { ...prevState.config },
            tasks: [...prevState.tasks, newTask],
            secondsRemaining,
            // formattedSecondsRemaining: '00:00',
            formattedSecondsRemaining,
            currentCycle: nextCycle,
         };
      });
   }

   function handleInterruptTask() {
      // Task State
      setState(prevState => {
         return {
            ...prevState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00',
            tasks: prevState.tasks.map(task => {
               if (prevState.activeTask && prevState.activeTask.id === task.id) {
                  return { ...task, interruptDate: Date.now() };
               }

               return task;
            }),
         };
      });
   }

   return (
      <>
         <form onSubmit={event => handleCreateNewTask(event)} action='' className='form'>
            <div className='formRow'>
               <DefaultInput
                  id='input'
                  labelText='Task'
                  type='type'
                  placeholder='Digite algo...'
                  // value={taskName}
                  // onChange={event => setTaskName(event.target.value)}
                  ref={taskNameInput}
                  disabled={!!state.activeTask}
               />
            </div>

            <div className='formRow'>
               <p>Lorem ipsum dolor sit amet.</p>
            </div>

            {state.currentCycle > 0 && (
               <div className='formRow'>
                  <Cycles />
               </div>
            )}

            <div className='formRow'>
               {!state.activeTask && (
                  <DefaultButton
                     aria-label='Iniciar nova tarefa'
                     title='Iniciar nova tarefa'
                     type='submit'
                     icon={<PlayCircleIcon />}
                     color='buttonColorGreen'
                     key='submit button'
                  />
               )}

               {!!state.activeTask && (
                  <DefaultButton
                     aria-label='Interromper tarefa atual'
                     title='Interromper tarefa atual'
                     color='buttonColorRed'
                     type='button'
                     icon={<StopCircleIcon />}
                     onClick={handleInterruptTask}
                     key='regular button'
                  />
               )}
            </div>
         </form>
      </>
   );
}
