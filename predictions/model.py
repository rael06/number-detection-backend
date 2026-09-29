"""The digit recognition model (trained with Keras 2, about 675 MB, not in git: see the README).

Keras 3 misreads the input shape of this Keras 2 HDF5 file: it is loaded with tf-keras (Keras 2,
kept in step with TensorFlow)."""

import os
import threading
from functools import cache

MODEL_PATH = os.environ.get('MODEL_PATH', 'resources/model0/model.h5')

_lock = threading.Lock()


@cache
def get_model():
    # Imported here: TensorFlow is only needed once a prediction is made (not for `manage.py check`).
    from tf_keras.models import load_model

    # Prediction only: the optimizer state saved by Keras 2 is not needed.
    return load_model(MODEL_PATH, compile=False)


def predict(batch):
    # One prediction at a time: Keras does not guarantee a model can predict from several threads.
    with _lock:
        return get_model().predict(batch, verbose=0)
