class Calendar {
    calendarWrapper = null;
    months = [
        'january',
        'fabruary',
        'martch',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];   
    days = [
        'sunday',
        'mondey',
        'tuesday',
        'wednesday',
        'thirsday',
        'friday',
        'saturday'
    ];
    currentDate = null;
    currentMonthName = null;
    monthField = null;

    constructor(selector) {
        this.calendarWrapper = document.querySelector(selector);
        this.currentDate = new Date();
        this.currentMonthName = this.months[this.currentMonth];

        this.initWrappers();
        this.renderHandlers();
        this.render();
    }

    get currentMonth() {
        return this.currentDate.getMonth();
    }

    set currentMonth(monthNumber) {
        this.currentDate.setMonth(monthNumber);
        this.monthField.value = this.months[monthNumber];
        this.render();
    }

    get daysCount() {
        const date = new Date(this.currentDate)
        date.setMonth(this.currentMonth + 1);
        date.setDate(0);
        return date.getDate();
    }

    get weekDay() {
        const date = new Date(this.currentDate)
        date.setDate(1);
        return date.getDay();
    }

    get weeksList() {
        const daysList = []

        for(let i = -this.weekDay + 1; i <= this.daysCount; i++) {
            if (i <= 0) {
                daysList.push('');
            }
            else {
                daysList.push(i);
            }
        }

        const weeksList = [
        ];

        for(let i = 0; i < daysList.length; i++) {
            const arr = weeksList[weeksList.length - 1];
            if (arr && arr.length < 7) {
                arr.push(daysList[i]);
            }
            else {
                weeksList.push([
                    daysList[i]
                ])
            }
        }

        return weeksList;
    }

    initWrappers() {
        const html = `
            <div class="handler-wrapper"></div>
            <div class="calendar-wrapper"></div>
        `;
        this.calendarWrapper.innerHTML = html;
    }

    renderHandlers() {
        // button to move to the previous month   
        const prev = document.createElement('button');
        prev.innerText = 'Prev';
        prev.addEventListener('click', () => {
            let cm = this.currentMonth - 1;
            if (cm < 0) cm = 12;
            this.currentMonth = cm;
        });

        this.calendarWrapper
            .querySelector('.handler-wrapper')
            .appendChild(prev);

        // field to display current month
        this.monthField = document.createElement('input');
        const currentMonth = this.months[this.currentMonth];
        this.monthField.value = currentMonth;
        this.calendarWrapper
            .querySelector('.handler-wrapper')
            .appendChild(this.monthField);

        // button to move to the next month
        const next = document.createElement('button');
        next.innerText = 'Next';
        next.addEventListener('click', () => {
            let cm = this.currentMonth + 1;
            if (cm > 11) cm = 0;
            this.currentMonth = cm;
        });

        this.calendarWrapper
            .querySelector('.handler-wrapper')
            .appendChild(next);
    }

    render() {
        let calendarTable = `
            <table>
                <thead>
                    <tr>
                        ${
                            this.days.map(day => `<th>${day}</th>`).join('')
                        }
                    </tr>
                </thead>
                <tbody>
                    ${
                        this.weeksList.map(row => `
                            <tr>
                                ${row.map(char =>`<td>${char}</td>`).join('')}
                            </tr>
                        `).join('')
                    }
                </tbody>
            </table>
        `;

        this.calendarWrapper
            .querySelector('.calendar-wrapper')
            .innerHTML = calendarTable;
    }
}

window.asd = new Calendar('#app');

// document.querySelector('#testtbn').addEventListener('click', () => {
//     window.asd = new Calendar('#app');
// })

// // // кладемо в змінну currentDate об"єкт поточної дати
// // // рік, місяць, день місяця, день тижня, година, хвилина і тд
// // // const currentDate = new Date();

// // // кладемо в змінну currentMonth порядковий номер поточного місяця
// // // так як в js місяці починаються з 0, то листопад це 10й місяць
// // // const currentMonth = currentDate.getMonth();

// // // кладемо в змінну currentMonthName назву поточно місяця
// // // беремо її по індексу з самописного масиву
// // const currentMonthName = months[currentMonth];

