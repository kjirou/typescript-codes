var num:number = 1;
var str:string = 'a';
var bool:boolean = true;

// null と undefined は格納できる
num = null;
num = undefined;

// null と undefined は型を設定できない
var nul = null;
var undef = undefined;

// 困った時のany
var val:any = 1;
val = 'a';
val = true;
val = null;
val = undefined;


//
// list
//
var anyList:any[] = [true, 1, 'a'];

// 両方全く同じ意味
var numberList:number[] = [1, 2, 3];
var arrayList:Array<number> = [1, 2, 3];


//
// enum
//
// 列挙型、宣言時にこういうのが出来る
//
//   { '0': 'MALE',
//     '1': 'FEMALE',
//     '2': 'OTHERS',
//     MALE: 0,
//     FEMALE: 1,
//     OTHERS: 2 }
//
enum GENDER {
  MALE,
  FEMALE,
  OTHERS
}

// 値は隠蔽して使う例
var gender:GENDER = null;
gender = GENDER.MALE;
var genderString = GENDER[GENDER.MALE];  // 'MALE' が抽出できる

// 値の設定はできるが、number のみが可能
enum FOO {
  X = 10,
  Y = 20
}


//
// void
//
function fooFunc():void {}
var barFunc = function():void {};
