// 함수 작성 과제

// 1. 인사말 메시지
function greetUser(username) {
  return `안녕하세요!, ${username}님. 좋은 하루되세요!`
}

 /* 
  function greetUser(username) {
  return "안녕하세요! " + username + "님. 좋은 하루되세요!";
} */

let message = greetUser('김에스더')

// 2. 원가 계산
const calculateOriginalPrice = function(priceWithTax) {
  const taxRate = 0.033
  const price = priceWithTax / (1 + taxRate)
  return price
}


// 3. 주류 판매 가능 여부
const canSellAlcohol = registrationCard => 
  registrationCard.age >= 19


const user1 = {
  name: '김에스더',
  age: 23,
  gender: 'female'
}

console.log(canSellAlcohol(user1))

// 4. 할인가 계산
const getDiscountedPrice = (originalPrice, discountPercent) => 
  originalPrice - (originalPrice * discountPercent)

let originalPrice = 18_700
let discountPercent = 0.2

let discountPrice = getDiscountedPrice(originalPrice, discountPercent)
console.log(discountPrice)

// 5. 등급 판단
function getGradeInfo(score) {

  if (score >= 90 && score <= 100){
    return { score: score, grade: 'A', description: '매우 우수'}
  }
  else if (score >= 80) {
    return {score: score, grade:'B', description: '우수'}
  }
  else if (score >= 70) {
    return {score: score, grade:'C', description: '보통'}
  }
  else if (score >= 60) {
    return {score: score, grade:'D', description: '미달, 통과 기준 근접'}
  }
  else {
    return {score: score, grade:'F', description: '낙제'}
  }
}

const result = getGradeInfo(87)
console.log(result)