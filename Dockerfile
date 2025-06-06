# Utiliser l'image nginx officielle (version stable)
FROM nginx:stable-alpine

# Copier les fichiers du projet dans le dossier par défaut de nginx
COPY . /usr/share/nginx/html

# Expose le port 80 (pas obligatoire mais bonne pratique)
EXPOSE 80

# nginx démarre automatiquement dans cette image officielle, pas besoin de CMD personnalisé
