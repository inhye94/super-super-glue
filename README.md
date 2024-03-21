# 리액트로 쇼핑몰 만들기

> 페이지 이름이 super-super-glue인 이유는 따로 없다.  
> 내가 보던 영화의 대사를 가져온 것 뿐이다.

```
Firebase와 클라우디너리로 리액트 프로젝트 제작

- 제작기간: 2024.01 ~ 2024.02
- 구현환경: React
- 배포방법: Netlify
- 특징
  - 반응형
  - 네트워크 통신
  - 모듈 생성 후 작업(버튼, 뱃지 등등 컴포넌트보다 작은 단위)
```

[💚 super-super-glue 💚](https://super-super-glue.netlify.app)

<details>
<summary>페이지 대표 이미지</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 2 40 50" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/bbf3de72-e087-4dc2-9c26-a3da104b0947">
</details>

<br/>

## 🦄 프로젝트 관리 방법

### 프로젝트 기획

[GitHub Issue](https://github.com/DuetoPark/super-super-glue/issues)

<details>
<summary>GitHub Issue 예시 이미지</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 2 29 52" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/f31ff3c7-3144-43c7-9570-cd2495e5a5b1">
<img width="1000" alt="스크린샷 2024-03-21 오후 2 30 55" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/2b742f03-e6d2-4f2f-8b2d-1094bd8676c0">
</details>

<br/>

### 프로젝트 관리

[GitHub Project](https://github.com/users/DuetoPark/projects/3)

<details>
<summary>GitHub Project 예시 이미지</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 2 31 29" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/5cc3d98b-a06f-426c-b03d-8a574eba9a14">
</details>

<br/>

### 문제와 해결

[GitHub WIKI](https://github.com/DuetoPark/super-super-glue/wiki)

<details>
<summary>GitHub WIKI 예시 이미지 및 링크</summary>

<img width="1000" alt="스크린샷 2024-03-21 오후 2 50 39" src="https://github.com/DuetoPark/super-super-glue/assets/69448900/220ec4f4-a635-4190-ad7e-ec2d9e8a202f">

#### 모듈

- [form file 유효성 검사](https://github.com/DuetoPark/super-super-glue/wiki/form-file-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC)

#### 헤더

- [Firebase google auth 연결](https://github.com/DuetoPark/super-super-glue/wiki/Firebase-google-auth-%EC%97%B0%EA%B2%B0)
- [google auth 로그인 로그아웃 구현](https://github.com/DuetoPark/super-super-glue/wiki/google-auth-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83-%EA%B5%AC%ED%98%84)
- [Admin 여부 확인](https://github.com/DuetoPark/super-super-glue/wiki/Admin-%EC%97%AC%EB%B6%80-%ED%99%95%EC%9D%B8)
- [메뉴별 redirect](https://github.com/DuetoPark/super-super-glue/wiki/%EB%A9%94%EB%89%B4%EB%B3%84-redirect)

#### 어드민 - 등록 폼

- [이미지 저장 방법](https://github.com/DuetoPark/super-super-glue/wiki/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%A0%80%EC%9E%A5-%EB%B0%A9%EB%B2%95)
- [하위 컴포넌트 state를 상위 컴포넌트로 옮기기](https://github.com/DuetoPark/super-super-glue/wiki/%ED%95%98%EC%9C%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-state%EB%A5%BC-%EC%83%81%EC%9C%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-%EC%98%AE%EA%B8%B0%EA%B8%B0)

#### 상세

- [cart 데이터 구조랑 호출](https://github.com/DuetoPark/super-super-glue/wiki/cart-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B5%AC%EC%A1%B0%EB%9E%91-%ED%98%B8%EC%B6%9C)
</details>

<br/>

## 🤩 DB

### Cloudinary

- Image File

### Firebase Realtime Database

- products
  - 상품 데이터 관리
  - UserUID마다 Product 데이터 저장
- cart
  - 장바구니 데이터 관리
  - UserUID마다 Product 데이터 저장
- admin
  - admin 계정 관리
  - UserUID 저장

```json
{
  "admin": ["UserUID", "UserUID", ...],
  "cart": {
    "UserUID": {
      "ProductID": {
        "id": "ProductID",
        "image": "cloudinary 이미지 주소",
        "name": "다 지워졌서",
        "option": " 지정해서",
        "price": 2222202,
        "quantity": 2
      },
    },
    ...
  },
  "product": {
    "UserUID": {
      "ProductID": {
        "category": "눈물",
        "description": "",
        "detailImage": [
          "cloudinary 이미지 주소",
          "cloudinary 이미지 주소"
        ],
        "id": "ProductID",
        "image": [
          "cloudinary 이미지 주소"
        ],
        "name": "다 지워졌서",
        "option": [
          "잘못",
          " 지정해서",
          " 모두",
          " 지워졌서"
        ],
        "price": 2222202
      },
      ...
    },
  }
}
```

<br/>

## 🙋 Auth

### firebase

- google auth
- 데스크탑: popup 로그인
- 모바일: redirect 로그인

### admin 권한

- DB admin 배열에서 비교

### redirect

- 비로그인
  - /cart와 /admin으로 시작되는 메뉴 접근 불가
- 로그인
  - admin이 아닌 경우, admin 메뉴 접근 불가

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

<br/>

## 🎨 페이지 구성 및 기능

### 글로벌 헤더

- 헤더
  - 로고
    - 홈으로 이동
  - 메뉴
    - 새 상품
    - 카트 (member)
    - 상품 등록 폼 (admin)
    - 등록 상품 리스트 (admin)
    - module
    - auth
