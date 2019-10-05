# BackstopJS - test regressive

![node](https://img.shields.io/badge/node-8.10.0-blue)
![npm](https://img.shields.io/badge/npm-6.4.1-reg)
![puppeteer](https://img.shields.io/badge/puppeteer-1.20.0-orange)

BackstopJS automates visual regression testing of your responsive web UI by comparing DOM screenshots over time.

Основано на [Garris/BackstopJS](https://github.com/garris/BackstopJS)

___________________________________________

## Установка и настройка backstopjs
1. В корне проекта выполняем:
```bash
$ npm i
```

2. Скопировать переменные `BACKSTOP_*` из *.env.default* в *.env* и проставить свои значения:
```
BACKSTOP_DEBUG              = true # переменная только для работы BackstopJS (например скрывает баннеры)
BACKSTOP_REFERENCE_URL      = https://SITE_URL # Сайт-эталон
BACKSTOP_TESTING_URL        = http://DEV_SITE_URL # Тестируемый сайт
```

3. Конфиги

Файлы конфигов лежат в `./src/backstopjs/`

Кастомизация puppeter и chromy - `backstop_data/engine_scripts/`

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
## Сценарии (scenario_name)
В данной версии сценарии разделены на `similar` и `separate` (./src/backstopjs/tests)

#### Similar
**Similar** обследуют сквозные блоки на одной странице (главной). 

* header
* footer

#### Separate
**Separate** обследуют как конкретные страницы, так и кастомные селекторы внутри разных страниц.

    some_page,
    some_page2