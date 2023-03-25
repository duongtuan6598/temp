//CÁC BÀI TẬP ĐÃ LÀM ĐÚNG.


/**
 Giảp pháp chung website.
 == Mỗi một công việc là một đối tượng.
 == Đối tượng chứa cả mảng, cả obj, cả hàm để giải quyết công việc.
 == Mảng bao gồm mảng đâu vào và mảng đầu ra.
 == Obj bao gồm cả đầu vào và đầu ra. 
 */

class functions {
    constructor() {
    }; bot() { };
}; 

const myha = new functions();
myha.bot = function () {
    function mi_ma(mi, ma) { //Tạo 1 số ngẫu nhiên từ 0-62
        return Math.floor(Math.random() * (Math.floor(ma) - Math.ceil(mi) + 1) + mi);
    };
    function cur() { //Tạo mã Hash cho Block. Trả về mã hash.
        const co = Array.from('uy0EznTfCZ7Ad3UsipagxcvYOSHB124PD68jMmewb9FLGVhKrIqoWJk5lQXNRt');
        let ca = Array.from('qhjx0XEyyjujyO3N');
        let cb = [];
        for (let i = 0; i < 4; i++) {
            ca = ca.map(function (va) { return va = co[mi_ma(0, co.length - 1)] });
            cb = ca.concat(cb);
        };
        return cb.join('');
    };
    return cur();
}
myha.pus = function (bl,da) { // Tạo mới 1 đối tượng và gán giá trị cho đối tượng. Trả về đối tượng.
        const moj = { preha: '', data: {}, curha: '' };
        moj.preha = bl[bl.length - 1].curha;
        moj.data.dt = da;
        moj.curha = this.bot();
        return moj;
    }

export default myha;

// const myUser = new functions();
// myUser.myObjInput = { name: 'duong tuan', age: 40, add: 'chung cu sen hong' };
// myUser.bot = (function () {
//     this.myArrOutput = this.myArrInput.map(function (number) { return number * 2; });
//     return myUser;
// });
// export default myUser;



/**
 * Cho trước thẻ button,
 * các bạn hãy viết code JS sao cho khi click 
 * vào button sẽ đổi màu chữ button sang màu #fff. 
 */
// document.querySelectorAll('button').forEach ( function (myElement) {
//     myElement.onmouseout = function() { 
//         myElement.style.backgroundColor = '#00FF00';};
//     myElement.onmouseover = function() { 
//         myElement.style.backgroundColor = '#FF0000';};
//     myElement.onclick = function() { 
//         myElement.style.backgroundColor = '#FFCC00';};
// });

/**
 * Cho trước thẻ button,
 * các bạn hãy viết code JS sao cho khi click 
 * vào button sẽ đổi màu chữ button sang màu #fff. 
 */
// document.querySelectorAll('button').forEach ( function (myElement) {
//     myElement.onclick = function() { 
//         myElement.style.color = '#fff';
//     }});

/**
 * Cho trước file HTML có các thẻ div,
 * các bạn hãy thêm class box vào các thẻ div này nhé.
Gợi ý: Bạn có thể sử dụng forEach lặp qua các phần tử div,
nhưng trước hết các bạn phải lấy được danh sách các phần tử div ra nhé.
Note: Hãy sử dụng kiến thức học được ở bài ClassList Property, 
không được sử dụng thuộc tính className nhé.
 */
// document.querySelectorAll('div').forEach(function(myElement) {
//     myElement.classList.add('box');
//  });

/**
 * 
 Các bạn hãy thực hiện các yêu cầu dưới đây:

Thêm class title vào thẻ h1
Thay thế class sub-title ở thẻ p bằng class content

Note: Hãy sử dụng kiến thức học được ở bài ClassList Property, 
không được sử dụng thuộc tính className nhé.
 */
// document.querySelector('h1').classList.add('title');
// document.querySelector('p').classList.toggle('content');

/**
 * Các bạn hãy thay đổi màu nền của thẻ div có class là .red 
 * thành màu #f00 và màu chữ của thẻ p thành màu #f05123.
 */
// document.querySelector('.red').style.backgroundColor = '#f00';


/**
 * Các bạn hãy viết hàm render có 1 tham số courses, 
 * hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

ReactJS
AngularJS
VueJS
Gợi ý:

Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.
 */
// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];
// function render(courses) {
//     document.querySelector('ul').innerHTML = 
//     courses.map(function (myElement){
//         return `<li> ${myElement} </li><br></br>`;
//     }).
//     join(); 
// };
// render(courses);

/**
 * Các bạn hãy viết hàm render nhận vào 1 tham số là html,
 * hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.
 */
// function renders(html) {
//     document.querySelector('ul').innerHTML = html;
// };

/**
 * Các bạn hãy thay đổi nội dung của thẻ h1
 * thành F8 - Học lập trình để đi làm.
 */
// document.querySelector('h1').innerText = 'F8 - Học lập trình để đi làm.';

/**
 * Cho sẵn file HTML, các bạn hãy thực hiện các yêu cầu sau:

Thêm thuộc tính title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính data-title có giá trị "F8 - Học lập trình để đi làm" cho thẻ h1.
Thêm thuộc tính href có giá trị "https://fullstack.edu.vn/" cho thẻ a.
Thêm thuộc tính target có giá trị "_blank" cho thẻ a.
Chú ý: Các bạn viết code vào file main.js nhé.
 */
// document.querySelector('h1').title = "F8 - Học lập trình để đi làm";
// document.querySelector('h1').setAttribute('data-title', 'F8 - Học lập trình để đi làm');
// document.querySelector('a').href = 'https://fullstack.edu.vn/';
// document.querySelector('a').target = '_blank';

/**
 * Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn
 * đến các element trong DOM được học ở bài trước để lấy ra các element sau:

productsListElement: thẻ div có class là products-list.
firstProductElement: thẻ div đầu tiên có class là product.
buttonElements: tất cả các thẻ button.
Chú ý: Các bạn hãy viết code ở file main.js nhé.
 */
// var productsListElement = document.querySelector('.products-list');
// var firstProductElement = document.querySelector('.product:first-child');
// var buttonElements = document.querySelectorAll('button');

/**
 * Ở bài trước chúng ta đã được học cách tạo phương thức every2
 * hoạt động giống với phương thức every của Array.

Bây giờ, các bạn hãy tạo ra phương thức myEvery 
hoạt động tương tự phương thức every2 và every nhé.
 */

// Array.prototype.myEvery = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (!callback(this[index],index,this)) {return false;}
//         }
//     } return true;
// }

//Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true

//===================================================================
