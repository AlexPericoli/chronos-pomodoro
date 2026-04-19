import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

import styles from './styles.module.css';

export function Cycles() {
   const { state } = useTaskContext();

   const cycles = Array.from({ length: state.currentCycle });

   return (
      <div className={styles.cycles}>
         <span>Ciclos:</span>

         <div className={styles.cycleDots}>
            {cycles.map((_, index) => {
               const nextCycle = getNextCycle(index);
               const nextCycleType = getNextCycleType(nextCycle);

               return (
                  <span
                     key={`${nextCycle}_${nextCycleType}`}
                     title={`Indicador de ciclo: ${nextCycleType}`}
                     aria-label={`Indicador de ciclo: ${nextCycleType}`}
                     className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                  ></span>
               );
            })}
         </div>
      </div>
   );
}
