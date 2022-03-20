

$(document).ready(function () {
   $('.slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
      responsive: [
         {
            breakpoint: 1400,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 480.9,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   });
});



// выподающий список
(function () {

   // Прослушиваем событие CLICK
   document.addEventListener('click', EasyTogglerHandler);

   /**
    * Основная функция-обработчик EasyToggler.
    */
   function EasyTogglerHandler(event) {

      // Задаём основную кнопку EasyToggler
      const EY_BTN = event.target.closest('[data-easy-toggle]');

      /**
       * Проверка нажатия на основную кнопку EasyToggle и
       * проверка на нажатие вне его кнопок 
       */

      if (EY_BTN) {
         event.preventDefault();
         let ey_target = EY_BTN.getAttribute('data-easy-toggle');
         let ey_class = EY_BTN.getAttribute('data-easy-class');

         try {
            document.querySelectorAll('[data-easy-toggle]').forEach(easyBlock => {
               if (!easyBlock.hasAttribute('data-easy-parallel') && easyBlock !== EY_BTN) {
                  document.querySelector(easyBlock.getAttribute('data-easy-toggle')).classList.remove(easyBlock.getAttribute('data-easy-class'));
               }
            });

            document.querySelector(ey_target).classList.toggle(ey_class);
         }
         catch (ey_error) {
            console.warn('EasyToggler.js : Блок ' + ey_target + ' не существует');
         }
      }

      if (!EY_BTN) {
         // Получаем массив из кнопок с атрибутом [data-easy-rcoe]
         let ey_rcoe_block_targets = document.querySelectorAll('[data-easy-rcoe]');

         /**
          * Вешаем событие на каждую кнопку, у которой указан
          * атрибут [data-easy-rcoe], чтобы удалять заданный класс
          */
         Array.from(ey_rcoe_block_targets).forEach.call(ey_rcoe_block_targets, function (ey_rcoe_block_target) {
            let ey_rcoe_block = ey_rcoe_block_target.getAttribute('data-easy-toggle'), // Получаем нацеленный блок
               ey_rcoe_block_class = ey_rcoe_block_target.getAttribute('data-easy-class'); // Удаляем заданный класс

            /* Если нажимаем не на активный блок, то удаляем заданный класс */
            if (!event.target.closest(ey_rcoe_block)) {
               try {
                  document.querySelector(ey_rcoe_block).classList.remove(ey_rcoe_block_class);
               }
               catch (ey_error) {
                  console.warn('EasyToggler.js : Блок ' + ey_rcoe_block + ' не существует');
               }
            }
         });
      }
   }
})()



// Ввод номера телефона
$(".telephone").mask("+₉₉₈ (99) 999 - 99 - 99");





document.addEventListener('DOMContentLoaded', function() {
   // (год, месяц, день, час, минута, секунда, миллисикунда)
   // конечная дата, например 1 июля 2021
   const deadline = new Date(2022, 2, 22, 17, 0, 0, 0); 
   // id таймера
   let timerId = null;
   // склонение числительных
   function declensionNum(num, words) {
     return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
   }
   // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
   function countdownTimer() {
     const diff = deadline - new Date();
     if (diff <= 0) {
       clearInterval(timerId);
     }
     const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
     const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
     const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
     const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
     $days.textContent = days < 10 ? '0' + days : days;
     $hours.textContent = hours < 10 ? '0' + hours : hours;
     $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
     $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
   //   $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
   //   $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
   //   $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
   //   $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
   }
   // получаем элементы, содержащие компоненты даты
   const $days = document.querySelector('.timer__days');
   const $hours = document.querySelector('.timer__hours');
   const $minutes = document.querySelector('.timer__minutes');
   const $seconds = document.querySelector('.timer__seconds');
   // вызываем функцию countdownTimer
   countdownTimer();
   // вызываем функцию countdownTimer каждую секунду
   timerId = setInterval(countdownTimer, 1000);
 });


