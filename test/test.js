'use strict';
const {extract} = require('../src/index.js');

console.log('Testing extraction on a basic sentence');
console.log('--------------------------------------');
console.log(extract('This is a sentence. Cool! Maybe? 3.141592 is a number.'));

console.log('');
console.log('Testing extraction with custom dividers');
console.log('--------------------------------------');
console.log(extract('This is a sentence ending in | Another ) ', {divider: ['|', ')']}));

console.log('');
console.log('Testing extraction with custom abbrev.');
console.log('--------------------------------------');
console.log(extract('Po. test is a tf. person.', {abbrev: ['po', 'tf']}));
console.log('');

console.log('Testing extraction with specific word');
console.log('--------------------------------------');
console.log(extract('This is a sentence. Cool! Maybe? 3.141592 is a number.  Okay, den you listen to me!', {word: 'is'}));

