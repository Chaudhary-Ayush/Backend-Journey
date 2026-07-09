# Node.js Backend Practice

This repo is where I'm putting all the code I write while learning backend development with Node.js. It's not a polished project — it's a running log of what I'm building, breaking, and figuring out.

## Why this repo exists

I'm learning backend dev in public. Instead of scattering practice files across my laptop, everything lives here — organized by topic, dated, and (eventually) linked to whatever I post about it on Twitter/LinkedIn.

## Structure

```
Backend-Journey/
├── 01-node-basics/          # modules, fs, events, streams
├── 02-express-basics/       # routing, middleware, error handling
├── 03-rest-apis/            # CRUD APIs, status codes, validation
├── 04-databases/            # MongoDB / SQL connections, queries, ORMs
├── 05-auth/                 # JWT, sessions, bcrypt, OAuth
├── 06-middleware-and-security/  # CORS, helmet, rate limiting
├── 07-testing/              # Jest / Supertest for APIs
├── 08-projects/             # small end-to-end projects combining topics
├── notes/                   # markdown notes per topic (what I learned, gotchas)
└── README.md
```

Each numbered folder has its own mini README explaining what's inside and what I learned.

## What's inside a typical folder

- `README.md` — short summary: what the topic is, what I built, what confused me
- Source files (`.js`) — the actual practice code, commented where it matters
- `package.json` — if the folder needs its own dependencies

## How I'm using this repo

- Committing regularly (aiming for small, frequent commits over big dumps)
- Writing a short note in `notes/` whenever I learn something worth remembering
- Linking specific commits/folders when I post about a topic on social media
- Not chasing perfect code — this is a learning trail, not a portfolio piece (that's what my other project repos are for)

## Topics I'm currently covering

- [ ] Node.js core modules (fs, path, events, streams, http)
- [ ] Express.js fundamentals
- [ ] REST API design
- [ ] MongoDB with Mongoose
- [ ] SQL basics (PostgreSQL/MySQL)
- [ ] Authentication (JWT, sessions)
- [ ] Middleware & security best practices
- [ ] Testing APIs
- [ ] Deployment basics

## Setup

Each folder is meant to run independently. Inside a folder with its own `package.json`:

```bash
npm install
node index.js
```

## Notes to future me

If I'm coming back to this repo after a while — check the `notes/` folder first. That's where the actual understanding lives, not just the code.
