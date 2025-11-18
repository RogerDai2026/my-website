# My Website

A personal website built with React for the frontend and an Express-based API for handling contact form submissions. The app is configured for deployment to GitHub Pages on the frontend and Railway for the backend.

## Project Structure

- `frontend/` – React single-page app with navigation, resume, interests, and contact sections.
- `backend/` – Node.js/Express service exposing a `/api/contact` endpoint that relays messages through SendGrid.

## Prerequisites

- Node.js 18+ and npm 8+
- A SendGrid account with a verified sender email (for backend email delivery)

## Setup

1. Install dependencies in both projects:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
2. Create a `.env` file in `backend/` with values for your environment:
   ```bash
   SENDGRID_API_KEY=your_sendgrid_api_key
   RECIPIENT_EMAIL=destination@example.com
   EMAIL_USER=verified_sender@example.com
   PORT=5001
   ```

## Running Locally

### Backend

The backend accepts JSON submissions at `/api/contact` and sends an email using SendGrid. Allowed CORS origins include `http://localhost:3000` for local development and the deployed GitHub Pages URLs.

```bash
cd backend
npm start          # Starts the simple Express server on port 5001
# or
npm run start-complex  # Starts the more detailed server with rich logging
```

### Frontend

The frontend is configured with React Router and expects the backend API at the base URL defined in `src/config.js` (`http://localhost:5001` in development). Run it with:

```bash
cd frontend
npm start          # Starts the React dev server on http://localhost:3000
```

## Building and Deployment

- **Frontend build:** `npm run build` (runs from `frontend/`) outputs the static site to `frontend/build/`. The `homepage` setting is configured for GitHub Pages deployment at `https://RogerDai2026.github.io/my-website`.
- **Backend hosting:** Designed for platforms like Railway or Render; update `src/config.js` to point the frontend to your hosted backend URL in production.

## Contact Form Flow

The `ContactForm` component posts to `${API_BASE_URL}/api/contact` with first name, last name, email, subject, and message fields. Successful submissions return a confirmation message; failures surface the error to the user.
