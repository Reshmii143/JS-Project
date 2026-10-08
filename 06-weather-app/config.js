// Конфигурационный файл

const CONFIG = {
  WEATHER_API_KEY: "2bf632463de4345398201828abeaf646",
};

// Экспортируем для использования в других файлах
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
