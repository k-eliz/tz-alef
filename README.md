# Тестовое задание для Alef

Выполненное тестовое задание для Alef от [Кулинич Е.А.](https://github.com/k-eliz)

Приложение построено на Vue3 + Vite + JS. Также использовались:

- pinia в качестве хранилища
- vue-router
- eslint в качестве линтера
- prettier для форматирования кода


## Запуск через Docker

Приложение может быть запущено посредством Docker. Для этого нужно перейти в папку проекта и выполнить следующую команду:

```bash
docker build -t vue-interview .
```

Когда сборка завершится, проект нужно запустить и перейти по http://localhost:5173/

```bash
docker run -dp 5173:5173 vue-interview
```

## Запуск через npm

Чтобы запустить проект через npm, требуется зайти в папку проекта и выполнить следующие команды, после чего перейти по предложенной ссылке:

```bash
npm install
npm run dev
```
