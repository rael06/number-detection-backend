from django.http import HttpResponse


class HealthCheckMiddleware:
    """Answers /up before host validation: kamal-proxy checks the container through its address.
    The WSGI module loads the model first, so a worker only answers once it can predict."""

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path == '/up':
            return HttpResponse('OK', content_type='text/plain')
        return self.get_response(request)
