gcloud builds submit --tag gcr.io/submissionmlgc-eabdalmufid/[PROJECT DIRECTORY]

gcloud run deploy backend-mlgc \
--image gcr.io/submissionmlgc-eabdalmufid/[PROJECT DIRECTORY] \
--set-env-vars APP_ENV=production,APP_PORT=8080,APP_HOST=0.0.0.0,MODEL_URL=https://storage.googleapis.com/mybucket-mlgc/model.json \
--platform managed \
--region asia-southeast2 \
--allow-unauthenticated
