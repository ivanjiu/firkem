function mergeAlternately(word1, word2){
    let ans = [];

    for(let i=0; i<Math.max(word1.length, word2.length); i++){
        if(i<word1.length){
            ans.push(word1[i]);
        }
        if(i<word2.length){
            ans.push(word2[i]);
        }
    }
    return ans.join("");
}


// console.log(mergeAlternately("abc", "pqr"));    // Output: "apbqcr"
// console.log(mergeAlternately("ab", "pqrs"));   // Output: "apbqrs"
// console.log(mergeAlternately("abcd", "pq"));   // Output: "apbqcd"

arr = [1,2,5,6,8,9,10,15,20,25,30,35,40,45,50];

function linearSearch(arr, target){
    // arr.forEach((elem, index) => {
    //     if(elem == target){
    //         return index;
    //     }
    //     console.log(elem, index);
    // })
    // return arr.findIndex((elem, index) => {
    //     if(elem == target) return index;
    //     console.log(elem);
    // })
   return arr.findIndex(elem => {if(elem==target){console.log("ahahahaha"); return true;}});
}

// console.log(linearSearch(arr, 20));   // Output: 7

const a1 = [1,2,3];
a1.forEach(elem => elem*2);
// console.log(a1);   // Output: [1,2,3]

const myobj = {
    name: "John",
    age: 30,
    city: "New York"
};
delete myobj.name;
// for(let i of Object.values(myobj)){
//     console.log(i);
// }
// console.log(myobj.helloworodl);

// console.log(Object.keys(myobj));
// console.log(Object.values(myobj));
// console.log(Object.entries(myobj));

const myobj2 = {
    name: "John",
    age: 30,
    isAdmin: {
        grade:"z",
    }
};

// for(let i in myobj2){
//     console.log(i, myobj2[i]);
// }

// for(let i of Object.keys(myobj2)){
//     console.log(i, myobj2[i]);
// }

// console.log(undefined + 3);

let nestes = {
    id:1,
    name:["p1","p2", "p3"],
    details:{
        id:2,
        name:["p4"],
        details:{
            id:3,
            name:["p4","p2"],
            details:{
                id:4,
                name:["p3","p4"],
            }
        }
    }
}

function make(nestes){
    let ans = {};

    helper(nestes, ans);

    return ans;
}

function helper(nestes, ans){
    if(!nestes) return;

    for(let n of nestes.name){
        ans[n] = ans[n] ? ans[n]+1 : 1;
    }
    
    helper(nestes.details, ans);
    
    return ans;
}


// console.log(make(nestes));


const arr4 = [2,3,23,12,12,23,4,6,8,65];
// arr4.sort((a,b) => a-b);
// console.log(arr4);


function selectionSort(arr){
    for(let i=arr.length-1; i>=0; i--){
        let currMaxIndex = i;
        for(let j=0; j<i; j++){
            if(arr[currMaxIndex] < arr[j]){
                currMaxIndex = j;
            }
        }
        let temp = arr[currMaxIndex];
        arr[currMaxIndex] = arr[i];
        arr[i] = temp;
    }
}

function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

bubbleSort(arr4);
// console.log(arr4);

const m1 = new Map();
m1.set("name", "John");
m1.set("age", 30);
m1.set(true, "isAdmin");
m1.set(null, "nullValue");

// console.log(m1.get(true));
// console.log(m1.keys());

for(let [k,v] of m1){
    // console.log(k);
    // console.log(m1.get(k));
}

arr9 = new Array();
// console.log(arr9[1212]);

// console.log({} instanceof Set);

const em = [
    {name:"John", age:30},
    {name:"Jane", age:25},
    {name:"Jim", age:35}   
];

// const funn = em.map((elem) => elem.name);
// console.log(funn)

const foundS = em.find((elem) => elem.age ==300);
// console.log(foundS);

const db = ['apple', 'banana', 'grape', 'orange', 'mango'];
for(let i of db){
    // console.log(i);
}

const [firstElem, ...rest]=[...db];
// console.log(firstElem);
// console.log((-3_21).toString());
console.log(!undefined)
console.log("aaa");