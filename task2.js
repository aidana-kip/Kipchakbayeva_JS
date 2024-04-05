function checkParentheses(s) {
  const arr = [];
  const pairs = {
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pairs[char]) {
      arr.push(char);
    } else {
      // Если это закрывающая скобка
      const last = arr.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }

  return arr.length === 0 ? true : false;
}

console.log(checkParentheses("[((())()(())]]"));
console.log(checkParentheses("[((())()(()))]")); //правильный вариант 1
console.log(checkParentheses("[[(())()(())]]")); //правильный вариант 2
