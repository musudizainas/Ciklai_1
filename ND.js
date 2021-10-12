/* 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for (let i = 0; i <6; i++) {
console.log("Labas");
}
*/

/* 2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti
skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
for (let i = 0; i <5; i++) {
console.log(i);
}
*/

/* 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti
skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
for (let i = 0; i <5; i++) {
console.log(i *10);
}
*/

/* 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti
skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
for (let i = 49; i <=53; i++) {
console.log(i);
}
*/

/* 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti
skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
for (let i = 4; i >=0; i--) {
console.log(i);
}
*/

/*6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti
skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje,
daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
for (let i = 0; i <= 8; i+=2) {
console.log(i);
}
*/

/* 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti
skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
for (let i = 0; i < 5; i+=1) {
console.log( Math.floor(Math.random() * 10));
}
*/

/* 8. console.log’e, naudojant ciklą atspausdinti skirtingus
atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
Paskutinis atspausdintas skaičius turi būti 5
/*
for (let i = 0; i <= 10; i+=1) {
if (i != 5) {
console.log( Math.floor(Math.random() * 10));
}
else {
console.log(i) ;
}
}
//teisingas
/* 
let i = 0; 
    while (i != 5) {
    i = ( Math.floor(Math.random() * 10));
    
    console.log(i) ;
    }
    */


/*9. console.log’e, naudojant ciklą atspausdinti
 atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
  Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
*/
/*
let suma = 0;
while (suma < 100) {
    let nsuma = Math.floor(Math.random() * 10);
    
    suma = suma + nsuma;
    console.log(nsuma, suma);
    }
   */
    
   
       

   /* 10. console.log’e, naudojant ciklą atspausdinti skirtingus 
   atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
    Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
 */
/*
let ciklas = 0; 
let skaicius = 0;   
while (skaicius != (7 || 5)) {
    skaicius = Math.floor(Math.random() * 10);
    ciklas = ciklas + 1;
    console.log(skaicius);    
}
console.log("prasisuko ciklu:", ciklas)
*/


/*11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus 
skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada,
 kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
 */
/*
let cikloNr = 0; 
let suma = 0;   
while (cikloNr < 11 || suma < 20) {
    skaicius = Math.floor(Math.random() * 10);
    suma = suma + skaicius;
    
    cikloNr = cikloNr + 1;
    console.log(skaicius);    
}
console.log("atsitiktskaiciusuma" ,suma);
console.log("prasisuko ciklu:", cikloNr)
*/
/*
12. console.log’e, naudojant ciklą atspausdinti skirtingus
 atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
  Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
*/
/*
let skaicius;
let oddNumberCount = 0;   
while (oddNumberCount < 3) {
    
    skaicius = Math.floor(Math.random() * 10);
    console.log(skaicius);
    if (skaicius % 2 != 0) {
    //    console.log("Nelyginis skaicius"); 
        oddNumberCount = oddNumberCount + 1;

    }
console.log("nelyginiukiekis", oddNumberCount);
}
*/

/*
13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų
 atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
  Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
*/
/*
let skaicius1 = 0;
let skaicius2 = 10;
while (skaicius1 != skaicius2) {
    skaicius1 = Math.floor(Math.random()* 10);
    skaicius2 = Math.floor(Math.random()* 10);
    console.log(skaicius1, skaicius2);

}
*/

/* 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų
 atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
  Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. 
  Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
*/
/*
let skaicius1 = 0;
let skaicius2 = 10;
let suma1 = 0;
let suma2 = 0;
while ((suma1 <= 100) || (suma2 <= 100)) {
    skaicius1 = Math.floor(Math.random()* 10);
    skaicius2 = Math.floor(Math.random()* 10);
    suma1 = suma1 + skaicius1;
    suma2 = suma2 + skaicius2;
    console.log(skaicius1, skaicius2);
}
console.log(suma1, suma2 );
*/

/* 15. console.log’e, naudojant ciklą atspausdinti po porą 
skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
 Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.
*/
/*
let skaicius1, skaicius2;
let oddNumberCount1 = 0; 
let oddNumberCount2 = 0;   
while ((oddNumberCount1 < 3) || (oddNumberCount2 < 3)){
    
    skaicius1 = Math.floor(Math.random() * 10);
    skaicius2 = Math.floor(Math.random() * 10);
    console.log(skaicius1, skaicius2);
    if (skaicius1 % 2 != 0) {
        console.log("Nelyginis skaicius1"); 
        oddNumberCount1 = oddNumberCount1 + 1;

    }
    if (skaicius2 % 2 != 0) {
            console.log("Nelyginis skaicius2"); 
            oddNumberCount2 = oddNumberCount2 + 1;
    
        }
    console.log("oddNumberCount1", oddNumberCount1);  
    console.log("oddNumberCount2", oddNumberCount2);   
//console.log("nelyginiukiekis", oddNumberCount);
}
*/    