### **Type 1: Explanation**

1. What does the expression `"cat, bat, rat".match(/b\w+/)` do ?

A. Match the letter 'b' followed by one or more characters in the string.

2. What will `"123-456-7890".match(/\d{3}/)` return?

A. Match exactly first 3 digits in the string.

3. What does `"hello\nworld".match(/.\n./)` return?

A. Match any character in the string followed by '\n' and followed by any
character.

4. What will `"name@example.com".match(/\w+@\w+\.\w+/)` return?

A. Match the one or more word characters that is followed by '@',followed by
another one or more word character, followed by '.' , which is followed by a one
or more word character.

5. What does `"file.txt".match(/\.txt/)` do?

A. Match the literal '.txt' from the string

6. What does `"red green blue".match(/green/)` do?

A. Match the literal 'green' from the string

7. What will `"abcdef".match(/[a-c]/)` return?

A. Match the character that is one of the range a-c

8. What does `"The quick brown fox".match(/q.+?k/)` return?

A. Match the letter 'q' which is followed by the 1 or more word characters and
zero or one 'k'

9. What does `"apple".match(/a[a-z]+/)` return?

A. Match the 'a' followed by one or more lowercase characters

10. What will `"a1b2c3".match(/\d+/)` return?

A. Match one or more digits from the string.

11. What does `"good food mood".match(/o+o/)` do?

A. Match one or more occurances of 'o' followed by another 'o'.

12. What does `"@username".match(/@\w+/)` return?

A. Match the literal '@' followed by one or more word characters.

13. What does `"path/to/file".match(/\/to\//)` do?

A. return match '/' followed by the literal 'to' , followed by the '/'.

14. What does `"1.23".match(/\d\.\d+/)` return?

A. ['1.23']

15. What will `"AB123CD".match(/[A-Z]+\d+/)` return?

A. ['AB123']

16. What does `"hello_world".match(/\w+_\w+/)` return?

A. ['hello_world']

17. What does `"123abc456".match(/\d{3}/)` return?

A. ['123']

18. What does `"My name is John".match(/name\s\w+/)` return?

A. ['name is']

19. What will `"https://example.com".match(/https?:\/\/\w+\.\w+/)` return?

A. ['https://example.com']

20. What does `"abcdEFGH".match(/[A-Z]+/)` return?

A. ['EFGH']

21. What does `"abc123".match(/(\w)(\d)/)` return? //doubt

A. ['c1']

22. What will `"hello world".match(/(\w+)\s(\w+)/)` return?

A. ['hello world', 'hello', 'world']

23. What does `"1234".match(/\d{2,3}/)` return? // doubt

A. ['123']

24. What will `"aaaabbb".match(/a{2,}/)` return?

A. ['aaaa']

25. What does `"hello".match(/[aeiou]{2}/)` return?

A. null

26. What does `"ABCD1234".match(/[A-Z]+\d+/)` return? // doubt

A. ['ABCD1234']

27. What does `"file_name.ext".match(/(\w+)\.(\w+)/)` return?

A. ['file_name.ext', 'name', 'ext']

28. What does `"Mississippi".match(/s{2,}/)` return?

A. ['ss']

29. What will `"hello world".match(/(\w)(?=\s\w)/)` return?

A. ['o', 'o']

30. What does `"2025-01-01".match(/\d{4}-(\d{2})-(\d{2})/)[2]` return?

A. ['01']

31. What does `"abc123".match(/(\d+)(\w+)/)` return? //doubt

A. 123

32. What does `"hello123".match(/\D+/)` return?

A. ['hello']

33. What will `"yes no maybe".match(/(\w+)\s(\w+)\s(\w+)/)` return?

A. ['yes no maybe', 'yes', 'no', 'maybe']

34. What does `"color: #123456".match(/#[0-9a-fA-F]{6}/)` return?

A. ['#123456']

35. What does `"aaa111bbb222".match(/([a-z]+)(\d+)/)` return?

A. ['aaa111', 'aaa', '111']

36. What will `"1,234.56".match(/\d{1,3}(,\d{3})*\.\d{2}/)` return?

A. ['1,234.56', ',234']

37. What does `"aabbcc".match(/a(b{2})c/)` return?

A. ['abbc', 'bb']

38. What does `"xyzz".match(/x(y(z))/)` return?

A. ['xyz', 'yz', 'z']

39. What does `"abab".match(/(ab)\1/)` return?

A. ['abab', 'ab']

40. What will `"abc123abc".match(/(abc)\d+\1/)` return?

A. ['abc123abc', 'abc']
