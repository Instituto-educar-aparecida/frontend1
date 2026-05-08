# Estágio 1: Build do React/Vite
FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# Expõe a porta do Vite
EXPOSE 5174

# Altere para o script que roda o seu mock (ex: npm run dev, npm run mock, etc)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5174"]

# Estágio 2: Servir com Nginx (Rápido e Seguro)
#FROM nginx:stable-alpine
# Copia o build para a pasta que o Nginx usa para servir o site
#COPY --from=build-stage /app/dist /usr/share/nginx/html
# Expõe a porta padrão da internet
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

