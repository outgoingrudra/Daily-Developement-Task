var BinaryConverter = (num) => {

    let ans = ""
    while (num > 0) {
        let rem = num % 2
        ans = rem+ans
        num= Math.floor(num /2)
    }
    return ans ? ans : "0"
}


for (let i = 0; i < 10; i++)
     console.log(BinaryConverter(i))




const arr = [12, 47, 22,11, 7, 9]


let max = arr[arr.length - 1]

const output = [arr[arr.length - 1]]

for (let i = arr.length - 2; i >= 0; i--){
    if (arr[i] >= max)
    {
        output.push(arr[i])
        max = arr[i]
    }
        
}

console.log(output)


// map method

const nums = [1, 2, 3, 4, 5, 6, 7]

function square(x){ return x*x}

const sq = nums.map(square)

console.log(sq)



// map method


const fruits = ["Apple", "mango","pineapple"]
const flength = fruits.map((x)=> x.length)
console.log(flength)
