# Estágio 1: Build do React/Vite
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Servir com Nginx (Rápido e Seguro)
FROM nginx:stable-alpine
# Copia o build para a pasta que o Nginx usa para servir o site
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Expõe a porta padrão da internet
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

