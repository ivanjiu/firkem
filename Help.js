function isPali(n){
    temp = String(n);

    let lo = 0, hi = temp.length - 1;
    while(lo<hi){
        if(temp[lo] != temp[hi]){
            return false;
        }
        lo++;
        hi--;
    }
    return true;
}

const z = function fib(n){
    if(n<=1) return n;
    let v1=0;
    let v2=1;
    let ans = 0;
    for(let i=0; i<=n-2; i++){
        ans = v1+v2;
        v1 = v2;
        v2 = ans;
    }
    return ans;
}

const missing = (arr) => {
    let end = arr.length;
    for(let i=0; i<=end; i++){
        if(!arr.includes(i)) return i;
    }
}

// console.log(z(6));
// console.log(isPali(121));
// console.log(missing([3,0,1,2,5]));

let a3 = [1,2,'aaa',{lalwa:"aa"}]
console.log(a3.unshift(8));
console.log(a3.shift())
console.log(a3);