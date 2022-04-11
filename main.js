// // Vue.createApp({
// //     data() {
// //       return {
// //         message: 'Hello Vue!'
// //       }
// //     }
// //   }).mount('#app')


// let ramework = {
//     name: "Vue Ramework",
//     displayContent: function ({app, content}) {
//         let entryPoint = document.getElementById(app);
//         entryPoint.textContent = content;
//     },
// };

// ramework.displayContent({
//     app: "app",
//     content: "Our Vue Ramework",
// });

// Vue.createApp({
//     data() {
//         return {
//             name: "Vue Ramework F",
//             subscribeText: "Subscribe now",
//             count: 0,

//         };
//     },
// }).mount("#updates")



// // let countUpBtn = document.getElementById('increase');
// // let countDownBtn = document.getElementById('decrease');
// // let displayCount = document.getElementById('text');

// // let text = 0;

// // countUpBtn.addEventListener('click', function() {
// //     text++
// //     displayCount.innerHTML = `count is: ${text}`;
// //  });
 
// //  countDownBtn.addEventListener('click', function() {
// //      text--
// //      displayCount.innerHTML =  `count is: ${text}`
// // });









// // let countUp = document.getElementById('increase');

// // countUp.addEventListener("click", function increment(){
// //     count = countUp++
// //     // countUp++
// // })


// // console.log(countUp.textContent);

// // let count = document.createElement('div');

// // increment();


// // let counter = 0;








// // dPadRight.addEventListener("click", function increment() {
// //     counter++;
// // }
// // );
// // console.log(counter);






const cards = Vue.createApp({
    data() {
        return {
            name: "Toyo",
            gender: "Female",



            cardContent: [
               { title: "Travels and luxury", text: "Get the best offers of quality Vacations", img:"clear.jpg", price:"$10.30" },
               { title: "Marketing", text: "lorem ipsum dolor", img:"cupcake.jpg", price:"$15.00" },
               { title: "Gadgets", text: "Laborum blanditiis expedita totam perspiciatis" , img:"lime.jpg", price:"$11.25"},
               { title: "Economics", text: "Lorem ipsum dolor sit amet consectetur", img:"food8.jpg", price:"$13.21" },
               { title: "Transport", text: "quo nisi animi, esse aperiam tempora", img:"clear.jpg", price:"$8.00" },
               { title: "Business", text: "corrupti sit voluptatum ad atque", img:"food8.jpg", price:"$10.30" },

            ],
        };
    },
});
cards.mount("#create");