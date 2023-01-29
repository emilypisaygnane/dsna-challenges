function jewelsAndStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;
}


console.log(jewelsAndStones("aA", "aAAbbbb"));
console.log(jewelsAndStones("z", "ZZ"));


