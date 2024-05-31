# Getting Started with Create React App

### Get start
### `npm start`
### ✨Magic ✨

# Функционал
# Создание случайной корзины:

```sh
- POST /Admin/create: генерирует случайную корзину. Требуется указать количество товаров.
```
Получение данных шапки сайта:
```sh
- GET /ShoppingCart/header: возвращает данные шапки сайта.
```

Получение списка товаров в корзине:

```sh
- GET /ShoppingCart/products: возвращает данные товаров в корзине.
```
Очистка корзины:

```sh
- DELETE /ShoppingCart/products: полностью очищает корзину.
```

Удаление товара из корзины:
```sh
- DELETE /ShoppingCart/product: удаляет товар из корзины. Требуется указать ProductId и UserGuid.
```
Получение сводной информации о заказе:

```sh
- POST /ShoppingCart/quantityinc: увеличивает количество товара на 1. Требуется указать ProductId и UserGuid.
- POST /ShoppingCart/quantitydec: уменьшает количество товара на 1. Требуется указать ProductId и UserGuid.
- POST /ShoppingCart/changequantity: меняет количество товара на указанное значение. Требуется указать ProductId, UserGuid и Value.
```



Используемые технологии

- Docker
- HTML
- CSS
- TS
- REACT
- REDUX-TOOLKIT

REST API

Мгебришвили М
