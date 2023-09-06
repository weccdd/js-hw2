// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [10, true, `Lorem ipsum`, 18, false, "Lorem ipsum", 25, 85, 99,55]
console.log(array)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books =[
    {
        title:`Lorem ipsum1`,
        pageCount:385,
        genre:`Roman`,
    },
    {
        title:`Lorem ipsum2`,
        pageCount:555,
        genre:`Fiction`,
    },
    {
        title:`Lorem ipsum3`,
        pageCount:266,
        genre:`Fairy tale`,
    }
]
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books1 =[
    {
        title:`Lorem ipsum1`,
        pageCount:385,
        genre:`Roman`,
        authors:[
            {Name: `Andriy`},
            {Age: 83}
        ]
    },
    {
        title:`Lorem ipsum2`,
        pageCount:555,
        genre:`Fiction`,
        authors:[
            {Name: `Vasia`},
            {Age: 42}
        ]
    },
    {
        title:`Lorem ipsum3`,
        pageCount:266,
        genre:`Fairy tale`,
        authors:[
            {Name: `Luk`},
            {Age: 25}
        ]
    }
]
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {Name:`Anton`,Username:`Anton45`, Password:544554},
    {Name:`Vasia`,Username:`Vasia644`,Password:65556},
    {Name:`Anton`, Username:`Anton222`, Password:5565656},
    {Name:`Olya`, Username:`Olya65565`,Password:64665},
    {Name:`Oleg`, Username:`Oleg8889`,Password:49997},
    {Name:`Yulia`,Username:`Yulia6533`,Password:266656},
    {Name:`Andriy`,Username:`Andriy232`,Password:565656},
    {Name:`Anatoliy`,Username:`Anatoliy6665`,Password:5656},
    {Name:`Evgen`,Username:`Evgen6656`,Password:5656565},
    {Name:`Roman`,Username:`Roman66644`,Password:55655}
]
for (const user of users) {
   console.log(user.Password)
}
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 2;
if (x !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
};
let a = 1;
if (a !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
};
let b = 0;
if (b !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
};
let c = -3;
if (c !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 38;
if (0<=time && time<=15){
    console.log(1);
}else if(15<=time && 30>=time){
    console.log(2);
}else if(30<=time && 45>=time){
    console.log(3);
}else if (45<= time && 60>=time){
    console.log(4);
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 20;
if (0<=day && day<=10){
    console.log(1);
}else if(10<=day && day<=20){
    console.log(2);
}else if(20<= day && day<=31){
    console.log(3);
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = parseInt(prompt(`Введіть номер дня тижня`))
let dayInfo
switch (dayNumber) {
    case 1:
        dayInfo = `Monday`
        break;
    case 3:
        dayInfo = `Wednesday`
        break;
    case 4:
        dayInfo = `Thursday`
        break;
    case 5:
        dayInfo = `Friday`
        break;
    case 6:
        dayInfo = `Saturday`
        break;
    case 7:
        dayInfo = `Sunday`
        break;
    default:
        dayInfo = `Введіть дійсне чило`
}
console.log(dayInfo)
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let number = parseInt(prompt(`Введіть число`))
let number2 = parseInt(prompt(`Введіть число`))
if (number < number2){
    console.log(number2)
}else if(number>number2){
    console.log(number)
}else if (number === number2){
    console.log(`Числа рівні`);
}else if (isNaN(number)|isNaN(number2)){
    console.log(`Введіть дійсне число`);
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
    let fall = 0;
    fall = fall || `default`
    console.log(fall)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
    if (coursesAndDurationArray[0].monthDuration > 5){
        console.log(`${coursesAndDurationArray[0].title}`+` `+`${coursesAndDurationArray[0].monthDuration}`+` ` +`Супер`)
    }
    if(coursesAndDurationArray[1].monthDuration > 5){
        console.log(`${coursesAndDurationArray[1].title}`+` ` +`Супер`)
    }
    if(coursesAndDurationArray[2].monthDuration > 5){
        console.log(`${coursesAndDurationArray[2].title}`+` ` +`Супер`)
    }
    if(coursesAndDurationArray[3].monthDuration > 5){
        console.log(`${coursesAndDurationArray[3].title}`+` ` +`Супер`)
    }
    if(coursesAndDurationArray[4].monthDuration > 5){
    console.log(`${coursesAndDurationArray[4].title}`+ `` +`Супер`)
    }
    if(coursesAndDurationArray[5].monthDuration > 5){
    console.log(coursesAndDurationArray[5].title+` `+`${coursesAndDurationArray[5].monthDuration}`+` ` +`Супер`)
    }