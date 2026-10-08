lus operators:-


1-A teacher has 53 students and forms groups of 5. Find the number of students left over.
2- A shop has 128 candies and packs 10 candies in each box. Find the number of candies left unpacked.
3- A factory produces 237 toys and packs them in boxes of 6. Find how many toys are left after packing full boxes.
4- A bus can carry 40 passengers. If 185 people are waiting, find how many people will be left after filling as many full buses as possible.
5- Predict the output:
let a = 10;
let b = 0;
let result = a % b;
console.log(result);
7-What is the output of 29 % 5?
8-There are 23 chocolates to be packed in boxes of 4. How many chocolates will be left over?
9-What is the result of 0 % 7 and 15 % 0? Explain.
10-A number of pages (47) needs to be printed on sheets that hold 6 pages each. How many full sheets are needed and how many pages will be left over? Write expressions using % and /.
Predict and explain the outputs (especially the signs):
console.log(17 % 5);
console.log(-17 % 5);
console.log(17 % -5);
console.log(-17 % -5);
console.log(10 % 0);





// -------1---------
let student=53;
let formgroupof= 5;
let leftgroup= student%formgroupof;
console.log(leftgroup);


// -----------2-----------
let candy=128
let eachbox = 10
let leftcandy= candy%eachbox
console.log("leftcandy:" , leftcandy)

// -----------3----------
let toys= 237;
let boxes=6;
let leftboxes= toys%boxes
console.log("leftboxes:" , leftboxes)

//----------4---------------
let passangers = 40;
let people = 185;
let peopleleft= people%passangers
comnsole.log("peopleleft:" , peopleleft)

// ----------5--------------
let a = 10;
let b = 0;
let result = a % b;
console.log(result);

// output is NaN

// -----------------6---------------
console.log(29%5)

// ---------7------------
let chocolate=23
let boxes=4
let leftchocolate= chocolate/boxes
console.log("leftchocolate:" , leftchocolate)

// ========8================
console.log(0%7) //0
console.log(15%0)//NaN


// ---------------9---------------
let pages= 47
let eachpage= 6
let needpage= pages/eachpage
let leftpage= pages%eachpage
console.log("needpage:" , needpage)
console.log("leftpage:" ,leftpage )

// ----------10-----------------
console.log(17 % 5); //2
console.log(-17 % 5);//-2
console.log(17 % -5);//2
console.log(-17 % -5);//-2
console.log(10 % 0);// NaN

