FROM node:14-alpine AS builder
WORKDIR /code
COPY . .
RUN npm run build --quiet
FROM nginx:1-alpine
COPY --from=builder code/build-storybook/storybook /usr/share/nginx/html
