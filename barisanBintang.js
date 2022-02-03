/* menyusun barisan bintang */
let baris = 5;
for (let i = 0; i < baris; i++) {
    console.log("*");
}

console.log("######");

/* menyusun barisan angka */

let n = 6;
let star = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
console.log("######");
console.log("       ");

/* menyusun barisan angka */

let m = 3;

let bintang = "";
// External loop
for (let i = 1; i <= m; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    bintang += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if (k % 2 === 0) {
        bintang += "x";
    }
    if (k % 2 !== 0) {
        bintang += "o";
    }  
  }
  bintang += "\n";
}
console.log(bintang);