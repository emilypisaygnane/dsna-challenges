const progressDays = (miles) => {
  let progArr = [];
  let progress = 0;
  for (let i = 0; i < miles.length; i++) {
    if (miles[i] < miles[i + 1]) {
      progress++;
      progArr.push(progress);
    }
    return progArr;
  }
};
console.log(progressDays([3, 4, 1, 2]));