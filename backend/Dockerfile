FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for better caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY . .

# Copy the crop_recommender.pkl model from parent directory if it exists
# (it lives in the repo root)
COPY ../crop_recommender.pkl /app/crop_recommender.pkl 2>/dev/null || true

# Create necessary directories
RUN mkdir -p uploads outputs

# Expose port
EXPOSE 8000

# Start the server
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
