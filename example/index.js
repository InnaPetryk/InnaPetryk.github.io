// const btn = document.querySelector('#btn');

// function clickExample(){
//     console.log('click')
//     btn.removeEventListener('click', clickExample);

// }
// const link = document.querySelector('#link');
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     event.target.style.color = 'red'
//     console.log(event)
 
// });


// const wrap = document.querySelector('#wrap');
// const inner = document.querySelector('#inner');
// function getColor() {
//     return`
//     rgb(
//         ${Math.round(Math.random() * 255)},
//         ${Math.round(Math.random() * 255)},
//         ${Math.round(Math.random() * 255)}
//     )
//     `;
// }

// wrap.addEventListener('click', event => {
//     console.log(getColor())
//     event.target.style.background = getColor()
//     console.log('wrapper is clicked on')
//     console.log(event.target);
// });
// inner.addEventListener('click', event => {
//     event.stopPropagation();
//     console.log('inner is clicked on')
// console.log(event.target);
// });

// const input = document.querySelector('#test');
// // input.addEventListener('input', e => {
// //     console.log('input', e.target.value)

// // });
// // input.addEventListener('keypress', e => {
// //     console.log('keypress', e.target.value)
// // });



// const input = document.querySelector('#test');
// input.addEventListener('keydown', e => {
//         console.dir('down')
// })
// input.addEventListener('keyup', e => {
//     console.dir('up')
// })

// const input = document.querySelector('#test');
// input.addEventListener('keypress', e => {
//             console.dir('e.keyCode')
// });
// input.addEventListener('focus',e => {
//     console.log('focus')
// });
// input.addEventListener('blur',e => {
//     // if (!e.target.value) {
//     //     e.target.focus() фокус на ячейку
//     // }
    
//     // console.log('blur')
// })

// як робити css генератор
// const red = document.querySelector('#red');
// const green = document.querySelector('#green');
// const blue = document.querySelector('#blue');

// const colorParts = {
//     red: 255,
//     green: 255,
//     blue: 255
// };

// function setColor(event) {
//     const key = event.target.id;
//     const value = event.target.value;
//     colorParts[key] = value;
//     const color = `rgb(
//         ${colorParts.red},
//         ${colorParts.green},
//         ${colorParts.blue}
//     )`;
//     document.body.style.background = color;
//     console.log(color)

// }
// red.addEventListener('input', setColor);
// green.addEventListener('input', setColor);
// blue.addEventListener('input', setColor);



// const box = document.querySelector('#checkbox');
// box.addEventListener('change', e => {
//     if (e.target.cheked) {
//         document.body.style.background = 'black';
//     }
//     elese {
//         document.body.style.background = 'white';
//     }
// })
//     // console.log(e.target.checked)



//  document.querySelector('#submit').addEventListener('click', e => {
//      e.preventDefault();
//      const radio = document.querySelector('[name="color"]:checked');
//      console.log(radio.value);
//  })

const square = document.querySelector('#move');
function move(e) {

    const x= e.pageX;
    const y= e.pageY;

    square.style.top = y + 'px';
    square.style.left = x + 'px';
}
   square.addEventListener('mousdown', () => {
    window.addEventListener('mousemove', move)

   })
   square.addEventListener('mousup', () => {
    window.addEventListener('mousemove', move)
});