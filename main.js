const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,

    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// const names=['Bob', 'Alex', 'Nick', 'John']

const getNames = (array) => {
    let res = [];
    let getValueForResult = (el) => el.name;
    for (let i = 0; i < array.length; i++) {
        res[i] = getValueForResult(array[i]);
        // res.push(array[i].name);
    }
    return res;
};

// console.log(getNames(students));


//add property isStudent:true to students

// const updatedStudents = []

const getUpdatedStudents = (students) => {
    let res = [];
    let getValueForResult = (el) => ({ ...el, isStudent: true });
    for (let i = 0; i < students.length; i++) {
        res[i] = getValueForResult(students[i]);
    }
    return res;
};

// console.log(getUpdatedStudents(students));

//Universal function -

const getMappedArray = (array, getValueForResult) => {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res[i] = getValueForResult(array[i]);
    }
    return res;
};

// console.log(getMappedArray(students, (el) => el.name));
// console.log(getMappedArray(students, (el) => ({ ...el, isStudent: true })));
//
// console.log(students.map(el => el.name));
// console.log(students.map(el => ({ ...el, isStudent: true })));

//❓
const getFilteredArray = (array, conditionalFunc) => {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        if(conditionalFunc[i] === true) {
            res[res.length] = array[i]
        }
    }
    return res
};
// console.log(getFilteredArray(students, (el)=> el.age > 21));

const pushElToArray = (array, el) => {
    array[array.length] = el
    return array.length
};

const myIncludes = (array, el) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === el) {
            return true
        }
    }
    return false
};

const myFind = (array, searchCondFunc) => {
    for(let i = 0; i < array.length; i++) {
        if(searchCondFunc(array[i]) === true) {
            return array[i]
        }
    }
};

// console.log(myFind(students, el=> el.name === 'John'));
// console.log(students.find(el=> el.name === 'John'));

Array.prototype.sayHi = function() {
    // alert('Hi, samurai')
}

// const arr = [].sayHi()

// arr.sayHi()

//function , that returns array length
const arr2 = new Array(1,2,3)

function getLength() {
return this.length
}

Array.prototype.getLength = getLength
console.log(arr2.getLength());

Array.prototype.myFind = function (searchCondFunc) {
    for (let i = 0; i < this.length; i++) {
        if (searchCondFunc(this[i]) === true) {
            return this[i]
        }
    }
    return undefined
}

// console.log(students.myFind(el=> el.name === 'John'));






