var promise = new Promise(function (res, rej){
    rej("message")
});

promise.then(function(input){
    console.log(input)
}).catch(function(input){
    console.log("catch", input)
})

const person1= {
    f: "reza",
    fullname: function(){
        return this.f + " " + this.l
    }
}

const person2 = {
    f: "john",
    l: "d"
}


console.log(person1.fullname.call(person2))
console.log(person1.fullname())

let fun = person1.fullname.bind(person2)
console.log(fun())