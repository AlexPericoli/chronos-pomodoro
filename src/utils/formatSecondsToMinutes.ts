export function convertSecondsToMinutes(seconds: number) {
   seconds = 70;
   const minutesRemaining = String(Math.floor(seconds / 60)).padStart(2, '0');
   const secondsRemaining = seconds % 60;

   return `${minutesRemaining}:${secondsRemaining}`;
}
