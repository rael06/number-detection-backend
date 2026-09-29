import os

import numpy as np
from PIL import Image

from predictions.model import predict


def load_draw(path):
    """Loads a drawing like Keras' former flow_from_dataframe did: grayscale, 28x28 with the nearest
    pixel, values scaled to [0, 1], one channel."""
    with Image.open(path) as img:
        if img.mode not in ('L', 'I;16', 'I'):
            img = img.convert('L')
        img = img.resize((28, 28), Image.Resampling.NEAREST)
        return np.asarray(img, dtype='float32')[..., np.newaxis] * (1. / 255)


def get_predictions(draws_path):
    numbers = []
    for filename in os.listdir(draws_path):
        scores = predict(load_draw(os.path.join(draws_path, filename))[np.newaxis, ...])
        numbers.append({
            'name': filename,
            'digit': int(scores.argmax()),
            'scores': ['{:0.2f}'.format(score * 100) for score in scores[0]],
        })
    return numbers
