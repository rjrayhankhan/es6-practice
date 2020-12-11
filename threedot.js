//... three dot use practis

const ages = [10, 13, 15, 17, 19];
const ages2 = [14, 15, 18];
const ages3 = [21, 22, 20, 26];

const allAges = ages.concat(ages2).concat(ages3);
//second useful and easy way
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);

//max array
//kunta boro seta ver korar jonno
const business = 520;
const minister = 630;
const sochib = 750;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

 //second way
 const takaPoisa = [526, 710, 640];
 const maximum = Math.max(...takaPoisa);
 console.log(maximum)