# E-commerce Microfrontend Application

A modern e-commerce application built using microfrontend architecture with Module Federation.

## Project Structure

```
├── apps/
│   ├── container/    # Host application
│   ├── products/     # Product listing microfrontend
│   └── cart/         # Shopping cart microfrontend
```

## Technologies

- React 19
- TypeScript
- Webpack Module Federation
- pnpm (Package Manager)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

Run all applications:

```bash
pnpm dev
```

Or run individual apps:

```bash
# Container app (Port 3000)
pnpm --filter container dev

# Products app (Port 3001)
pnpm --filter products dev

# Cart app (Port 3002)
pnpm --filter cart dev
```

### Ports

- Container: http://localhost:3000
- Products: http://localhost:3001
- Cart: http://localhost:3002

## Architecture

- **Container**: Main application shell that integrates other microfrontends
- **Products**: Handles product listing and display
- **Cart**: Manages shopping cart functionality
- **UI Package**: Shared component library
