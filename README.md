# HeyChat

HeyChat is a full-stack AI-powered chat application that allows users to interact with OpenAI's GPT-3.5-turbo model in real time. The project features a modern React + TypeScript frontend and an Express.js backend that securely proxies requests to the OpenAI API.

## Features
- Real-time chat interface with AI (OpenAI GPT-3.5-turbo)
- Modern, responsive UI built with React, TypeScript, and Tailwind CSS
- Backend server with Express.js for secure API key handling
- Easy local development with Vite
- Simple, extensible code structure

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **AI:** OpenAI GPT-3.5-turbo
- **Other:** Axios, Jest (testing), ESLint (linting)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- An OpenAI API key ([get one here](https://platform.openai.com/account/api-keys))

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd HeyChat
```

### 2. Setup the Backend
```bash
cd server
cp example.env .env # Add your OpenAI API key to .env
npm install # or yarn install
```
Edit `.env` and set your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key
```

Start the backend server:
```bash
npm start # or yarn start
```
The backend will run on `http://localhost:3000` by default.

### 3. Setup the Frontend
```bash
cd .. # back to project root
npm install # or yarn install
```
Start the frontend development server:
```bash
npm run dev # or yarn dev
```
The frontend will run on `http://localhost:5173` by default.

## Usage
- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Type a message in the input box and press "Send".
- The AI will respond in the chat window.

## Project Structure
```
HeyChat/
  server/           # Express backend (API proxy to OpenAI)
  src/              # React frontend source code
    components/     # UI components (atoms, molecules, organisms)
    ...
  public/           # Static assets
  ...
```

## Testing
- Frontend tests: `npm test` (uses Jest and React Testing Library)
- Backend: Add your own tests as needed

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
