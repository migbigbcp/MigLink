# Migbig Link Hub

## Overview

A personalized Linktree-style link hub application for content creators, featuring a modern design with vibrant gradients and social media integrations. The application displays a user's profile with customizable social media links and subscriber/follower counts. Built with React, TypeScript, and Tailwind CSS, it's designed to be hosted on GitHub Pages or similar static hosting platforms.

The application uses a JSON configuration file for easy content updates without code changes, making it accessible for non-technical users to manage their links and metrics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for optimal performance
- **Wouter** for lightweight client-side routing
- Single-page application (SPA) architecture with hash-based routing for GitHub Pages compatibility

**UI Component System**
- **Shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom design system with predefined color gradients and spacing primitives
- Dark mode support with CSS variable-based theming

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Configuration loaded from static JSON file (`/config.json`)
- Client-side caching with infinite stale time for static content

**Design System**
- Reference-based gaming/content creator aesthetic
- Gradient-heavy visual language (purple, magenta, pink color palette)
- Custom typography using Poppins and Inter fonts from Google Fonts
- Responsive mobile-first layout with max-width constraints
- Platform-specific gradients for social media buttons (YouTube red, TikTok cyan-pink, Discord indigo)

### Backend Architecture

**Server Setup** (Development Only)
- **Express.js** server for development environment
- Vite middleware integration for HMR (Hot Module Replacement)
- Static file serving for production builds
- Custom logging middleware for API request tracking

**Data Layer**
- **Drizzle ORM** configured for PostgreSQL (future database integration)
- Schema defined for user authentication (currently unused)
- In-memory storage implementation as placeholder
- Ready for database provisioning via `DATABASE_URL` environment variable

**API Structure**
- RESTful API pattern with `/api` prefix convention
- No active endpoints currently implemented (static content driven)
- Error handling middleware with status code normalization

### Data Storage

**Configuration Management**
- JSON-based configuration (`public/config.json`)
- Schema includes: user name, tagline, social media links with metadata
- Each link contains: id, title, URL, subscriber count, icon identifier
- No database currently in use, but infrastructure prepared for PostgreSQL integration

**Asset Management**
- Static assets stored in `attached_assets` directory
- Profile images, banner images, and social media icons
- Vite alias configuration for clean asset imports (`@assets`)

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** - Accessible component primitives (20+ components including dialogs, dropdowns, tooltips)
- **Lucide React** - Icon library for UI elements
- **class-variance-authority** - Type-safe variant styling
- **Embla Carousel** - Carousel/slider functionality
- **date-fns** - Date formatting and manipulation

**Database & ORM** (Prepared but not active)
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **Drizzle ORM** - Type-safe ORM with Zod schema validation
- **drizzle-zod** - Schema validation integration
- **connect-pg-simple** - PostgreSQL session store

**Build & Development Tools**
- **TypeScript** - Type checking and compilation
- **esbuild** - Fast JavaScript bundler for production server
- **PostCSS** with Autoprefixer - CSS processing
- **tsx** - TypeScript execution for development server

**Form Management** (Available but not in use)
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Validation resolver utilities
- **Zod** - Schema validation

**Deployment Configuration**
- Optimized for GitHub Pages deployment
- Configurable base path for project-specific deployments
- Support for both user sites (`username.github.io`) and project sites (`username.github.io/repo-name`)