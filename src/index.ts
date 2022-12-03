import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

function multpler(num: number) {
  return num * 2;
}
console.log(`multipler ${multpler(2)}`);

function sumOfArray(arr: number[]) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function sumAr(arr: Array<number>) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(`sum of array is ${sumOfArray([1, 2, 3, 4])}`);
console.log(`sum of ar is  ${sumAr([1, 2, 3, 4])}`);
