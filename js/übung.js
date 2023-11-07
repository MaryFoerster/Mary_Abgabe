

let x = 214;
let b = 35;
let sum = 0;

let months = ["Januar", "Februar", "März", "April", "Mai", "Juni"];

let tableHTML = "<table><tr><th>Monat</th><th>Ausgaben</th></tr>";

for (let i = 1; i <= 6; i++) {
  x = x + b;
  tableHTML += "<tr><td>" + months[i - 1] + "</td><td>" + x + "</td></tr>";
  sum += x;
}

tableHTML += "<tr><td colspan='2'>Summe: " + sum + "</td></tr>";

let average = sum / 6;
tableHTML += "<tr><td colspan='2'>Durchschnitt: " + average.toFixed(2) + "</td></tr></table>";

document.write(tableHTML);