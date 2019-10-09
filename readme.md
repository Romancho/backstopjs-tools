# BackstopJS - test regressive

![node](https://img.shields.io/badge/node-8.10.0-blue)
![npm](https://img.shields.io/badge/npm-6.4.1-reg)
![puppeteer](https://img.shields.io/badge/puppeteer-1.20.0-orange)

BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.

Основано на [Garris/BackstopJS](https://github.com/garris/BackstopJS)

___________________________________________

## Установка и настройка backstopjs
1. Если не стоит **backstopjs**, нужно поставить backstopjs глобально (в зависимости от ОС c `sudo` или без):
```bash
$ npm config set user 0
$ npm config set unsafe-perm true
$ npm install -g backstopjs
```
2. В корне проекта выполняем:
```bash
$ npm i
```

3. Скопировать переменные `BACKSTOP_*` из *.env.default* в *.env* и проставить свои значения:
```
BACKSTOP_DEBUG = true # переменная только для работы BackstopJS (например скрывает баннеры)
```

3. Конфиги
Предустановленные конфиги лежат в **частном (закрытом)** репозитории, в котором **необходимо авторизоваться** через консоль.

Далее копируем test.config.json в config.json, вносим значения и делаем:

```bash
$ npm i bs-название проекта
```


--------------------------------------------------------------
## Команды

Запуск сбора референсов с сайта-эталона. Скриншоты генерируются в `./backstop_data/bitmaps_reference`. 

**Не находятся в гите**

```bash
$ npm run back_ref
```

Запуск тестирования текущей dev-версии проекта. Скриншоты генерируются в `.//backstop_data/bitmaps_test`/ 

**НЕ находятся в гите**

```bash
$ npm run back_test
```

Сохранение измененной версии, поверх референса (тестируемые изменения, которые санкционированы, становятся референсами)
```bash
$ npm run back_approve
```

Для удобства и гибкости присутствует флаг --filter, который позволяет выбрать конкретный сценарий как для выборки референсов, так и для тестирования и апрувов

```bash
$ npm run back_ref --filter=scenario_name
```
```bash
$ npm run back_test --filter=scenario_name
```
```bash
$ npm run back_approve --filter=scenario_name
```
*На данный момент можно передавать только одно название сценария*

-----------------------------------------------------
## Troubleshooting
Если не ставится Chromium, делаем:
```bash
$ npm config set user 0
$ npm config set unsafe-perm true
$ npm install -g backstopjs
```
