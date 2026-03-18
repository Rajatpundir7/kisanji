FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better Docker layer caching
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the ML model
COPY crop_recommender.pkl /app/crop_recommender.pkl

# Copy backend code
COPY backend/ /app/
COPY formulations.json /app/formulations.json

# Create necessary directories
RUN mkdir -p uploads outputs

# Expose port (Koyeb will set PORT env var)
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/api/health')" || exit 1

# Start the server - use PORT env var if set (for Koyeb/Railway), fallback to 8000
CMD uvicorn server:app --host 0.0.0.0 --port ${PORT:-8000}
