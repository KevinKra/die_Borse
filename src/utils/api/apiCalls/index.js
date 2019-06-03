import { API_KEY_IEX, API_KEY_AA } from "../apikey";

// 2019-05-31

export const dateToday = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const year = today.getFullYear();
  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;
  const date = `${year}-${mm}-${dd}`;
  return date;
};

export const IntradayFive = async () => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=${API_KEY_AA}`
  );
  const parse = await response.json();
  const todaysDate = dateToday();
  console.log(todaysDate);
  const keys = Object.keys(parse[`Time Series (5min)`])
    .map(key => key.slice(0, 10))
    .filter(element => element === todaysDate);

  const entries = Object.entries(parse[`Time Series (5min)`]);

  const filter = entries
    .filter(entry => {
      // console.log("entry", entry);
      // console.log("key", keys[0]);
      // console.log("typeOf", typeof keys[0]);
      // console.log("test", entry[0].includes(keys[0]));
      // if (entry[0].includes(keys[0])) return
      return entry[0].includes(`${keys[0]}`);
    })
    .map(element => {
      return element[1];
    });

  console.log("filter", filter);
};
