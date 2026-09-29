"""
WSGI config for Djangonumberdetection project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Djangonumberdetection.settings')

application = get_wsgi_application()

# Loads the model before the first request: a worker only answers (and passes /up) once it is ready.
from predictions.model import get_model  # noqa: E402

get_model()
