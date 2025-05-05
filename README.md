# Dockerized Flask-React Application

This is a containerized web application featuring a Flask backend, React frontend (with Vite), and Nginx as a reverse proxy.

## Project Structure

```
.
├── backend/               # Flask backend
│   ├── app.py            # Main Flask application
│   ├── Dockerfile        # Backend container configuration
│   └── requirements.txt  # Python dependencies
├── frontend/             # React frontend
│   ├── Dockerfile       # Frontend container configuration
│   ├── index.html
│   ├── package.json     # Node.js dependencies
│   ├── vite.config.js   # Vite configuration
│   └── src/            # Frontend source code
├── docker-compose.yml    # Docker services configuration
├── nginx.conf           # Nginx reverse proxy configuration
└── README.md            # This file
```

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository
2. Navigate to the project directory

### Running the Application

To start all services:

```bash
docker compose up --build
```

This command will:
- Build and start the Flask backend service
- Build and start the React frontend service
- Start the Nginx reverse proxy

The application will be available at:
- Main application: http://localhost:80

## Development

- The backend code is mounted as a volume, so changes will reflect immediately with Flask's development server
- The frontend code is mounted as a volume, enabling hot-reloading during development
- Node modules are persisted in a Docker volume to optimize performance

## Environment Variables

### Backend
- `FLASK_ENV`: Set to 'development' for development mode

### Frontend
- `REACT_APP_API_URL`: API endpoint for the backend service

## Services

### Backend (Flask)
- Python-based REST API
- Running in development mode with hot-reload
- Container name: flask-backend

### Frontend (React + Vite)
- React application built with Vite
- Features hot-module replacement in development
- Container name: react-frontend

### Nginx
- Acts as a reverse proxy
- Handles routing between frontend and backend
- Exposes the application on port 80

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.