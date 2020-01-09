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
$ npm install -g backstopjs
```

(Если в процессе установки возникнут проблемы с Chromium, то необходимо дейстововать так:
```bash
$ npm config set user 0
$ npm config set unsafe-perm true
$ npm install -g backstopjs
```
)

2. В корне проекта выполняем:

```bash
$ npm i
```

3. Конфиги
Данная сборка может использоваться и как `as is`, так и с предустановленными конфигами для отдельных частных проектов. 
Конфиги лежат в **частном (закрытом)** репозитории, в котором **необходимо авторизоваться** через консоль.
Если используем предустановленные конфиги, то:

```bash
$ npm i bs-название проекта
```

Далее копируем test.config.json в config.json, вносим значения и делаем:

```json
  "module":               "название пакета, если нет, то оставляем пустое",
  "reference":            "урл сайта-референса",
  "testing":              "урл тестируемого сайта",
  "baseAuth":             true|false, //Если нужно проходить базовую авторизацию на сервере, то true
  "baseLogin":            "dev", 
  "basePassword":         "developer",
  "site_user":            "email@email.com", //пока не используется
  "site_password":        "111111" //пока не используется
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
*Если нужно запустить несколько сценариев, то через запятую без пробела*

```bash
$ npm run back_test --filter=scenario_name_1,scenario_name_2,scenario_name_35
```

-----------------------------------------------------
## Troubleshooting
Если не ставится Chromium, делаем:
```bash
$ npm config set user 0
$ npm config set unsafe-perm true
$ npm install -g backstopjs
```
