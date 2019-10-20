/*
Assignment 1: 99 Bottles of Beer
Write a script that prints the lyrics to “99 Bottles of Beer on the Wall” in the terminal. If you’re unfamiliar with the song, you can find the lyrics here
Make sure your program can handle both singular and plural cases (i.e. both “100 bottles of beer” and “1 bottle of beer”).
*/

for (let i = 99; i >= 0; i--) {
  const all = 99;
  if (i === 0) {
    console.log(
      `No more bottles of beer on the wall, no more bottles of beer. 
      Go to the store and buy some more, ${all} bottles of beer on the wall.`
    );
  } else if (i === 1) {
    console.log(
      `${i} bottle of beer on the wall, ${i} bottle of beer.
       Take one down and pass it around, no more bottles of beer on the wall.`
    );
  } else {
    console.log(
      `${i} bottles of beer on the wall, ${i} bottles of beer. 
      Take one down and pass it around, ${i - 1} bottles of beer on the wall.`
    );
  }
}
