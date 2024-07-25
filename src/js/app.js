// TODO: write code here

let ul = document.documentElement.children[1].children[0];
console.log(ul.children);
// перебираем HTMLAllCollection, сходства с массивом немного.
// 1-способ:
console.log('1-способ');
for(const el of ul.children) {
    console.dir(el);
}
// 2-способ:
console.log('2-способ');

let child = ul.firstElementChild; // первый элемент
while(child) {
    console.dir(child);

    child = child.nextElementSibling;
}
// --------


// const news = [
//     'Microsoft представила новую операционную систему Windows 11',
//     'Представлен самый дешёвый смартфон в мире',
//     'Steam усложнил покупку игр по сниженным ценам',
//     'В сентябре SpaceX Starlink сможет обеспечить спутниковое интернет-покрытие по всей Земле',
//     'Xiaomi представила камеру для смарт-телевизоров Mi TV Webcam по цене $30'
// ]

// document.addEventListener('DOMContentLoaded', () => {
//     const widget = new NewsWidget(document.querySelector('.news-widget'));

//     window.widget = widget;

//     const newsInterval = setInterval(() => {
//         const title = news.pop();

//         widget.addNewNews(title);
//         if(!news.length) clearInterval(newsInterval);
//     }, 10000);

//     const input = document.querySelector('.input');

//     document.querySelector('.set-attribute').addEventListener('click', () => {
//         input.setAttribute('value', 'attribute');
//     });

//     document.querySelector('.set-value').addEventListener('click', () => {
//         input.value = 'value';
//     });
// })