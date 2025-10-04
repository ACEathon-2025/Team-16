SwasthyaAI — AI Health Assistant for Low-Resource Regions

SwasthyaAI is an AI-powered web assistant built to help individuals in rural and low-resource communities understand their health, track symptoms, and receive actionable advice — even without easy access to a doctor.

Built for ACEathon 2025 with 💙 by Team SwasthyaAI

🚀 Features
✅ User Signup/Login (Firebase Auth)
✅ Typeform-style Health Profile Form
✅ Multiple Choice with Custom Options
✅ Animated Step Transitions (Framer Motion)
✅ Firestore Storage per User
✅ Protected Routes for Authenticated Users
✅ Modern UI with Tailwind + Poppins + Inter
✅ Chat Interface (coming next)
✅ Case History View (coming next)

💡 Use Case
Many individuals in rural India or underserved areas struggle with:
Lack of access to doctors or diagnostics
Poor symptom tracking over time
Unawareness of when home remedies are enough vs. when a hospital visit is critical
SwasthyaAI bridges that gap using an AI-powered interface, built to be mobile-friendly and simple to use.

🛠 Tech Stack
Frontend	Backend/Infra	AI (planned)
React + Vite	Firebase Auth	OpenAI (optional)
Tailwind CSS	Firestore DB	Chatbot + Embedding
Framer Motion	Protected Routing	LLM fine-tuning

🧑‍💻 Getting Started (Run Locally)

git clone https://github.com/ACEathon-2025/Team-16.git
cd swasthya-ai
npm install
npm run dev

✅ Then open http://localhost:5173

📁 Directory Structure
src/
├── pages/             # All route pages (Login, Signup, ProfileSetup, Chat, etc.)
├── components/        # Shared components (ProtectedRoute, Footer, etc.)
├── lib/               # Firebase, questions.ts (form schema)
├── hooks/             # Custom hooks (toasts, mobile, etc.)
├── assets/            # Images & illustrations
├── index.css          # Tailwind styles
├── main.tsx           # App mount point
├── App.tsx            # Route manager


🧠 Next Goals
 Finish Chat UI and case saving
 Add history page (/cases)
 Plug AI diagnosis logic (OpenAI / custom models)
 Deploy on Vercel with env support
 Create multilingual support (Kannada, Hindi)