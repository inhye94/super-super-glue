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

<br/>

## 🤩 DB

### Image File

- Cloudinary

### Firebase Realtime Database

- products
  - 등록된 데이터 관리
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
