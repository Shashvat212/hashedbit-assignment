//Q1) Filter Indian States

const states = ["Andhra Pradesh", "Bihar", "Gujarat", "Haryana", "Uttarakhand", "Uttar Pradesh"];
const filteredStates = states.filter(state => !/^[aeiou]/i.test(state));
console.log(filteredStates); 

//Q2) Reverse Words in Sentence

let str1 = 'I love my India';
let output1 = str1.split(' ').reverse().join(' ');
console.log(output1); 

//Q3) Splice String

let string = 'INDIA';  
let arr = string.split(''); 
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
let output2 = arr.join('');
console.log(output2); 

//Q4) Count Consonants and Vowels

let str = "Programming is very interesting and fun to learn.";
let vowels = 0, consonants = 0;
str.replace(/[a-z]/gi, (char) => {
    if (/[aeiou]/i.test(char)) vowels++;
    else consonants++;
});
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);

//Q5) Replace Word Function

function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}
console.log(correctfn("I love to code in Java", "Java", "JavaScript"));

//Q6) Filter Numbers Greater Than 5

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let result1 = inputArr.filter(num => num > 5);
console.log(result1); 

//Q7) Calculate Average Scores

const students1 = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = students1.map(student => ({
    name: student.name,
    average: student.scores.reduce((a, b) => a + b, 0) / student.scores.length
}));
console.log(result);

//Q8) Repeated Sum of Digits

function repeatedSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}
console.log(repeatedSum(456)); 

//Q9) Word Count in Paragraph

function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
console.log(countWords("This is a simple paragraph to test word count."));

//Q10) Reverse String

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello")); 

//Q11) Calculate Average from Object Array

const students = [
    { student1: { s1: 44, s2: 56, s3: 87, s4: 97, s5: 37 } },
    { student2: { s1: 44, s2: 56, s3: 87, s4: 97, s5: 37 } },
    { student3: { s1: 44, s2: 56, s3: 87, s4: 97, s5: 37 } }
];

const averages = students.map(obj => {
    const key = Object.keys(obj)[0];
    const scores = Object.values(obj[key]);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return { [key]: { average: avg } };
});
console.log(averages);
