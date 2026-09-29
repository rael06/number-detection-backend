"""
Django settings of the number detection API.

Production values come from the environment (config/deploy.yml): ENV=PRODUCTION turns DEBUG off
and requires SECRET_KEY.
"""

import os
from pathlib import Path

import dj_database_url

BASE_DIR = Path(__file__).resolve().parent.parent

DEBUG = os.environ.get('ENV') != 'PRODUCTION'

# Production refuses to start without its own key; the fallback only serves local runs and builds.
SECRET_KEY = os.environ.get('SECRET_KEY', 'django-insecure-local-only') if DEBUG else os.environ['SECRET_KEY']

ALLOWED_HOSTS = os.environ.get(
    'ALLOWED_HOSTS',
    '127.0.0.1,localhost,number-detection-backend.rael-calitro.ovh,www.number-detection-backend.rael-calitro.ovh',
).split(',')

INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',
    'corsheaders',
]

MIDDLEWARE = [
    # First: kamal-proxy checks /up with the address of the container, which is not an allowed host.
    'Djangonumberdetection.health.HealthCheckMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Public API without credentials, called from the browser by the number-detection front end.
CORS_ALLOW_ALL_ORIGINS = True

# No user, no session: the API is open, as before.
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [],
    'DEFAULT_PERMISSION_CLASSES': ['rest_framework.permissions.AllowAny'],
    'UNAUTHENTICATED_USER': None,
}

ROOT_URLCONF = 'Djangonumberdetection.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
            ],
        },
    },
]

WSGI_APPLICATION = 'Djangonumberdetection.wsgi.application'

# Not used by the API; DATABASE_URL can still point elsewhere.
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
DATABASES['default'].update(dj_database_url.config(conn_max_age=500))
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files compressed by `collectstatic` when the image is built, served by WhiteNoise. Not
# hashed: the embedded Angular build references its files by name (and missing source maps).
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'Djangonumberdetection' / 'staticfiles'
STATICFILES_DIRS = [BASE_DIR / 'Djangonumberdetection' / 'static']
STORAGES = {
    'default': {'BACKEND': 'django.core.files.storage.FileSystemStorage'},
    'staticfiles': {'BACKEND': 'whitenoise.storage.CompressedStaticFilesStorage'},
}

# Errors in the container logs.
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {'console': {'class': 'logging.StreamHandler'}},
    'root': {'handlers': ['console'], 'level': 'WARNING'},
}
