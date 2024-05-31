export const celsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;
export const celsiusAKelvin = (celsius) => celsius + 273.15;

export const fahrenheitACelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
export const fahrenheitAKelvin = (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15;

export const kelvinACelsius = (kelvin) => kelvin - 273.15;
export const kelvinAFahrenheit = (kelvin) => (kelvin - 273.15) * 9/5 + 32;
