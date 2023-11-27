// ============ プロトタイプチェーン ============ 
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);    
  }    
}

Object.getPrototypeOf(myObject); // myObjectのプロトタイプを調べる

// メモ
// すべてのオブジェクトはプロトタイプと呼ばれる組み込みプロパティを持っている

// オブジェクトのプロパティにアクセスしようとしたとき、オブジェクト自身にプロパティが見つからない場合は、プロトタイプを検索してプロパティを探します。それでもプロパティが見つからない場合は、プロトタイプのプロトタイプが検索され、プロパティが得られるか、チェーンの終わりに達するか、その場合は undefined を返すまで、そのような具合に繰り返します。
// 
// // // つまり、myObject.toString() を呼び出すと、ブラウザーは、
// 
// toString を myObject で探します。
// 見つからない場合は、myObject のプロトタイプオブジェクトで toString を探します。
// 見つかったら、それを呼び出します。

// ============ プロパティのシャドウ化 ============ 

// オブジェクトにプロパティを定義した場合、そのオブジェクトのプロトタイプに同じ名前のプロパティが定義されているとき
const myDate = new Date(1995, 11, 17);
console.log(myDate.getYear()); // 95

myDate.getYear = function () {
    console.log("something else!");
};

myDate.getYear(); // something else!

// メモ
// ブラウザーはmyDateにその名前のプロパティが存在するかをまず調べ、なければプロトタイプのプロパティを調べ始めるため

// ============ プロトタイプの設定 ============ 

// ➀ Object.create(新しいオブジェクトを作成し、新しいオブジェクトのプロトタイプとして使用するオブジェクトを指定することができる)
const personProtoType = {
    greet() {
        console.log('hello');
    }
};

const carl = Object.create(personProtoType);
carl.greet(); // hello;

// ➁ コンストラクター
const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }

//   PersonのprototypeプロパティにpersonPrototypeメソッドを設定
  Object.assign(Person.prototype, personPrototype);
  // または
  // Person.prototype.greet = personPrototype.greet;

// メモ
// すべての関数が prototype という名前のプロパティを持っています。
// オブジェクトに直接定義するプロパティは独自プロパティと呼ばれる
// あるプロパティが独自プロパティであるかどうかは静的メソッド Object.hasOwn() を使って調べることができます。
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false