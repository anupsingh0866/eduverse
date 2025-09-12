## Eduverse

Modern full‑stack e‑learning platform with a React + Tailwind client and a Node.js + Express + MongoDB backend. Features include authentication, course creation and management, video lessons, progress tracking, reviews/ratings, cart and payments via Razorpay, media handling via Cloudinary, and transactional emails via Nodemailer.

### Monorepo layout
- `src/` — React app (CRA) with Tailwind CSS and Redux Toolkit
- `server/` — Express REST API with MongoDB, Cloudinary, Razorpay, Nodemailer
- `public/` — Static assets for the client

### Features
- **Auth**: email-based signup/login, JWT sessions, protected routes
- **Courses**: catalog, details, sections/subsections, video playback
- **Dashboard**: instructor course management, student enrolled courses, profile & settings
- **Payments**: Razorpay checkout and webhook verification
- **Media**: Cloudinary uploads for thumbnails/videos
- **Email**: verification, password updates, enrollment/payment emails
- **UI**: responsive design with Tailwind, reusable components

### Tech stack
- **Frontend**: React 18, CRA, React Router, Redux Toolkit, Tailwind CSS, Swiper, Video-React
- **Backend**: Node.js, Express, Mongoose, JWT, CORS, cookie-parser, express-fileupload
- **Infra/3rd‑party**: MongoDB, Cloudinary, Razorpay, Nodemailer

### Prerequisites
- Node.js 18+
- npm 9+
- MongoDB instance (local or hosted)
- Cloudinary account
- Razorpay account (test keys are fine for development)

### Environment variables
Create two `.env` files.

1) Server environment — create `server/.env` with:
```
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_long_random_jwt_secret

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
FOLDER_NAME=eduverse

# Email (Nodemailer)
MAIL_HOST=smtp.yourprovider.com
MAIL_USER=your_smtp_username_or_email
MAIL_PASS=your_smtp_password_or_app_password

# Razorpay
RAZORPAY_SECRET=your_razorpay_key_secret
```

2) Client environment — create `.env` at project root for React (must be prefixed with `REACT_APP_`):
```
REACT_APP_BASE_URL=http://localhost:4000/api/v1
RAZORPAY_KEY=your_razorpay_key_id
```

Note: The repository currently references Razorpay keys in `server/config/razorpay.js`. For security, move those to `server/.env` and import from `process.env`. Never commit real secrets.

### Install & run (development)
In the project root:
```
npm install
cd server && npm install && cd ..

# Start client and server together (concurrently)
npm run dev
```

- Client runs at `http://localhost:3000`
- API runs at `http://localhost:4000` (configurable via `PORT`)

You can also run each side separately:
```
# Client only
npm start

# Server only
cd server && npm run dev
```

### Build (client)
```
npm run build
```
Outputs a production build into `build/`.

### Scripts
Root `package.json`:
- `start`: start CRA dev server
- `build`: build client
- `server`: run API in dev (nodemon) from `server/`
- `dev`: run client and server concurrently

Server `package.json`:
- `dev`: start Express API with nodemon
- `start`: start API with node

### API overview (selected routes)
Base URL: `REACT_APP_BASE_URL` → defaults to `http://localhost:4000/api/v1`
- `POST /auth/...` — authentication
- `GET /course/...` — course catalog/details
- `POST /payment/...` — order creation and verification
- `GET /profile/...` — profile and dashboard
- `POST /reach/...` — contact us

See `server/routes/` and `server/controllers/` for full details.

### Project structure (high-level)
```
Eduverse/
  src/                 # React app
    components/        # UI and feature components
    pages/             # Route pages
    services/          # API connectors and operations
    slices/            # Redux Toolkit slices
    utils/             # Helpers
  server/              # Express API
    config/            # DB, Cloudinary, Razorpay config
    controllers/       # Route handlers
    middlewares/       # Auth and other middleware
    models/            # Mongoose schemas
    routes/            # Route definitions
    utils/             # Mail, upload, etc.
  public/
  README.md
  package.json
  tailwind.config.js
```

### Notes & tips
- Ensure MongoDB is reachable from your environment; for Atlas, whitelist your IP.
- For Cloudinary video uploads, larger files may require signed uploads and adequate temp disk (`express-fileupload`).
- Use Razorpay test keys in development; production keys only in secure environments.
- Emails may land in spam while testing; configure SPF/DKIM for production.

### License
This project uses open-source dependencies. Add your preferred license text here.


