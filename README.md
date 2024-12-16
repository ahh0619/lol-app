# Riot API를 활용한 리그 오브 레전드 정보 앱

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
사용자는 리그 오브 레전드의 모든 챔피언 정보를 상세히 조회할 수 있습니다.  

---

### 2. 챔피언 로테이션 정보 조회
매주 변경되는 무료 챔피언 로테이션 정보를 손쉽게 확인할 수 있습니다.  

---

### 3. 아이템 정보 조회
게임 내 모든 아이템 정보를 검색하고 세부 정보를 확인할 수 있습니다.  

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

