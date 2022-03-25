export function romanToInteger(str) {
    let result = 0;
    let prevNum = 0;
    switch (str[0]) {
        case 'I':
            prevNum = 1;
            break;
        case 'V':
            prevNum = 5;
            break;
        case 'X':
            prevNum = 10;
            break;
        case 'L':
            prevNum = 50;
            break;
        case 'C':
            prevNum = 100;
            break;
        case 'D':
            prevNum = 500;
            break;
        case 'M':
            prevNum = 1000;
            break;
    }
    for (let i = 1; i < str.length; i++) {
        let num = 0;
        switch (str[i]) {
            case 'I':
                num = 1;
                break;
            case 'V':
                num = 5;
                break;
            case 'X':
                num = 10;
                break;
            case 'L':
                num = 50;
                break;
            case 'C':
                num = 100;
                break;
            case 'D':
                num = 500;
                break;
            case 'M':
                num = 1000;
                break;
        }
        if (prevNum < num) result += -1 * prevNum;
        else result += prevNum;
        prevNum = num;
    }
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    result += prevNum;
    return result;
}
