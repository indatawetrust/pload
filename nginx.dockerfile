FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf
CMD service nginx start
