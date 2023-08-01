// const s = 'd3b9UUYE1Ta3b9l7he81';
// const p1 = 'd3b9UUYE1T';
// const p2 = 'a3b9l7he81';

// const s = 'z2gzezrRXczeqI4UDou';
// const p1 = 'z2zrRce4U';
// const p2 = 'gezXzqIDou';

// const s = '612j4F4D3JIaRlamEVa';
// const p1 = '62443IRaEa';
// const p2 = '1jFDJalmV';

// const s = ' Hacker News! ';
// const p1 = ' cker s ';
// const p2 = 'HaNew!';

const s = 'radency';
const p1 = 'rdae';
const p2 = 'ncy';

// const s = 'Do you have a cup of tea? Yes, I do!';
// const p1 = ' yo ha a cof tea Yes I';
// const p2 = 'Douveup ?, do!';

// const s = 'd3b9UUYE1Ta3b9l7he81';
// const p1 = 'd3b9UUYE1T';
// const p2 = 'a3b9l7he81';

// const s = 'd3b9UUYE1Ta3b9l7he81';
// const p1 = 'd3b9UUYE1T';
// const p2 = 'a3b9l7he81';

function stringChecker(s, p1, p2) {
   s = s.replace(/ /g, '');
   p1 = p1.replace(/ /g, '');
   p2 = p2.replace(/ /g, '');

   if ((p1.length + p2.length) - s.length != 0) return false;

   // let result = '';
   // debugger
   // for (let i = 0; i < s.length; i++) {
   //    for (let j = 0; j < p1.length; j++) {
   //       if (s[i] == p1[j]) {
   //          result += p1[j];
   //       };
   //    };

   //    for (let k = 0; k < p2.length; k++) {
   //       if (s[i] == p2[k]) {
   //          result += p2[k];
   //       };
   //    };
   // };

   // if (result == s) {
   //    return true;
   // } else {
   //    return false;
   // };
   //--------------------------------------------------------


   let result = '';

   debugger
   for (let i = 0; i < s.length; i++) {
      if (p1.includes(s[i])) {
         p1.indexOf(s[i]);
         result += p1[p1.indexOf(s[i])];
      } else if (p2.includes(s[i])) {
         result += p2[p2.indexOf(s[i])];
      };
   };

   console.log(result);

   if (result == s) {
      return true;
   } else {
      return false;
   };
};

console.log(stringChecker(s, p1, p2));

