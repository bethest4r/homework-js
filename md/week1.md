# 1주차 과제

## 목차
- [변수와 상수 작성 과제](#변수와-상수-작성-과제)
- [함수 작성 과제](#함수-작성-과제)

## 변수와 상수 작성 과제

### 1. 사용자 이름을 저장할 변수를 선언하고 `"자신의 이름"`을 할당하세요.

```js
let userName = '김에스더';
```

**설명:**
사용자의 이름은 변경될 가능성이 있는 값이기 때문에 `let` 키워드를 사용했다.

---

### 2. 절대 영도(온도의 최저 한계)인 `-273.15°C`를 담을 상수를 선언하세요.

```js
const absoluteZero = -273.15;
```

**설명:**
절대 영도는 과학적으로 고정된 값이므로 **변하지 않는 상수**로 보고 `const`를 사용했다.
단위는 계산에 영향을 줄 수 있기 때문에 값에는 포함하지 않고, **숫자만** 저장하였다.

---

### 3. 로그인 여부를 확인하는 불리언 타입 변수를 선언하고 적절한 값을 할당하세요.

```js
let isLoggedIn = true;
```

**설명:**
로그인 상태는 `true` 또는 `false` 중 하나만 가지는 Boolean 타입이며, 상황에 따라 상태가 바뀔 수 있으므로 `let`으로 선언했다.

---

### 4. 사용자 나이 변수를 선언하고 숫자 값을 할당하세요.

```js
let userAge = 23;
```

**설명:**
사용자의 나이는 숫자(Number) 타입이며 언제든 변경될 수 있는 정보이므로 `let`으로 선언했다.

---

### 5. 상품 가격(예: 39,900원)을 담는 변수를 작성하세요.

```js
let productPrice = 39_000;
```

**설명:**
가격은 숫자(Number) 타입으로 저장하며, 가독성을 높이기 위해 숫자 구분자 `_`를 사용했다.
가격은 할인, 프로모션 등으로 바뀔 수 있으므로 `let`을 사용했다.

---

### 6. 웹 페이지의 배경색을 담는 상수를 작성하고 적절한 값을 할당하세요.

```js
const backgroundColor = '#ffffff';
```

**설명:**
배경색은 일반적으로 앱 전체에서 고정된 값이므로 `const`로 선언했다.

---

### 7. 사용자가 작성한 댓글 수를 담는 변수를 선언하고 값을 할당하세요.

```js
let commentCount = 12;
```

**설명:**
댓글 수는 동적으로 변하는 값이므로 `let`을 사용했다.

---

### 8. 현재 페이지 번호(예: 3)를 담는 변수를 작성하고 적절한 값을 할당하세요.

```js
let currentPage = 3;
```

**설명:**
페이징 기능에서 현재 페이지 위치는 계속 변하기 때문에 `let`으로 선언했다.

---

### 9. 회원 등급('VIP', '골드', '실버' 중 하나)을 담는 변수를 작성하세요.

```js
let userGrade = 'VIP';
```

**설명:**
회원 등급은 문자열(String)로 표현되며, 사용자 상태에 따라 바뀔 수 있으므로 `let`을 사용했다.

---

### 10. 버튼이 클릭되었는지 여부를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.

```js
let isButtonClicked = false;
```

**설명:**
버튼의 클릭 상태는 `true` 또는 `false`로 표현되며, 동적으로 바뀌므로 `let`을 사용했다.

---

## 함수 작성 과제

### 1. 인사말 메시지

> 사용자 이름을 매개변수로 받아,
> `"안녕하세요! {이름}님. 좋은 하루되세요!"` 형식의 인사말을 반환하는 함수를 작성합니다.

```js
function greetUser(username) {
  return `안녕하세요!, ${username}님. 좋은 하루되세요!`;
}

let message = greetUser('김에스더');
```

**설명:**

* `function` 키워드를 이용한 **함수 선언식**으로 작성했다.
* 사용자 이름이 변할 수 있으므로 매개변수 `username`을 사용하였다.

---

## 2. 원가 계산

> 세금 포함 가격과 세율(3.3%)을 이용해
> **세전 원가(= 세후 금액 ÷ 1.033)** 를 반환하는 함수를 작성합니다.

```js
const calculateOriginalPrice = function(priceWithTax) {
  const taxRate = 0.033;
  const price = priceWithTax / (1 + taxRate);
  return price;
};
```

**설명:**

* **함수 표현식**을 사용했다 (`function`을 변수에 할당).
* 고정된 세율 3.3%를 `taxRate` 상수로 지정한 뒤,
* `priceWithTax / 1.033` 계산식을 통해 원가를 반환했다.

---

## 3. 주류 판매 가능 여부

> 신분증 정보를 객체로 받아,
> `age` 값이 19세 이상이면 `true`, 아니면 `false`를 반환하는 함수를 작성합니다.

```js
const canSellAlcohol = registrationCard => 
  registrationCard.age >= 19;

const user1 = {
  name: '김에스더',
  age: 23,
  gender: 'female'
};

console.log(canSellAlcohol(user1));  // true
```

**설명:**

* **화살표 함수(Arrow Function)** 표현식을 사용했다.
* `registrationCard` 객체의 `age` 값이 19 이상인지 판별하는 간단한 조건식으로 `Boolean` 값을 반환한다.
* 테스트용 객체 `user1`을 만들어 정상 동작을 확인했다.

---

## 4. 할인가 계산

> 판매가와 할인율(예: 0.2)을 받아,
> `할인가 = 판매가 - (판매가 × 할인율)` 공식을 적용한 값을 반환합니다.

```js
const getDiscountedPrice = (originalPrice, discountPercent) => 
  originalPrice - (originalPrice * discountPercent);

let originalPrice = 18_700;
let discountPercent = 0.2;

let discountPrice = getDiscountedPrice(originalPrice, discountPercent);
console.log(discountPrice);  // 14960
```

**설명:**

* **화살표 함수**를 사용해 간결하게 작성했다.
* 입력값으로 원래 가격과 할인율을 받고, 계산식을 통해 최종 할인가를 반환했다.
* 숫자 구분자 `_`는 가독성을 높여주는 표기법이며, 값에는 영향을 주지 않는다.

---

## 5. 등급 판단

> 점수를 받아, 점수에 따라 등급과 설명을 포함한 객체를 반환하는 함수를 작성합니다.

```js
function getGradeInfo(score) {
  if (score >= 90 && score <= 100){
    return { score: score, grade: 'A', description: '매우 우수' };
  }
  else if (score >= 80) {
    return { score: score, grade: 'B', description: '우수' };
  }
  else if (score >= 70) {
    return { score: score, grade: 'C', description: '보통' };
  }
  else if (score >= 60) {
    return { score: score, grade: 'D', description: '미달, 통과 기준 근접' };
  }
  else {
    return { score: score, grade: 'F', description: '낙제' };
  }
}

const result = getGradeInfo(87);
console.log(result);  
// 출력: { score: 87, grade: 'B', description: '우수' }
```

**설명:**

* `function`을 사용한 **함수 선언식**으로 작성했다.
* `if ~ else if ~ else` 조건문을 이용해 점수에 따라 적절한 등급과 설명을 판단했다.
* 최종적으로 `score`, `grade`, `description` 세 값을 포함한 객체를 반환한다.

---

## 회고 및 느낀점

과제 마감 시간을 늦게 알아서 제출이 늦어졌습니다. 새로운 강사님과 새로운 진도를 나갔던 한 주였는데, 프론트엔드의 꽃이라고 불리는 자바스크립트를 배운다는 생각에 설레기도 하고 긴장도 되었던 것 같아요. 프로젝트를 끝내고 기초부터 다시 시작하는 과정이라 그런지 긴장이 풀렸던 것도 같습니다. 평소보다 집중이 어려운 한 주였어요. 과제를 하면서 다 이해했다고 생각했던 부분이 아직 미흡하구나를 다시금 느끼게 된 시간이었습니다.

이제부터가 진짜 시작이라고 생각하기 때문에 안주하지 말고 다시 열심히 달려야겠다는 생각이 들었습니다. 처음을 놓치면 나중에 얼마나 따라가기 힘든지 알고 있기 때문에 더더욱 반성하게 되는 지난 한 주였어요. 그래도 아직 초반이고, 어려운 부분이 크게 있진 않아서 다행이라고 생각합니다. 자바 스크립트를 살짝 맛보기 했을 때 상상하던 걸 실제로 구현시킬 수 있다는 게 너무 신기하고 재미있었는데 이제 제대로 알고 쓸 수 있겠다는 게 무척 설레요! 