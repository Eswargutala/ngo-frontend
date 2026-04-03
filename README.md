# NGO E-Commerce Monorepo

A scalable monorepo for NGO website with integrated e-commerce platform.

## Architecture

```
packages/
├── frontend/     # Next.js frontend application
├── backend/      # Node.js API server (Express + TypeScript)
├── worker/       # Background job processor
└── shared/       # Shared types, utilities, and configurations
```

## Tech Stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Backend**: Express.js, TypeScript, Prisma ORM
- **Worker**: Bull queue for background jobs
- **Shared**: Common types, utilities, and configurations
- **Database**: PostgreSQL (recommended)
- **Cache**: Redis
- **Deployment**: Docker, Docker Compose

## Prerequisites

- Node.js >= 18
- pnpm >= 8
- Docker & Docker Compose (for local development)

## Quick Start

### Installation

```bash
# Install pnpm globally if not already installed
npm install -g pnpm

# Install dependencies
pnpm install
```

### Development

```bash
# Start all services in development mode
pnpm dev

# Start specific package
pnpm --filter frontend dev
pnpm --filter backend dev
pnpm --filter worker dev
```

### Build

```bash
# Build all packages
pnpm build

# Build specific package
pnpm --filter frontend build
```

### Linting & Formatting

```bash
# Lint all packages
pnpm lint

# Format code
pnpm format

# Type check
pnpm type-check
```

## Local CI Checks

Run fast CI checks on modified files only:

```powershell
# Windows
.\scripts\ci-local.ps1          # Full check
.\scripts\ci-local.ps1 -Quick   # Quick mode

# Linux/Mac
./scripts/ci-local.sh           # Full check
./scripts/ci-local.sh --quick   # Quick mode
```

## Git Hooks

Git hooks are automatically installed during setup to ensure code quality:

**Pre-push Hook** - Runs local CI checks before pushing to remote:
- ✅ Automatically runs on every `git push`
- ✅ Prevents pushing code with errors to GitHub
- ✅ Saves time by catching issues before CI/CD
- ✅ Only checks modified files (fast!)
- Skip when needed: `git push --no-verify`

**Pre-commit Hook** - Validates file formatting before commits:
- ✅ Checks code formatting with Prettier
- Skip when needed: `git commit --no-verify`

**📖 Full documentation**: See [docs/GIT_HOOKS.md](docs/GIT_HOOKS.md)

Manually install or reinstall hooks:
```bash
# Linux/Mac
./scripts/install-hooks.sh

# Windows
.\scripts\install-hooks.ps1
```

See [docs/LOCAL_CI.md](docs/LOCAL_CI.md) for detailed guide.

## Environment Setup

1. Copy `.env.example` to `.env` in each package
2. Configure environment variables:
   - **Backend**: Database URL, JWT secret, API keys
   - **Frontend**: API URL, public keys
   - **Worker**: Redis URL, queue configurations

## Docker Deployment

```bash
# Build and start all services
docker-compose up --build

# Production build
docker-compose -f docker-compose.prod.yml up --build
```

## CI/CD Pipeline

**Fast, optimized workflows that only check modified files:**

- ✅ **CI Workflow** - Lint, type-check, build (2-5 min)
- ✅ **Tests** - Run tests on changed packages only
- ✅ **Security** - Dependency audit, secret scanning
- ✅ **Quality** - Format check, bundle size analysis
- ✅ **Deploy** - Build & deploy only changed services

**Performance**: 3-4x faster than traditional CI by checking only what changed.

See [.github/workflows/README.md](.github/workflows/README.md) for details.

## Project Structure Details

### Frontend Package
- Next.js 14 with App Router
- React Server Components
- API route handlers
- Tailwind CSS ready
- Image optimization
- SEO optimization

### Backend Package
- RESTful API with Express
- Prisma ORM for database
- JWT authentication
- Role-based access control
- Input validation with Zod
- Error handling middleware
- Rate limiting
- CORS configuration

### Worker Package
- Bull queue for background jobs
- Email sending
- Order processing
- Report generation
- Scheduled tasks
- Job monitoring dashboard

### Shared Package
- TypeScript types and interfaces
- Validation schemas
- Utility functions
- Constants and enums
- API contracts

## Features

### NGO Features
- Donation management
- Campaign creation
- Volunteer registration
- Event management
- Newsletter subscription
- Impact reporting

### E-Commerce Features
- Product catalog
- Shopping cart
- Order management
- Payment integration (Stripe/PayPal ready)
- Inventory tracking
- Customer management
- Admin dashboard

## Scalability Considerations

- **Horizontal Scaling**: Stateless API design
- **Caching**: Redis for session and data caching
- **Queue System**: Background job processing
- **Database**: Connection pooling, indexes
- **CDN**: Static asset delivery
- **Load Balancing**: Ready for deployment behind load balancer

## Security

- Environment variable management
- JWT-based authentication
- Password hashing with bcrypt
- Input sanitization
- CORS configuration
- Rate limiting
- SQL injection prevention (Prisma)
- XSS protection

## Monitoring & Logging

- Structured logging (Winston)
- Error tracking (ready for Sentry integration)
- Performance monitoring
- Health check endpoints

## Contributing

1. Create feature branch
2. Make changes
3. Run tests and linting
4. Submit pull request

## License

MIT
