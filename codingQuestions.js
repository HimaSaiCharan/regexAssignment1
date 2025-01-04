// 1. Match any string that contains a number.\
'asd2f'.match(/\d/);

// 2. Find all lowercase letters in a string.\
'ThIs is A'.match(/[a-z]/g);

// 3. Match a string that ends with "ed".\
'this is eed'.match(/ed$/);

// 4. Match the word "yes" in a string.\
'yes string yes'.match(/yes/);

// 5. Find any two consecutive vowels in a string.\
'eel pool cat foot koo'.match(/\w*[aeiou][aeiou]\w*/g);

// 6. Match any string containing the word "hello".\
'world hello world'.match(/hello/);

// 7. Find a string that contains exactly two spaces.\
''.match(/^\S*\s\S*\s\S*$/);

// 8. Find a string that starts with "abc".\
''.match(/^abc/);

// 9. Match any string that contains the digit`7`.\
''.match(/7/);

// 10. Find all occurrences of the letter`e`.\
''.match(/(e)/g);

// 11. Match a string that has at least one uppercase letter.\
''.match(/[A-Z]/);

// 12. Find a string with a period(`.`) in it.\
''.match(/\./);

// 13. Match a string that contains a single space.\
''.match(/^\S*\s\S*$/);

// 14. Match all words that start with the letter`c`.\
''.match(/\w*c\w*/g);

// 15. Match a string that contains the sequence "123".\
''.match(/123/);

// 16. Match a string that contains a forward slash(`/`).\
''.match(/\//);

// 17. Find all strings that contain "and".\
''.match(/and/);

// 18. Match a string that starts and ends with the same letter.\
''.match(/^(.)\w*\1$/);

// 19. Match all lowercase letters except "x" and "y".\
''.match(/[^xy]/g);

// 20. Find all words in a string that are exactly 5 letters long.\
''.match(/(.){5}/g);

// 21. Match all words starting with a vowel.\
''.match(/\b[aeiou]\w*/);

// 22. Find all sequences of two or more consecutive digits.\
''.match(/\d{2,}/g);

// 23. Match all words that contain exactly three letters.\
''.match(/\b(.){3}\b/g);

// 24. Find all occurrences of the word "cat" or "dog".\
''.match(/\bcat|dog/);

// 25. Capture the first and last name from a string like`"John Doe"`.\
''.match(/(\w*).*?(\w*)$/);

// 26. Match strings with repeating characters(e.g., `"aa"`, `"bb"`).\
''.match(/(.)\1/g);

// 27. Extract all the hashtags from a tweet.\
''.match(/#\w+/);

// 28. Validate a 24 - hour time format like`"23:59"`.\
''.match(/\d{2}:\d{2}/);

// 29. Capture the area code and phone number from`(123) 456-7890`.\
''.match(/^(\(.{3}\))\s+(.+)/);

// 30. Find sequences of whitespace followed by a word.\
''.match(/\s+\w/g);

// 31. Match strings containing at least one uppercase and one digit.\
''.match(/([A-Z]).*(\d)|(\d).*(A-Z)/);

// 32. Find all non - alphanumeric characters in a string.\
''.match(/[^d0-z]/g);

// 33. Match email addresses.\
''.match(/^\w+@\w+\.\w+$/);

// 34. Validate dates in the format`YYYY-MM-DD`.\
''.match(/^\d{4}-\d{2}-\d{2}/);

// 35. Extract the filename and extension from a path like`/path/to/file.txt`.\
''.match(/\w+\.\w+/);

// *********************************************************************

// 36. Find all duplicate words in a sentence.\
''.match(/(\b\w+).*\1/);

// *********************************************************************

// 37. Match words that do not contain the letter "e".\
''.match(/\b[^e]+\b/gi);

// 38. Extract the domain name from a URL like`https://www.example.com`.\
''.match(/\w+:\/\/\w+\.(\w+\.\w+)/)[1];

// 39. Match strings containing three consecutive vowels.\
''.match(/w*[aeiou][aeiou][aeiou]w*/gi);

// 40. Find all 4 - letter palindromes in a string.
''.match(/(\w+?)(\w+?)\2\1/g);
