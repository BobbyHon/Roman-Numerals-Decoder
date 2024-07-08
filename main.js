function solution (roman) {
    let converter = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100,
                     'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5,
                    'IV': 4, 'I': 1, default: 0}
    let answer = 0
    while(roman){
      if (converter[roman[0]] < converter[roman[1]])
        {
          answer += converter[roman.slice(0, 2)]
          roman = roman.slice(2)
        }
      else{
        answer += converter[roman[0]]
        roman = roman.slice(1)
      }
    }
      return answer;
  }