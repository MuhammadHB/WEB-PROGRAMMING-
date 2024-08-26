FROM httpd:latest

# Copy the entire directory to the appropriate location in the container
COPY . /usr/local/apache2/htdocs/

# Expose port 80 to the outside world
EXPOSE 80
