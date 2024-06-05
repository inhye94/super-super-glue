쇼핑몰 사이트 | React와 Tanstack Query를 사용한 개인 프로젝트 (2024/01 → 2024/05, 진행중)  
📎 [Site Link](https://super-super-glue.netlify.app) | [기획](https://github.com/DuetoPark/super-super-glue/issues) & [프로젝트 관리](https://github.com/users/DuetoPark/projects/3)

**Tech Stack** : React / TailwindCSS, SCSS / Tanstack Query / Netlify

<img width="1000" alt="스크린샷 2024-03-21 오후 2 40 50" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/bbf3de72-e087-4dc2-9c26-a3da104b0947">

- **UI 통일과 재사용**을 위해 **프레젠테이셔널 컴포넌트** 제작
  - button, input, badge 등 최소 단위의 UI 컴포넌트를 제작 [📎 [모듈 페이지](https://super-super-glue.netlify.app/modules), [modules 폴더](https://github.com/DuetoPark/super-super-glue/tree/main/src/modules)]
  - 컴포넌트의 동작은 props로 받아 다르게 처리하며, 스타일도 props로 전달받은 값으로 결정
  - **로직은 다르더라도 통일된 UI를 사용**하도록 추상화
  - 내부에 상태와 특정 로직이 없어 다양한 곳에서 **재사용** 가능
- **상태 관리**를 위해 custom hook 제작
  - cart, product처럼 동일한 querykey를 공유하는 동작은 **응집도**를 높이기 위해 useCart, useProduct 같은 custom hook으로 제작 [📎 [useCart](https://github.com/DuetoPark/super-super-glue/blob/main/src/hooks/useCart.jsx), [useProduct](https://github.com/DuetoPark/super-super-glue/blob/main/src/hooks/useProducts.jsx)]
- **공통 로직을 컴포넌트화**
  - 로그인 상태와 admin 여부에 따라 홈으로 redirect 하도록 최상위에서 page 컴포넌트를 감싸는 ProtectPage 컴포넌트 제작 [📎 [ProtectPage](https://github.com/DuetoPark/super-super-glue/blob/main/src/pages/ProtectPage.jsx)]
  - 자주 사용되는 로그인/로그아웃, userInfo를 공유할 수 있도록 useAuthContext custom hook 제작 [📎 [useAuthContext](https://github.com/DuetoPark/super-super-glue/blob/main/src/context/AuthContext.jsx)]
- **CSS Module**
  - 빠른 구현을 위해 Tailwind를 사용했지만, 컴포넌트 클래스명의 중첩 및 코드 가독성 저하로 인해 컴포넌트 스타일링에는 scss module 적용
  - 스타일 파일 관리가 쉽도록 **변수/믹스인/함수 등을 한 파일로 bundle** [📎 [프로젝트에 SCSS module 적용하는 과정](https://www.notion.so/SCSS-module-335e4659199b4049a8997f9629ecd219?pvs=21)]
- 반응형 디자인

<br/>

### 브랜치 관리

| 브랜치명       | 기능                                                               |
| -------------- | ------------------------------------------------------------------ |
| gnb            | 스타일 작업, 로그인, admin 권한, redirect                          |
| module         | 모듈 생성 ex) Button, Badge, FileInput, Input, Spinner, Toast, ... |
| feature-cart   | 장바구니 담기, 수정, 삭제 구현                                     |
| product-list   | 상품 데이터 fetching + print                                       |
| product-detail | 상세 데이터 fetching + print                                       |
| admin-regist   | 상품 등록                                                          |
| admin-modify   | 상품 수정                                                          |

<br/>

## 🧚 구현 화면

<details>
<summary>로그인 구현 화면</summary>

https://github.com/DuetoPark/super-super-glue/assets/69448900/00d5d37e-a639-4dd5-a815-7dff960346b4

</details>

<details>
<summary>장바구니 구현 화면</summary>

#### 장바구니 추가

https://github.com/DuetoPark/super-super-glue/assets/69448900/93b9b0cb-ea16-4625-9b5f-77819ecda76a

#### 장바구니 수정

https://github.com/DuetoPark/super-super-glue/assets/69448900/7a939986-8703-4409-87a3-3f0ce8565500

#### 장바구니 삭제

https://github.com/DuetoPark/super-super-glue/assets/69448900/d21c8f35-9ddc-497f-b64b-34a6891eb9d8

</details>

<details>
<summary>상품등록 구현 화면</summary>

#### 유효성 검사 - string

https://github.com/DuetoPark/super-super-glue/assets/69448900/fb8973ee-29bb-4c7e-8f70-4ec8e529cbd1

#### 유효성 검사 - file

https://github.com/DuetoPark/super-super-glue/assets/69448900/7bf1d550-b276-4da6-9aec-b37657543b67

#### 상품등록

https://github.com/DuetoPark/super-super-glue/assets/69448900/580b3642-94e0-4ac0-a8eb-79eab453455a

</details>

<br/>

## 📌 폴더 구성

```
📦src
 ┣ 📂api -------------------------------- NOTE: api
 ┣ 📂components ------------------------- NOTE: 일반 컴포넌트
 ┣ 📂context ---------------------------- NOTE: 컨텍스트
 ┣ 📂hooks ------------------------------ NOTE: 커스텀 훅
 ┣ 📂pages ------------------------------ NOTE: 페이지 컴포넌트
 ┣ 📂shared ----------------------------- NOTE:
 ┃ ┣ 📂modules -------------------------- (프레젠테이셔널 컴포넌트)
 ┃ ┣ 📂styles --------------------------- (scss 믹스인/함수/변수)
 ┃ ┗ 📂utils ---------------------------- (유틸 함수)
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

<br/>

## 📦 사용한 packages

### 라우터

- react-dom-route

### 폼

- react-hook-form

### 스타일

- tailwind
- react-icons
- scss
- classnames
- framer-motion
- react-spinners
