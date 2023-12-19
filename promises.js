// Create a new Date object representing the current date and time
const currentDate = new Date();

// Get various components of the date
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Format the date and time as a string
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

console.log(formattedDateTime);
