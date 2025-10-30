# Doctors of Doom - Wrath & Glory Character Builder

A web application for creating and managing characters for the Wrath & Glory Warhammer 40k RPG.

## Development

### Option 1: Docker (Recommended)

#### Prerequisites

You'll need to install Docker on your system:

**Windows:**
1. Download Docker Desktop from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Run the installer and follow the installation wizard
3. Restart your computer if prompted
4. Open Docker Desktop and wait for it to start
5. Verify installation: Open PowerShell/Command Prompt and run `docker --version`

**macOS:**
1. Download Docker Desktop from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Open the `.dmg` file and drag Docker to Applications
3. Launch Docker from Applications folder
4. Follow the setup wizard
5. Verify installation: Open Terminal and run `docker --version`

**Linux (Ubuntu/Debian):**
```bash
# Update package index
sudo apt-get update

# Install prerequisites
sudo apt-get install ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Set up the repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Verify installation
docker --version
docker compose version
```

**Linux (Fedora/RHEL):**
```bash
# Install using dnf
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Start Docker
sudo systemctl start docker
sudo systemctl enable docker

# Verify installation
docker --version
```

#### Running with Docker

Once Docker is installed:

1. **Clone the repository** (if you haven't already):
```bash
git clone https://github.com/felixzrte/wang-charz.git
cd wang-charz
```

2. **Start the application:**

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

3. **Access the application:**
   - Open your browser and go to `http://localhost:3000`

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

### Option 2: Local Build Setup (Without Docker)

If you prefer not to use Docker, you can run the application directly on your machine.

#### Step 1: Install Node.js

**Windows:**
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS version** (20.x or later)
3. Run the installer (`.msi` file)
4. Follow the installation wizard (keep default settings)
5. Restart your computer
6. Verify installation: Open Command Prompt and run:
```bash
node --version
npm --version
```

**macOS:**

*Option A - Using Installer:*
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS version** (20.x or later)
3. Open the `.pkg` file and follow the installer
4. Verify installation in Terminal:
```bash
node --version
npm --version
```

*Option B - Using Homebrew (recommended):*
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node@20

# Verify installation
node --version
npm --version
```

**Linux (Ubuntu/Debian):**
```bash
# Using NodeSource repository (recommended for specific versions)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

**Linux (Fedora/RHEL):**
```bash
# Using NodeSource repository
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

# Verify installation
node --version
npm --version
```

#### Step 2: Clone and Setup the Project

1. **Clone the repository:**
```bash
git clone https://github.com/felixzrte/wang-charz.git
cd wang-charz
```

2. **Install dependencies:**
```bash
npm install
```

This may take a few minutes as it downloads all required packages.

#### Step 3: Run the Application

**Development Mode (with hot-reload):**
```bash
npm run dev
```

This will start the development server with hot-reload at `http://localhost:3000`

**Production Mode:**
```bash
# Build the application
npm run build

# Start the production server
npm start
```

**Generate Static Site:**
```bash
npm run generate
```

#### Step 4: Access the Application

Open your web browser and navigate to:
- Development: `http://localhost:3000`
- Production: `http://localhost:3000`

#### Troubleshooting

**Port 3000 already in use:**
```bash
# Windows - Find and kill the process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux - Find and kill the process
lsof -ti:3000 | xargs kill -9
```

**Permission errors on Linux/macOS:**
```bash
# If you get permission errors during npm install
sudo chown -R $USER:$USER ~/.npm
sudo chown -R $USER:$USER ./node_modules
```

**Module not found errors:**
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**OpenSSL legacy provider error:**
```bash
# Set the environment variable before running
export NODE_OPTIONS=--openssl-legacy-provider
npm run dev
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

