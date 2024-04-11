// const timer = () => {

//   let timer = 600; // 10 минут в секундах

//   const timerInterval = setInterval(function () {
//       const minutes = Math.floor(timer / 60);
//       let seconds = timer % 60;

//       if (seconds < 10) {
//           seconds = '0' + seconds;
//       }

//       console.log(minutes + ':' + seconds);

//       if (--timer < 0) {
//           clearInterval(timerInterval);
//           console.log('Время вышло!');
//       }
//   }, 1000);

//   return timer
// }


// export default timer;