# Doctors of Doom - Wrath & Glory Character Builder

A web application for creating and managing characters for the Wrath & Glory Warhammer 40k RPG.

## Environment Setup

Before running the application, you need to configure Contentful CMS credentials:

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Contentful credentials:

   ```env
   NUXT_ENV_CTF_SPACE_ID=your_contentful_space_id
   NUXT_ENV_CTF_CD_ACCESS_TOKEN=your_contentful_access_token
   ```

> **Note:** The application will run without Contentful credentials, but homebrew content routes will return 503 errors.

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

### Heroku Deployment

See [HEROKU.md](HEROKU.md) for Heroku deployment instructions.

### Docker Production Deployment

```bash
# Build the production image
docker build -t wang-charz:latest .

# Run the container
docker run -p 3000:3000 \
  -e NUXT_ENV_CTF_SPACE_ID=your_space_id \
  -e NUXT_ENV_CTF_CD_ACCESS_TOKEN=your_token \
  wang-charz:latest
```

## Documentation

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Features

- Character creation and management for Wrath & Glory RPG
- Species, archetypes, talents, and wargear libraries
- Psychic powers and ascension packages
- Integration with Contentful CMS for homebrew content
- Character PDF export
- Bestiary and threat management

