FROM nginx:1.27.4-alpine

# Add static web page
COPY dist/* /usr/share/nginx/html/
