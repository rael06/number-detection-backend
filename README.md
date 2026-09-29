# Number detection — backend

Django API that reads handwritten digits with a Keras model (trained on MNIST-like drawings) and
computes the operation drawn by the user. The front end is the repository `number-detection-frontend`.

## API

- `POST /api/getOperationResults/`: JSON `{ number1, number2[, operator] }`, where each number is a
  list of `{ name, data }` (`data`: PNG in base64; names starting with `0` belong to `number1`).
  Answers the same object with the predictions, the predicted numbers and the result.
- `GET /api/test/`: `{"message": "api running"}`.
- `GET /up`: health check.

## Run locally

Python 3.12 (`.python-version`) and the model file in `resources/model0/model.h5` (not in git):

```bash
python -m venv .venv && . .venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

`resources/draws/` keeps sample drawings; each request writes its drawings there, then deletes them.

## Deployment

The API runs on the VPS at `https://number-detection-backend.rael-calitro.ovh`, deployed with
[Kamal 2](https://kamal-deploy.org) (`config/deploy.yml`) following the conventions of the platform
repository `rael06/vps`. GitHub Actions (`.github/workflows/ci-cd.yml`) checks the project on every
push and pull request, and on `main` builds the image on the runner, sends it to the VPS through the
SSH tunnel and switches `kamal-proxy` once `/up` answers: no downtime.

- **Image** (`Dockerfile`): `python:3.12-slim-trixie`, TensorFlow CPU, static files collected at
  build time, runs gunicorn as the `app` user (uid 1000), read-only with a tmpfs for the drawings.
- **Model**: `model.h5` (about 675 MB) is not in git nor in the image. It lives in the Docker volume
  `number-detection-model`, mounted read-only. Filling it once from a copy of the file:

  ```bash
  scp model.h5 rael_vps_contabo:/tmp/model.h5
  ssh rael_vps_contabo 'docker run --rm -v number-detection-model:/m -v /tmp/model.h5:/src/model.h5:ro busybox cp /src/model.h5 /m/ && rm /tmp/model.h5'
  ```

- **Settings and secrets**: `ENV=PRODUCTION` is fixed in `config/deploy.yml`; the secret
  `SECRET_KEY` and the connection secrets (`KAMAL_SSH_KEY`, `VPS_HOST`, `VPS_SSH_PORT`,
  `VPS_KNOWN_HOSTS`) live in the GitHub environment `production`, restricted to `main`.
- The repository variable `DEPLOY_ENABLED` (`true`/`false`) turns deployments on or off.
- Rollback: `kamal app containers -q` lists the versions kept on the VPS, `kamal rollback <version>`
  switches back (see `docs/runbooks/workstation.md` in `rael06/vps`).
