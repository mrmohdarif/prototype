// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const firstObj={
    name:"MOHD ARIF",
    course:"FullStack",
    organization:"Prepbyte",
    detail:function (){
        console.log(`Hello i am ${firstObj.name} i am doing ${firstObj.course} course with ${firstObj.organization}`);
    }
    
}
const secondObj={
    __proto__:firstObj
}
secondObj.detail()

//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

const arrayMethod={
    sumOfall:function ()
    {
        let arr=[1,2,3,4,5,6];
        let sum=0;
        for (i=0;i<arr.length;i++)
        {
            sum+=arr[i];
        }  
        console.log(sum);
    }
}
const secondArrya={
    __proto__:arrayMethod
}
secondArrya.sumOfall();


//Write code to explain prototype chaining


const myName={
    firstName:"MOHD",
    lastName:"ARIF"
}
const course={
    course:"BCA",
    year:2022,
    __proto__:myName,
}
const address={
    pin:410501,
    __proto__:course
}
const fulldetail={
    __proto__:address,
    fun:function(){
        console.log(`My name ${this.firstName} ${this.lastName} i am pursuing ${this.course}  and pin code is ${this.pin}`);
    }
}
fulldetail.fun()


//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

const move={
    move1:"3 idiot",
    move2:"Mr India",
    move2:"Chack de india",
    move3:"the lunch box",
    move4:"pathan",
    move5:"channi Express",
}
console.log(Object.getOwnPropertyNames(move));
