const app = document.querySelector("#app");

const toRightCase = (val) => {
  const valAsArr = val.toString();
  if (valAsArr[valAsArr.length - 1] < 5 && valAsArr[valAsArr.length - 1] > 0) {
    return `${val} дня`;
  } else {
    return `${val} дней`;
  }
};

const countRes = () => {
  const date = new Date();

  const timeOfDay = () => {
    const hours = date.getHours();
    if (hours >= 23 && hours < 5) {
      return "Доброй ночи, Милорд!";
    } else if (hours >= 5 && hours < 11) {
      return "Доброе утро, Милорд!";
    } else if (hours >= 11 && hours < 17) {
      return "Добрый день, Милорд!";
    } else if (hours >= 17 && hours < 23) {
      return "Добрый вечер, Милорд!";
    } else {
      console.log(hours);
    }
  };

  const dayOfWeek = () => {
    const day = date.getDay();
    switch (day) {
      case 0:
        return "Воскресенье";
      case 1:
        return "Понедельник";
      case 2:
        return "Вторник";
      case 3:
        return "Среда";
      case 4:
        return "Четверг";
      case 5:
        return "Пятница";
      default:
        return "Суббота";
    }
  };

  const currentTime = () => {
    const time = date.toLocaleTimeString("en");
    let timeValues = time.split(" ")[0].split(":");
    timeValues.forEach((item, i) => {
      if (item.length === 1) {
        timeValues[i] = `0${item}`;
      }
    });
    return `${timeValues.join(":")} ${time.split(" ")[1]}`;
  };

  const timeToNY = () => {
    const newYearDate = new Date(`${date.getFullYear()}, 12, 31`);
    return Math.ceil(
      (newYearDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24
    );
  };

  app.innerHTML = `${timeOfDay()} </br> 
        Сегодня: ${dayOfWeek()} </br> 
        Текущее время: ${currentTime()} </br>
        До Нового года осталось ${toRightCase(timeToNY())}`;
};

setInterval(countRes, 1000);
