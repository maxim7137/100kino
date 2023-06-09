# 100kino

## 100 документальных фильмов

Учебный проект - сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.
В базе данных всего 100 документальных фильмов. Для того чтобы вывести все фильмы введите в поиск **"ключевое слово"**

Информация о фильмах представлена в виде карточек, в которых есть:

- название (на русском языке);
- продолжительность;
- кнопка для сохранения карточки фильма;
- постер с ссылкой на трейлер фильма.

Кроме информации представленной на карточке, у каждого фильма есть дополнительные данные:

- название (на английском языке);
- год;
- страна;
- режиссер;
- описание;

Поиск осуществляется по всем вышеперечисленным полям, в том числе и по тем что не представлены в карточке.

## Технологии

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

В проекте используется две базы данных:

- [сторонняя](https://api.nomoreparties.co/beatfilm-movies) - beatfilm-movies - открытая, для получения фильмов
- собственная - для авторизации и добавления фильмов в избранное

## Требования

- [Node.js](https://nodejs.org)

## Разворачивание

- открыть терминал
- ввести команды:
  - `npm run in` - первый раз для установки необходимых зависимостей
  - `npm run dev` - каждый раз для локального запуска
