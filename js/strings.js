x = "Hello "
y = '     Hi    '
z = x+y   //for concatenation
console.log(z)  //HelloHi
console.log(x.length)   //5
console.log(x.charAt(1))  //e
console.log(x[0])  //H

console.log(x.slice(1,3))    //el
console.log(x.slice(2))  //llo
console.log(x.slice(-2))  //lo

console.log(x.substring(1,3)) //el
console.log(x.substring(-2))   //hello

console.log(x.toUpperCase())  //HELLO
console.log(x.toLowerCase())  //hello

console.log(y.trim())   //hi

console.log(x.repeat(3))  //Hello Hello Hello

a= "Rudra"
console.log(a.replace('a','e'))  // replace 1st a to e
console.log(a.replaceAll('a','e'))  //  replace all a to e

p="12 44 56 77 3 67"
console.log(p.slice(" "))
console.log(p)

console.log(x.indexOf('l'))   //2
console.log(x.lastIndexOf('l'))  //3

console.log(x.includes('e'))  //true  check character present or not in string

//Convert to str to str-list.
str ="cake,biscuit,apple,fish"
console.log(str.split(","))   //['cake','biscuit','apple','fish']
 

console.log(typeof("sampa"))  //string
console.log(typeof(34.8))  //number

console.log(1==='1')  //false
console.log(1=='1')   //true