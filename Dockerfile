# Use official lightweight Python image
FROM python:3.11-slim

# Prevent Python from writing .pyc files and enable unbuffered logging
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=10000

# Install system dependencies (libpcap for scapy packet processing, curl for healthcheck)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpcap0.8 \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Install Python dependencies first to leverage Docker layer caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code and assets
COPY app/ ./app/
COPY backend/ ./backend/
COPY static/ ./static/
COPY scripts/ ./scripts/
COPY supabase/ ./supabase/

# Ensure data and models directories exist and are writable
RUN mkdir -p /app/data /app/models

# Expose default port
EXPOSE 10000

# Start uvicorn with runtime dynamic $PORT expansion (Render standard)
CMD uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-10000}
