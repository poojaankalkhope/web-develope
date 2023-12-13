const dateString= "2020-01-01T00:00:00.000Z";

const date = new Date(dateString);

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`year: ${year}, month: ${month}, day: ${day}, hours: ${hours}, minutes: ${minutes}, seconds: ${seconds}`);