from django.shortcuts import render
import os
import sys
import pandas as pd
from keras.preprocessing.image import ImageDataGenerator
from contextlib import contextmanager
from Djangonumberdetection import urls


@contextmanager
def suppress_stdout():
    with open(os.devnull, 'w') as devnull:
        old_stdout = sys.stdout
        sys.stdout = devnull
        try:
            yield
        finally:
            sys.stdout = old_stdout


def get_predictions(draws_path):
    numbers = []
    model = urls.MODEL
    draws = os.listdir(draws_path)
    filenames_test = []
    categories_test = []

    for file in draws:
        filenames_test.append(file)
        categories_test.append('')

    df_draws = pd.DataFrame({
        'filename': filenames_test,
        'category': categories_test
    })
    test_datagen = ImageDataGenerator(rescale=1. / 255)
    for i in range(df_draws.shape[0]):
        with suppress_stdout():
            df_draw = df_draws.iloc[[i]]
            draw_generator = test_datagen.flow_from_dataframe(
                df_draw,
                draws_path,
                x_col='filename',
                y_col='category',
                target_size=(28, 28),
                class_mode='categorical',
                color_mode='grayscale'
            )

        predict = model.predict_generator(draw_generator, steps=1)
        prediction = predict.argmax()
        balance = []
        for b in range(len(predict[0])):
            balance.append(str('{:0.2f}'.format(predict[0, b] * 100)))

        number = {'name': str(df_draw.iloc[0, 0]), 'digit': int(prediction), 'scores': balance}
        numbers.append(number)
    return numbers

# Create your views here.
