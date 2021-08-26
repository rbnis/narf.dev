FROM nginx:1.21.1-alpine

# Add static web page
COPY dist/* /usr/share/nginx/html/
