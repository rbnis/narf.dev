FROM nginx:1.23.0-alpine

# Add static web page
COPY dist/* /usr/share/nginx/html/
