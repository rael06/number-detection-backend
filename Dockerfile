# syntax=docker/dockerfile:1

# Python 3.12 slim with prebuilt wheels (TensorFlow CPU, Pillow): no compiler in the image.
FROM python:3.12-slim-trixie
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 PIP_NO_CACHE_DIR=1 PIP_DISABLE_PIP_VERSION_CHECK=1 \
  KERAS_HOME=/tmp/.keras TF_CPP_MIN_LOG_LEVEL=2
WORKDIR /app
COPY requirements.txt requirements-keras2.txt ./
# tf-keras declares `tensorflow` as a dependency, which would duplicate tensorflow-cpu: no deps.
RUN pip install -r requirements.txt && pip install --no-deps -r requirements-keras2.txt
COPY . .
# Static files hashed and compressed once. The model comes from a read-only volume and the drawings
# of each request go to a tmpfs (config/deploy.yml); files belong to root, the app runs as `app`.
RUN python manage.py collectstatic --noinput \
  && mkdir -p resources/model0 resources/draws \
  && useradd --uid 1000 --no-create-home --shell /usr/sbin/nologin app
USER app
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=5s --start-period=120s \
  CMD ["python", "-c", "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8000/up', timeout=4)"]
# One process (the model takes about 1 GB of memory); threads keep /up answering during a prediction.
# No control socket: unused, and it would be created in the home of `app` on a read-only filesystem.
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "1", "--threads", "4", "--timeout", "120", "--no-control-socket", "Djangonumberdetection.wsgi:application"]
