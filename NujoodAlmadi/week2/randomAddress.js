/*
Assignment 2: Random Address Generator
Write a script that can generate random addresses
As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
Your script should randomly select one item from each of these arrays and then use them to construct a random address
Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
node random-address.js
=> 34578 Dolphin Street, Wonka NY, 44506 
*/

// Data generated via: http://www.databasetestdata.com/

const streetNumber = [
  203,
  4008,
  71869,
  8308,
  97642,
  175,
  26310,
  6111,
  748,
  9735,
  645,
  266,
  621,
  90223,
  08516,
  3857,
  3217,
  8399,
  2076,
  992,
  60892,
  1184,
  167,
  3845,
  8649,
  895,
  99106,
  00412,
  7360,
  46041,
  3670,
  4766,
  0411,
  768,
  3359,
  552,
  6157,
  92892,
  258,
  510,
  451,
  58179,
  905,
  71608,
  60497,
  6386,
  552,
  441,
  3877,
  2356
];
const streetName = [
  "Destinee Springs",
  "Bernier Square",
  "Brakus Crest",
  "Meghan Courts",
  "Julius Estate",
  "Colten Village",
  "Loma Manors",
  "Bergstrom Rapids",
  "Clarabelle Tunnel",
  "Lemuel Wall",
  "Bosco Mountains",
  "Ryan Neck",
  "Ratke Mall",
  "Denesik Estates",
  "Marcelle Island",
  "Renner Trafficway",
  "Stokes Cliffs",
  "Koch Junction",
  "Pouros Run",
  "Hahn Plaza",
  "Hauck Lodge",
  "Marks Mills",
  "Bergnaum Stream",
  "Gulgowski Wells",
  "Adah Spurs",
  "Hoeger Avenue",
  "Ettie Knoll",
  "Gregory Divide",
  "Tyra Mountains",
  "Patrick Manor",
  "Borer Spur",
  "Stokes Roads",
  "Wendy Pike",
  "Eulah Plain",
  "Marta Causeway",
  "Herbert Roads",
  "Reese Place",
  "Melvina Shores",
  "Weber Highway",
  "Bechtelar Dam",
  "Blick Court",
  "Beahan Vista",
  "Macejkovic Ridge",
  "Magdalena Coves",
  "Cali Centers",
  "Rowland Skyway",
  "Oswaldo Trail",
  "Angie Keys",
  "Jaren Fields",
  "Alia Hollow"
];
const cityName = [
  "Aliviaview",
  "Considineborough",
  "Kesslerbury",
  "Bodehaven",
  "Port Eino",
  "North Clyde",
  "Lake Analand",
  "North Juana",
  "Anikamouth",
  "Rohanberg",
  "Lenoreton",
  "Shieldsmouth",
  "North Tamara",
  "North Kenborough",
  "North Dixie",
  "Reichertmouth",
  "Blaiseland",
  "Eugenechester",
  "Kuphalchester",
  "Judgemouth",
  "New Kylerchester",
  "Sallieview",
  "New Vida",
  "Lake Jamey",
  "Leuschkemouth",
  "Shaniaborough",
  "Port Albertview",
  "West Emilberg",
  "Lake Brycen",
  "Darbyberg",
  "West Lavinaport",
  "Satterfieldmouth",
  "West Jeremystad",
  "East Eugeniahaven",
  "Pfannerstillfort",
  "Zemlakberg",
  "Cartwrightbury",
  "West Damon",
  "Lake Murlborough",
  "North Kayafurt",
  "Bashirianbury",
  "Grimeshaven",
  "Clemmieview",
  "Trevershire",
  "Kundeland",
  "Adamsside",
  "South Braedenton",
  "East Kennediport",
  "Grahamview",
  "Lelahville"
];
const stateName = [
  "Louisiana",
  "Hawaii",
  "Virginia",
  "Idaho",
  "West Virginia",
  "Iowa",
  "Kentucky",
  "Colorado",
  "New Hampshire",
  "Texas",
  "Kansas",
  "Wyoming",
  "Mississippi",
  "Alabama",
  "Alabama",
  "Texas",
  "North Carolina",
  "Maryland",
  "Illinois",
  "Oregon",
  "Wyoming",
  "New Mexico",
  "Iowa",
  "Arizona",
  "Maine",
  "Indiana",
  "Nevada",
  "New Hampshire",
  "Kentucky",
  "Idaho",
  "Hawaii",
  "New York",
  "Arizona",
  "New Mexico",
  "Nevada",
  "Alaska",
  "Oklahoma",
  "Montana",
  "New Jersey",
  "Washington",
  "West Virginia",
  "Wyoming",
  "Vermont",
  "Arizona",
  "Washington",
  "Arkansas",
  "Oregon",
  "Wisconsin",
  "West Virginia",
  "Washington"
];
const zipCode = [
  40882,
  44351,
  31943,
  41020,
  43761,
  32322,
  20406,
  55007,
  86420,
  26276,
  88639,
  73876,
  09511,
  98241,
  09349,
  08351,
  05145,
  03011,
  6512,
  91569,
  84967,
  54168,
  39988,
  10032,
  73536,
  49336,
  43885,
  55340,
  88144,
  91055,
  16378,
  45780,
  35894,
  32344,
  06763,
  01637,
  12750,
  58161,
  55970,
  42552,
  74696,
  92691,
  99535,
  75016,
  51961,
  62342,
  48943,
  10542,
  60465,
  35693
];

function randomValue(arrayName) {
  // Generating a random number from 0 to (length of array - 1)
  const randomIndex = Math.floor(Math.random() * arrayName.length);
  // Returning a random value
  return arrayName[randomIndex];
}

function randomAddress() {
  return console.log(
    `${randomValue(streetNumber)} ${randomValue(
      streetName
    )} Street, ${randomValue(cityName)} ${randomValue(
      stateName
    )}, ${randomValue(zipCode)}`
  );
}

randomAddress();
