env_default := "dev"
project_prefix := "streets-magazine-"
region := "asia-northeast1"

encrypt-env env=env_default:
  gcloud kms encrypt \
  --project {{project_prefix}}{{env}} \
  --location asia-northeast1 \
  --keyring {{project_prefix}}key-ring \
  --key {{project_prefix}}frontend-secret \
  --ciphertext-file .env.{{env}}.encrypted \
  --plaintext-file .env.{{env}}

decrypt-env env=env_default:
  gcloud kms decrypt \
  --project {{project_prefix}}{{env}} \
  --location asia-northeast1 \
  --keyring {{project_prefix}}key-ring \
  --key {{project_prefix}}frontend-secret \
  --ciphertext-file .env.{{env}}.encrypted \
  --plaintext-file .env.{{env}}
