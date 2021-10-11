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
for (let i = 0; i < 5; i+=1) {
if (i < 4) {
console.log( Math.floor(Math.random() * 10));
}
else {
console.log(5) ;
}
}
*/
/*9. console.log’e, naudojant ciklą atspausdinti
 atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
  Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
*/
for (let i = 0; i <=10; i+=1) {
    if (i < 10) {
    console.log( Math.floor(Math.random() * 10));
    }
    else {
    console.log(100) ;
    }
    }