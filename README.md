# Twitter Copy

Twitter Copy is a learning full-stack social media project inspired by X/Twitter. The project focuses on recreating the core product experience: authentication, a central feed, post creation, a familiar three-column layout, profile-related navigation, modal interactions, and early backend integration.

The application is still in progress, but it already shows the main architecture and UI direction for a social platform.

## Overview

This repository contains the frontend part of the project. It is built with Next.js App Router and TypeScript, with Tailwind CSS used for layout and styling. The app communicates with a separate Express/MySQL API server that runs locally on port `8089`.

The current version includes:

- X/Twitter-inspired interface with left navigation, timeline, and right sidebar
- Home feed with post composer
- Modal post composer from the side menu
- Post rendering with Markdown support
- Registration flow with custom credentials
- Google authentication setup through NextAuth
- MySQL-backed profile lookup inside auth/session logic
- Profile tag display in the UI
- Route groups for authenticated pages and auth-only pages
- Basic pages for Explore, Notifications, Messages, Lists, Bookmarks, Communities, Premium, Grok, and user profiles
- Theme context foundation
- RainbowKit/wagmi provider setup for future wallet features

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS 4
- **Authentication:** NextAuth
- **Database access:** mysql2
- **Web3 foundation:** wagmi, viem, RainbowKit
- **Utilities:** React Query, React Markdown
- **Tooling:** ESLint, Dockerfile

## Project Structure

```text
app/
  (components)/
    (withMenu)/        Main app routes with left and right menus
    (messageMenu)/     Message-related layout
    left_menu/         Main navigation sidebar
    right_menu/        Search, trends, follow suggestions
  (withoutMenus)/      Auth pages without the main app shell
  api/auth/            NextAuth route
  context/             Theme and session providers
  providers/           wagmi/RainbowKit provider setup
  shared/              Shared components, data, and helpers
public/                SVG icons and static assets
```

## Getting Started

Install dependencies:

```bash
npm install
```

Create environment variables for authentication and database access. The exact values depend on your local setup:

```env
CLIENT_ID=your_google_client_id
CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
DB_PORT=3306
```

Start the frontend:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

For full functionality, also start the backend API from the companion `twitterCopyServer` repository on:

```text
http://localhost:8089
```

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Current Status

This is an educational MVP. The main UI, navigation layout, authentication experiments, feed rendering, and post creation flow are already represented. Some features are intentionally incomplete and are planned for later iterations.

### Implemented

- Main social feed screen
- Registration modal flow
- NextAuth credentials provider
- Google auth provider setup
- Local API calls for profiles and posts
- Post composer in feed and modal
- Sidebar navigation and secondary widgets
- Static pages for major app sections

### In Progress

- Stable backend error handling
- Complete user profile pages
- Search behavior
- Likes, comments, reposts, bookmarks, and counters
- Mobile responsiveness
- Database schema cleanup
- Tests and production hardening

## Roadmap

- Finish profile pages and personal post feeds
- Add comments, likes, reposts, and bookmarks
- Improve session handling between frontend and backend
- Add protected route handling
- Create a clean database migration/schema setup
- Polish responsive layout for tablets and phones
- Add loading, empty, and error states
- Prepare the app for deployment

## Related Repository

The backend API is developed separately in `twitterCopyServer`.
