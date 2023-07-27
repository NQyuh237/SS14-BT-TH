// cú pháp khai báo 1 mảng
let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(array);
let arrayString = ["apple", "banana", 9, 10]
console.log(arrayString);
// khai báo mảng sử dụng từ khóa new
// let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(arr);
// lấy ra phần tử tại vị trí index = 7 của mảng array 
console.log("phần tử tại vị trí index = 7 là " + array[1]);
console.log(arrayString[1]);
arrayString[2] = "pen";
console.log(arrayString);
//for i
//for in
for (let item in array) { // dùng để lấy ra lần lượt các chỉ số của phần tử trong mảng
    console.log(array[item]);
}
//tính tổng các phần tử trong mảng
let sum = 0;
for (const i in array) {
    sum += array[i];
}
console.log(sum);

//for of
// tính tích cảu các phần tử trong mảng
let multi = 0;
for (const element of array) { //duyệt theo phần tử mảng
    console.log(element);
    multi *= element;
}
console.log(multi);

//for i
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
        console.log(array[i]);
    }
}
//tìm những phần tử tại vị trí chẵn và in ra
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}

let arrayAnimals = [];
//thêm mới một phần tử vào cuối mảng
arrayAnimals.push("dog");
arrayAnimals.push("cat");
arrayAnimals.push("lion");
arrayAnimals.push("fish");
arrayAnimals.push("crab");
arrayAnimals.push("mouse");
arrayAnimals.push("bird");
arrayAnimals.push("dragon");
arrayAnimals.push("bear");
arrayAnimals.push("bat");
console.log(arrayAnimals);
//cách push hoạt động 
arrayAnimals[arrayAnimals.length] = "cow"
console.log(arrayAnimals);
let arrayans = ["huy", "hai"];
for (let i = 0; i < array.length; i++) {
    arrayAnimals[arrayAnimals.length] = arrayans[i]
}
console.log(arrayAnimals);

//phương thức join(): chuyển mảng thành chuỗi
let arrJoin = [1, 2, 3, 4];
let string = arrJoin.join();
console.log(string);
//đảo ngược các phần tử trong mảng
console.log(arrJoin.reverse());
//sắp xếp mảng theo thứ tự ABC hoặc số tăng dần
arrayAnimals.sort();
console.log(arrayAnimals.sort());
arrayAnimals.sort(function (a, b) {
    return b - a;
});
console.log(arrayAnimals);
// nối mảng với nhau
console.log(arrJoin.concat(array, [1, 2, 3]));
//lấy và xóa phần tử cuối pop();
let elementDelete = array.pop();
console.log(elementDelete);
// Bai tập
let arrayDemo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayDemo.pop();
arrayDemo.pop();
arrayDemo.pop();
arrayDemo.pop();
arrayDemo.push(6, 7, 8);
arrayDemo.pop();
arrayDemo.pop();
let deleteItem = arrayDemo.pop();
console.log(arrayDemo);
console.log(deleteItem);

// thêm và xóa ở đầu
arrayDemo.unshift(9, 8, 7);
console.log(arrayDemo);
// chuyển mảng thành chuỗi
console.log(arrayDemo.toString());

let arr2side = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arr2side[0][0]);
let arr2 = [[5, 8, 9, 2, 10, 3], [4, 2, 6, 8, 1, 0], [5, 9, 11, 2, 4, 6]]
console.log(arr2);
//duyệt mảng 2 chiều
for (let i = 0; i < arr2.length; i++) {
    //arr2[i] -- là 1 mạng
    for (let j = 0; j < arr2[i].length; j++) {
        console.log(arr2[i][j]);
    }
}
// tạo 1 mảng 2 chiều m x n với các phần tử có giá trị ngẫu nhiên từ 1-99
//Math.round(Math.random()*98+1)
// Math.random() 
let m = 10, n = 15;
let arrRandom = new Array(m);
console.log(arrRandom);
for (let i = 0; i < m; i++) {
    arrRandom[i] = new Array(n);
    for (let j = 0; j < n; j++) {
        //tạo các giá trị ngẫu nhiên cho từng phần tử
        arrRandom[i][j] = Math.round(Math.random() * 98 + 1);
    }
}
console.log(arrRandom);