import base64
import json
import shutil

from predictions.views import get_predictions
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
import uuid
import datetime
import os

DRAWS_PATH = "resources/draws/"


# Create your views here.

def create_temporary_file_name():
    date_time = datetime.datetime.now().strftime("%y%m%d_%H%M%S")
    unique_id = str(uuid.uuid4())
    return date_time + '__' + unique_id


def create_client_path():
    client_path = DRAWS_PATH + create_temporary_file_name() + '/'
    return client_path


def save_numbers_draws(*numbers):
    path = create_client_path()
    os.mkdir(path)
    for number in numbers:
        save_number_draws(number, path)
    return path


def save_number_draws(number, path):
    for digit in number:
        img_data = digit['data']
        img_name = digit['name']
        img_path = path + img_name + ".png"
        with open(img_path, "wb") as fh:
            fh.write(base64.decodebytes(img_data.encode('utf-8')))


def delete_path(path):
    shutil.rmtree(path, ignore_errors=True)


def map_predictions(predictions, number1, number2):
    i = 0
    j = 0
    for prediction in predictions:
        if str(prediction['name']).startswith('0'):
            number1[i]['prediction'] = prediction
            i += 1
        else:
            number2[j]['prediction'] = prediction
            j += 1


def compute_operation(n1, n2, operator):
    if operator is '+':
        return n1 + n2
    elif operator is '-':
        return n1 - n2
    elif operator is 'x':
        return n1 * n2
    elif operator is '/':
        if n2 is not 0:
            return n1 / n2
        else:
            return float("inf")


def get_predicted_number(number):
    if len(number) == 0:
        return
    predicted_number = ''
    for digit in number:
        predicted_number += str(digit['prediction']['digit'])
    return int(predicted_number)


@api_view(['POST'])
def get_operation_results(request):
    operation = json.loads(request.body)
    if len(operation) == 3:
        number1, number2, operator = operation.values()
        path = save_numbers_draws(number1, number2)
    else:
        number1, number2 = operation.values()
        operator = ''
        path = save_numbers_draws(number1)

    predictions = get_predictions(path)
    delete_path(path)
    map_predictions(predictions, number1, number2)
    operation['predicted_number1'] = get_predicted_number(number1)
    operation['predicted_number2'] = get_predicted_number(number2)

    if operator is not '':
        result = compute_operation(operation['predicted_number1'], operation['predicted_number2'], operator)
        operation['operationString'] = str(operation['predicted_number1']) + " " + operator + " " + str(
            operation['predicted_number2']) + ' = ' + str('{:0.3f}'.format(result))
    else:
        operation['operationString'] = str(operation['predicted_number1'])
    return JsonResponse(operation)

@api_view(['GET'])
def apiTest(request) :
    return JsonResponse({'message':'api running'})