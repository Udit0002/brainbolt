# 🧠⚡ BrainBolt — Adaptive Quiz Engine
The Quiz Application Project is a comprehensive Next.js application designed to provide an engaging and interactive quiz experience for users. The application features a robust set of tools and technologies, including a Prisma ORM for database management, a custom adaptive logic system for adjusting question difficulty, and a user-friendly interface built with React components. The project aims to provide a seamless and enjoyable experience for users, while also offering a scalable and maintainable architecture for developers.
A production-ready adaptive quiz platform built with Next.js 16, MongoDB (Replica Set), Redis, and Docker.

This project implements a fully transactional, rate-limited, real-time leaderboard-driven adaptive quiz system as per the assignment requirements.

## Video link - https://bennettu-my.sharepoint.com/:v:/g/personal/e22cseu1177_bennett_edu_in/IQBaCHPX1pB_S4opSy_eccjYAR8NG6n0qVMKFzleMVS0tFc?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ibRmaU

## 🚀 Features
* Dynamically adjusts question difficulty
* Tracks user performance and streaks
* Maintains live Redis leaderboards
* Ensures idempotent answer submissions
* Uses optimistic concurrency control
* Supports SSR for performance and SEO
* Runs entirely inside Docker

## 🛠️ Tech Stack
Frontend
	•	Next.js 16 (App Router)
	•	SSR + Client Components
	•	Tailwind CSS
	•	Real-time leaderboard updates
	•	Animated UI with adaptive difficulty indicators
Backend
	•	Next.js API Routes
	•	MongoDB (Replica Set for transactions)
	•	Redis (Leaderboards + Idempotency)
	•	Mongoose ODM

Infrastructure
	•	Docker Compose
	•	Mongo Replica Set auto-initialization
	•	Redis standalone
	•	Production build via next build

## 🐳 Docker Setup
To get started with the Quiz Application Project, follow these steps:
step 1 -
```
git clone https://github.com/your-username/brainbolt.git
cd brainbolt
```
step 2 -
```
docker compose build --no-cache
docker compose up
```


## 💻 Usage
To use the Quiz Application Project, simply navigate to the application URL in your web browser. The application will guide you through the quiz experience, adjusting question difficulty based on your performance.

## 📂 Project Structure
```markdown
.
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   ├── api
│   │   ├── v1
│   │   │   ├── quiz
│   │   │   │   ├── next
│   │   │   │   │   ├── route.ts
│   │   │   │   │   ├── index.ts
│   │   │   │   ├── index.ts
│   │   │   ├── index.ts
│   │   ├── index.ts
│   ├── components
│   │   ├── ui
│   │   │   ├── Card.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Link.tsx
│   │   ├── index.ts
│   ├── index.ts
├── lib
│   ├── questions.ts
│   ├── api.ts
│   ├── adaptive.ts
│   ├── types.ts
│   ├── index.ts
├── models
│   ├── AnswerLog.ts
│   ├── User.ts
│   ├── Question.ts
│   ├── UserState.ts
│   ├── index.ts
├── next.config.ts
├── prisma.config.ts
├── middleware.ts
├── package.json
├── tsconfig.json
```

## 📸 Screenshots


## 🤝 Contributing
To contribute to the Quiz Application Project, please submit a pull request with your changes and a brief description of your updates.

## 📝 License
The Quiz Application Project is licensed under the MIT License.

## 📬 Contact
For questions or concerns about the Quiz Application Project, please contact us at [your-email@example.com](mailto:your-email@example.com).

## 💖 Thanks Message
This project was made possible by the contributions of many individuals. We would like to extend our gratitude to all who have participated in the development and testing of the Quiz Application Project. This is written by [readme.ai](https://readme-generator-phi.vercel.app/).
