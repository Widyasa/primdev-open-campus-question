//perbaiki error dibawah ini. code ini diharapkan agar kode mampu melakukan convert suhu 293 kelvin, menuju formal celcius dan fahrenheit
const kelvin = 0;
const celcius = kelvin - 273;
let fahrenheit = celcius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is ${fahrenheit} degrees Fahrenheit.');
let newton = celcius * (33/100);
newton = Math.log(newton);
console.log('The temperature is ${newton} degrees Newton.');