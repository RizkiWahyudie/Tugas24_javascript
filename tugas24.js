function sort(){
  var angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
  console.log("Sebelumnya :")
  console. log(angka);
  var angka2 = angka.sort();
  console.log("Ascending :")
  console.log(angka);

  const angka3 = angka.reverse();
  console.log("Descending :")
  return angka3
}

console.log(sort());
