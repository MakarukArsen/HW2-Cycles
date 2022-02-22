let n = +prompt("Введіть перше число", 1);
while(Number.isNaN(n) || !Number.isInteger(n) || n == null){
    alert("Це не число");
    n = +prompt("Введіть перше число", 1);
}

let m = +prompt("Введіть друге число", 10);
while(Number.isNaN(m) || !Number.isInteger(m) || m == null){
    alert("Це не число");
    m = +prompt("Введіть друге число", 10);
}

let skipPairNumbers = confirm("Пропускати парні числа?");
let total;
for(total = 0; n <= m; ++n){
    if(skipPairNumbers && n % 2 == 0 ){
        continue
        total += n
        console.log(total)
    } else{
        total += n
        console.log(total)
        
    }
}
alert(total);