// // // так як кількість знів у місяці це по суті дата останнього дня місяця
// // // 1. ми змінюємо поточний місяць на наступний
// // currentDate.setMonth(currentMonth + 1);
// // // 2. встановлюємо число місяць в 0, а так як числа 0 в місяці немає
// // //    js автоматично встановлює останній день попереднього місяця
// // currentDate.setDate(0);
// // // 3. поміщаємо в змінну daysCount поточне число місяця,
// // //    яке рівне кількості днів у місяці
// // const daysCount = currentDate.getDate();

// // // щоб отримати день тижня першого чила місяця
// // // встановлюємо в нашу дату число 1
// // currentDate.setDate(1);
// // // тепер в нашій даті встановлено перше чило поточного місяця
// // // і беремо з неї порядковий номер дня тижня
// // const weekDay = currentDate.getDay();

// // // тут вже словами не описати
// // // треба диватись на результат в браузері
// // // і усвідомлювати як ми отримали такий результат
// // const daysList = []

// // for(let i = -weekDay + 1; i <= daysCount; i++) {
// //     if (i <= 0) {
// //         daysList.push('');
// //     }
// //     else {
// //         daysList.push(i);
// //     }
// // }

// // const weeksList = [
// // ];



// // // for(let i = 0; i < daysList.length; i++) {
// // //     const arr = weeksList[weeksList.length - 1];
// // //     if (arr && arr.length < 7) {
// // //         arr.push(daysList[i]);
// // //     }
// // //     else {
// // //         weeksList.push([
// // //             daysList[i]
// // //         ])
// // //     }
// // // }

// // // let calendarTable = `
// // //     <table>
// // //         <thead>
// // //             <tr>
// // //                 ${
// // //                     days.map(day => `<th>${day}</th>`).join('')
// // //                 }
// // //             </tr>
// // //         </thead>
// // //         <tbody>
// // //             ${
// // //                 weeksList.map(row => `
// // //                     <tr>
// // //                         ${row.map(char =>`<td>${char}</td>`).join('')}
// // //                     </tr>
// // //                 `).join('')
// // //             }
// // //         </tbody>
// // //     </table>
// // // `;

// // // document.querySelector('#app').innerHTML = calendarTable;

// // // const username = 'Opanas';
// // // try {
// // //     if (!username) {
// // //         throw new Error('no username');
// // //     }
// // //     else {
// // //         console.log(username);
// // //     }
// // //     // JSON.parse('')
// // // }
// // // catch(e) {
// // //     console.dir(e)
// // // }
// // // // finally {
// // // //     console.log('finely')

// // // const Observer = {
// // //     on: function(eventName, eventHandler) {
// // //         this.events.push({
// // //             eventName,
// // //             eventHandler
// // //         })

// // //     },
// // //     emit: function(eventName, argument) {
// // //         this.events.forEach(e => {
// // //             if (e.eventName === eventName) {
// // //                 e.eventHandler(argument)
// // //             }
// // //         })

// // //     },
// // //     events: []
// // // };
// // // Observer.on('sturkh', (e) => {console.log(e)})

// // // Опис в строчці 
// // // Observer
// // // {events: Array(1), on: ƒ, emit: ƒ}
// // // Observer.on('sturth', e => console.log ())
// // // undefined
// // // Observer.emit('sturkh', 123)
// // // date.js:141 123
// // // undefined

// class CustomDate extends Date {
// months = [
//             'january',
//             'fabruary',
//             'martch',
//             'april',
//             'may',
//             'june',
//             'july',
//             'august',
//             'september',
//             'october',
//             'november',
//             'december'
//         ];   
//         getMonthName() {
//             const monthNumber = this.getMonth();
//             return this.months[monthNumber]
//         }

//         }

    //     class CustomDate extends Date {
    // days = [
    //     'sunday',
    //     'mondey',
    //     'tuesday',
    //     'wednesday',
    //     'thirsday',
    //     'friday',
    //     'saturday'
    // ]; 
    //                 getDayName() {
    //                     const DayNumber = this.getDay();
    //                     return this.days[DayNumber]
    //                 }
            
    //                 }