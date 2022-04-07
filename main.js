// Vue.createApp({
//     data() {
//       return {
//         message: 'Hello Vue!'
//       }
//     }
//   }).mount('#app')


let ramework = {
    name: "Vue Ramework",
    displayContent: function ({app, content}) {
        let entryPoint = document.getElementById(app);
        entryPoint.textContent = content;
    },
};

ramework.displayContent({
    app: "app",
    content: "Our Vue Ramework",
});

Vue.createApp({
    data() {
        return {
            name: "Vue Ramework F",
            subscribeText: "Subscribe now",
            count: 0,

        };
    },
}).mount("#updates")



let countUpBtn = document.getElementById('increase');
let countDownBtn = document.getElementById('decrease');
let displayCount = document.getElementById('text');

let text = 0;

countUpBtn.addEventListener('click', function() {
    text++
    displayCount.innerHTML = `count is: ${text}`;
 });
 
 countDownBtn.addEventListener('click', function() {
     text--
     displayCount.innerHTML =  `count is: ${text}`
});









// let countUp = document.getElementById('increase');

// countUp.addEventListener("click", function increment(){
//     count = countUp++
//     // countUp++
// })


// console.log(countUp.textContent);

// let count = document.createElement('div');

// increment();


// let counter = 0;








// dPadRight.addEventListener("click", function increment() {
//     counter++;
// }
// );
// console.log(counter);