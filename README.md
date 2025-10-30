# Doctors of Doom - Wrath & Glory Character Builder

A web application for creating and managing characters for the Wrath & Glory Warhammer 40k RPG.

## Development

### Option 1: Docker (Recommended)

#### Docker Prerequisites

- Docker
- Docker Compose

#### Running with Docker

**Development Mode (with hot-reload):**

```bash
# Start development server
docker-compose up dev

# Or run in background
docker-compose up -d dev
```

**Production Mode:**

```bash
# Build and start production server
docker-compose up app

# Or run in background
docker-compose up -d app
```

The application will be available at `http://localhost:3000`

**Docker Commands:**

```bash
# Stop containers
docker-compose down

# Rebuild containers (after dependency changes)
docker-compose build

# View logs
docker-compose logs -f

# Remove containers and volumes
docker-compose down -v
```

### Option 2: Local Build Setup

#### Local Prerequisites

- Node.js 20.x
- npm

#### Commands

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Deployment

### Docker Production Deployment

```bash
# Build the production image
docker build -t wang-charz:latest .

# Run the container
docker run -p 3000:3000 \
  wang-charz:latest
```

## Documentation

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Features

- Character creation and management for Wrath & Glory RPG
- Species, archetypes, talents, and wargear libraries
- Psychic powers and ascension packages
- Character PDF export
- Bestiary and threat management

