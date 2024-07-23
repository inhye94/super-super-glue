📎 [Site Link](https://super-super-glue.netlify.app)

<img width="1000" alt="스크린샷 2024-03-21 오후 2 40 50" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/bbf3de72-e087-4dc2-9c26-a3da104b0947">


## 개요 및 제작 목표
- 개요: React와 Firebase, Cloudinary를 사용하여 온라인 쇼핑몰 웹사이트 개발. 주요 기능으로는 상품 등록/삭제/수정, 장바구니 등이 포함됨.
- 역할 및 책임: 개인 프로젝트이며 전체 기획 및 UI 구현을 담당.
- 제작 목표: 프레젠테이셔널 UI 제작하고, 사용자 권한에 따른 redirect 구현

## 제작 기간

1. v.1 (2024.01 - 2024.04, 약 4개월)
   - 로그인, 리다이렉트, 상품 등록, 장바구니 구현
   - 프레젠테이셔널 UI 제작
2. v.2 (2024.06 - 2024.07, 약 2개월)
   - 상품 삭제/수정
   - 폴더구조 수정, Typescript 도입

## 사용스택

- React: Material-UI 같은 프레젠테이셔널 UI를 제작하고 싶었습니다.
- Tanstack query: 클라이언트 데이터의 상태가 stale/fresh인지 구분하고 UI에 최신 데이터를 적용하고 싶었습니다.
- react-hook-form: 유효성 검사를 일관된 코드로 구현하기 위해 사용했습니다.
- Typescript: 함수가 많아질수록 에러가 자주 발생하여 적용했습니다.
- Tailwind: 페이지 스타일 구현을 빠르게 하기 위해 사용했습니다.
- SCSS: 프레젠테이셔널 UI의 일관적인 스타일 구현을 위해 사용했습니다.

## 특징

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

## 프로젝트 구조
- Page layer
  - 웹 사이트를 구성하는 Page 계층
  - Home, Cart, RegistForm, ...
- Widget layer
  - component를 조합한 중간 덩어리의 Widget 계층
  - Gnb, Products, ...
- Component layer
  - component를 모두 모아둔 Component 계층
  - ProductCard, CartCard, ...
- Feature layer
  - 특정 목적의 기능을 가진 Feature 계층
  - context, hook, api
- Shared layer
  - 공통적으로 사용되는 함수 및 스타일 그룹
  - util 함수, 공통 UI,  ...
- Model layer
  - 데이터 타입을 모아둔 Model 계층
  - productType, authType, ...
<img width="3336" alt="chat-app_before" src="https://github.com/user-attachments/assets/755c486c-55b3-4fe5-b4e7-eb9140049ae2">

### Page layer
<img width="3072" alt="chat-app_page" src="https://github.com/user-attachments/assets/19f596b2-746e-4ca3-b03e-3c9e66e53599">

### Widget layer
<img width="3072" alt="chat-app_widget" src="https://github.com/user-attachments/assets/ec201e5f-83e5-4dfe-981f-e022c1c7b073">

### Component layer
<img width="3072" alt="chat-app_compo" src="https://github.com/user-attachments/assets/2b7f565d-9ef8-40cc-9d31-2be8bab0d593">

### Feature layer
<img width="3072" alt="chat-app_feature" src="https://github.com/user-attachments/assets/75e7074a-2ad7-4f36-baa1-bda86de6b041">

### Shared layer
<img width="3072" alt="chat-app_shared" src="https://github.com/user-attachments/assets/8d7838ce-5f82-4028-a234-91a88b120aab">

### Model layer
<img width="1624" alt="chat-app_model" src="https://github.com/user-attachments/assets/79df15da-9a1f-4397-936a-79d844a36cfd">

## 프로젝트 설계
- 화살표 방향으로 호출
- 색상 블럭: 전역 변수를 가진 context, 일반 함수를 공유하는 hook

<img width="4496" alt="super-super-glue-layer" src="https://github.com/user-attachments/assets/22ae22f1-71bf-40a8-99ef-1c41847c6972">


## 문제 해결

1. react-hook-form에서 다중 file의 유효성 검사 기능이 없음
   - 해결: useState와 DataTransfer를 사용하여 용량과 개수에 대한 유효성 검사 구현
2. 함수 인자에 잘못된 타입의 데이터를 전달하여 에러가 발생
   - 해결: Typescript 도입하여 인자에 정확한 데이터를 전달

## 브랜치 관리

| 브랜치명       | 기능                                                               |
| -------------- | ------------------------------------------------------------------ |
| gnb            | 스타일 작업, 로그인, admin 권한, redirect                          |
| module         | 모듈 생성 ex) Button, Badge, FileInput, Input, Spinner, Toast, ... |
| feature-cart   | 장바구니 담기, 수정, 삭제 구현                                     |
| product-list   | 상품 데이터 fetching + print                                       |
| product-detail | 상세 데이터 fetching + print                                       |
| admin-regist   | 상품 등록                                                          |
| admin-modify   | 상품 수정                                                          |
