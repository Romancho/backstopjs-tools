# BackstopJS - test regressive

![node](https://img.shields.io/badge/node-8.10.0-blue)
![npm](https://img.shields.io/badge/npm-6.4.1-reg)
![puppeteer](https://img.shields.io/badge/puppeteer-1.20.0-orange)

BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.

Основано на [Garris/BackstopJS](https://github.com/garris/BackstopJS)

___________________________________________

## Установка и настройка backstopjs
1.Если не стоит **backstopjs**, нужно поставить backstopjs глобально (в зависимости от ОС c `sudo` или без (Windows)):
```bash
$ sudo npm install -g backstopjs
```
_Если в процессе установки возникнут проблемы с Chromium/Puppeter, то необходимо действовать так:_
```bash
$ sudo npm config set user 0
$ sudo npm config set unsafe-perm true
$ sudo npm install -g backstopjs
```
2.Клонируем репозиторий, заходим в проект и выполняем установку пакетов:
```bash
$ git clone https://github.com/Romancho/backstopjs-tools
$ cd backstopjs-tools
$ npm i
```
3.Далее копируем test.config.json в config.json, вносим значения и делаем:
```bash
$ cp test.config.json bs-config.json
$ nano bs-config.json
```

```json
  "module":               "название предустановленного конфига, если нет, то оставляем пустое",
  "reference":            "урл сайта-референса",
  "testing":              "урл тестируемого сайта",
  "baseAuth":             true|false, //Если нужно проходить базовую авторизацию на сервере, то true
  "baseLogin":            "dev", 
  "basePassword":         "developer",
  "site_user":            "email@email.com", //пока не используется
  "site_password":        "111111" //пока не используется
```

4.Конфиги

Данная сборка может использоваться и как `as is`, так и с предустановленными конфигами для отдельных частных проектов. 
Конфиги лежат в **частном (закрытом)** репозитории, в котором **необходимо авторизоваться** через консоль.
Если используем предустановленные конфиги из своего частного репозитория, то:

скопировать test.npmrc в .npmrc:
```bash
$ cp test.npmrc .npmrc
```
и прописать свой url к частному репозиторию. Далее:
```bash
$ npm i bs-название проекта
```
Далее в config.json вносим название в `"module"`:
```json
     "module":            "bs-name"
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
