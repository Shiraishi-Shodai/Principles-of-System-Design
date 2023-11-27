// ============ オブジェクトの基本 ============ 

const person = {
    name: {
        first: "Bob",
        last: "Smith"
    },
    age: 32,
    bio() {
        console.log(`S{this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    
    },
    instroduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}`);
    },
};

// ============ ドット記法 ============ 
console.log(person.name.first);

// ============ ブラケット記法 ============ 

// ブラケットよりもドットの方が簡潔で読みやすいため、ドットの方が好ましい
console.log(person["name"]["first"]);

// ============ オブジェクトメンバーの追加 ============ 

person.age = 45;
person["name"]["last"] = "Cratchit";

person.eyes = "hazel";
person.farewell = function () {
    console.log('Bye everday!');
};

// ブラケット記法は新しいメンバー変数名に変数を代入できる
const myDataName = 'height';
const myDataValue = '1.75m';
person.myDataName = myDataValue; // person["myDataName"]で取得
person[myDataName] = myDataValue; // person["height"]で取得

// ============ this(現在のオブジェクト) ============ 

const person1 = {
    name: "Chris",
    instroduceSelf() {
        console.log(`Hi I'm ${this.name}.`)
    },
}

const person2 = {
    name: "Deepti",
    instroduceSelf() {
        console.log(`Hi I'm ${this.name}.`)
    },
}

// ============ コンストラクター ============ 

// オブジェクトを作成して返すただの関数
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.instroduceSelf = function() {
        console.log(`Hi I'm ${this.name}`);
    };

    return obj;
}

// const salva = createPerson('Salva');
// const frankie = createPerson('Frankie');
// 
// コンストラクター(newを使ってよびだされる関数)
// 大文字で始める

function Person(name) {
    this.name = name;
    this.instroduceSelf = function () {
        console.log(`Hi I'm ${this.name}`);
    }
}

const salva = new Person('Salva');
const frankie = new Person('Frankie');
