//Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.


const friend = ['Mango ',  'Poly',  ' Kiwi',   'Ajax'];
let str = '';





//👉 Спочатку через for



for (let i = 0; i < friend.length; i += 1) {
    str += `${friend[i]}, `;

  }
console.log(str);





//👉 Потім через join()



str = friend.join(",");
console.log(str);





//Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)


const cards = ['Карточка 1' ,  'Карточка 2',   'Карточка 3', 'Карточка 4' , 'Карточка 5',  'Карточка 6 '];





//Видалити






let cardtoRemove = cards.splice(2, 1);
console.log(cards);



//Додати


const cardToInsert = cards.push('Карточка 6');
console.log(cards);



//Оновити



const cardToUpdate = cards.splice(2, 1, "оновлення ");
console.log(cards);