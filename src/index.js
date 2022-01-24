module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    for (let i = 0; i < str.length; i += 1) {
        for (let j = 0; j < bracketsConfig.length; j += 1) {
            if (str[i] === bracketsConfig[j][0]
              && str[i] === bracketsConfig[j][1]) {
                if (brackets.length === 0 
                  || brackets[brackets.length - 1] !== bracketsConfig[j][0]) {
                  brackets.push(str[i]);
                } else {
                  brackets.pop();
                }
            } else {
                if (str[i] === bracketsConfig[j][0] 
                  || str[i] === bracketsConfig[j][1] 
                  && brackets[brackets.length - 1] !== bracketsConfig[j][0]) {
                    brackets.push(str[i]);
                } else if (str[i] === bracketsConfig[j][1] 
                  && brackets[brackets.length - 1] === bracketsConfig[j][0]) {
                    brackets.pop();
                }
            }
        }

    }
    return brackets.length === 0;
}
