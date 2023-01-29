function pluralize(words) {
  let obj = {}
  for (const value of words) {
      obj[value] = (obj[value] || 0) + 1
  }

  const arr = []
  for (const prop in obj) {
      if (obj[prop] > 1) {
          arr.push(prop + 's')
      } else arr.push(prop)
  }
  
  console.log(arr)
}

pluralize(["moo-moo", "moo-moo", "moo-moo", "piggy"]);
pluralize(["mango", "mango", "table"]);
pluralize(["arm", "foot", "arm"]);