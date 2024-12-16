# 주특기 플러스주차 - Riot API를 활용한 리그 오브 레전드 정보 앱
![스크린샷 2024-12-16 112356](https://github.com/user-attachments/assets/10180d0d-2be8-46a4-887f-8c34d062bbd6)
* 이번 프로젝트에서는 **Riot Games의 API**와 **Data Dragon**을 활용하여 LoL의 다양한 데이터를 조회하고, <br>
이를 기반으로 웹 애플리케이션을 직접 만들어보게 됩니다!

* **Next.js와 TypeScript**를 사용하여 프론트엔드 개발의 기본기를 다지는 데 초점을 맞춥니다.<br>
특히 **타입 선언 방법**, **useState에서 제네릭 사용**, **유틸리티 타입 활용** 등을 실습하게 됩니다.<br>
또한 **동적 라우팅**, **App Router**, **레이아웃 구성**, **Route Handler** 등 Next.js의 핵심 기능도 다루게 됩니다.<br>

* 프로젝트를 진행하면서 여러분은 **챔피언 정보 조회**, **챔피언 로테이션 조회** 등의 기능을 구현하게 됩니다. <br>
이를 통해 실제 서비스에서 어떻게 데이터를 가져오고 표시하는지,<br>
그리고 사용자와 상호작용하는 웹 애플리케이션을 만드는 방법을 배우게 됩니다.
---

## 🗓️ 개발기간
**2024/12/06 - 2024/12/19**

---

## 🛠️ 기술 스택

<div>

  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Riot_Games_API-FF0000?style=for-the-badge&logo=riot-games&logoColor=white" alt="Riot Games API" />
  <img src="https://img.shields.io/badge/Lucide_React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="Lucide React" />

</div>


---

## ✨ 주요 기능

### 1. 챔피언 정보 조회
![챔피언 정보조회](https://github.com/user-attachments/assets/d60a749c-fc4f-4d93-af67-78db510ca53b)

### 2. 챔피언 상세정보 조회
![챔피언 상세정보 조회](https://github.com/user-attachments/assets/f693ff99-e0c4-442d-8994-8e307116e30b)

### 3. 아이템 정보 조회
![아이템 정보 조회](https://github.com/user-attachments/assets/34cf2a89-e4b7-499d-aa3e-dddc4a11b73d)

---

## 📂 프로젝트 구조

```plaintext
LOL-APP
│
├── .next
├── .vercel
├── node_modules
├── public
│   ├── fonts
│   ├── icons
│   ├── images
│   └── favicon.ico
│
├── src
│   ├── app
│   │   ├── (info)
│   │   │   ├── champions
│   │   │   │   ├── [id]
│   │   │   │   │   ├── Detail.tsx
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── loading.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── items
│   │   │   │   └── page.tsx
│   │   │   └── rotation
│   │   │       ├── page.tsx
│   │   │       ├── error.tsx
│   │   │       └── page.tsx
│   │   ├── api
│   │   │   └── rotation
│   │   │       └── route.ts
│   │   ├── global-error.tsx
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   │
│   ├── components
│   │   ├── champions
│   │   │   ├── ChampionCard.tsx
│   │   │   └── ItemCard.tsx
│   │   └── layout
│   │       ├── Header.tsx
│   │       ├── Nav.tsx
│   │       └── ScrollTop.tsx
│   │
│   ├── constants
│   │   └── constants.ts
│   │
│   ├── providers
│   │   └── RQProvider.tsx
│   │
│   ├── styles
│   │   └── globals.css
│   │
│   ├── types
│   │   ├── Champion.ts
│   │   └── Item.ts
│   │
│   └── utils
│       ├── rotateApi.ts
│       └── serverApi.ts
│
├── .env.local
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 구현된 기능

### 필수 기능

#### 1. **프로젝트 셋업 및 기본 구조 구성**
- Next.js와 TypeScript를 사용하여 프로젝트를 생성하고, Tailwind CSS 설치.
- `src/` 디렉토리와 `@/*` import alias 설정으로 프로젝트 구조 정리.

#### 2. **데이터 Fetching**
- `types/` 디렉토리에 필요한 타입 정의.
- **Server Actions**를 활용해 `/champions`, `/items`, `/rotation` 데이터를 서버 컴포넌트에서 직접 처리.
- 클라이언트 사이드 렌더링(CSR)을 위한 `/api/rotation` 엔드포인트 유지.
- **fetch**를 사용해 외부 API 호출 및 에러 처리 구현.

#### 3. **Tanstack Query**
- 클라이언트 컴포넌트에서 **Tanstack Query**를 사용하여 데이터 관리.
- 로딩 및 에러 처리 구현: `isPending`, `isError`, `data` 상태를 활용.
- 타입스크립트를 사용해 안전한 타입 정의 및 제네릭 적용.

#### 4. **각 페이지 구현 및 렌더링 방식 적용**
- **챔피언 목록 페이지** (`/champions`): ISR 방식으로 구현.
- **챔피언 상세 페이지** (`/champions/[id]`): 동적 렌더링 및 동적 메타데이터 생성.
- **챔피언 로테이션 페이지** (`/rotation`): CSR 방식으로 구현.
- **아이템 목록 페이지** (`/items`): SSG 방식으로 구현.

#### 5. **레이아웃 및 네비게이션 구성**
- 글로벌 레이아웃 설정 및 네비게이션 메뉴 추가로 페이지 간 이동 구현.

---

### 🔥 도전 기능

#### 1. **로딩 및 에러 핸들링 고도화**
- **React Suspense**와 `loading.tsx`를 활용해 서버 컴포넌트의 로딩 상태 관리.
- **에러 핸들링 강화**:
  - `error.tsx`를 생성해 각 경로에서 발생하는 에러를 사용자 친화적으로 처리.
  - `global-error.tsx`를 추가해 전역 에러를 관리.
  - 에러 컴포넌트를 **클라이언트 컴포넌트**로 작성하고 `useRouter`와 `startTransition`을 활용한 재시도 기능 구현.

#### 2. **성능 최적화**
- **이미지 최적화**:
  - Next.js의 `<Image>` 컴포넌트를 활용해 자동 서식 변경 및 최적화.

#### 3. **반응형 디자인 및 UI 개선**
- Tailwind CSS를 활용해 **반응형 디자인** 구현.
---

### ✅ 프로젝트를 통해 배운 점
- **Next.js와 TypeScript의 심화 학습**:
  - 타입 선언, 제네릭 활용 사용.
- **Next.js 핵심 기능의 실습**:
  - 동적 라우팅, App Router, 레이아웃 구성, Route Handlers.
- **Tanstack Query**:
  - 데이터 캐싱과 상태 관리를 효율적으로 처리하는 방법.
- **성능 최적화와 사용자 경험 향상**:
  - 이미지 최적화, 반응형 디자인 적용.

