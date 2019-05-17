# Create a lightweight nigthwatchjs docker runner
FROM alpine:latest
# Add Node/NPM/Bash/Nightwatch
RUN apk add --update nodejs-npm && \
    apk add --no-cache bash && \
    npm install -g nightwatch && \
    rm -rf /tmp/* /root/.npm
# Copy your app inside the container
COPY app /app
# Change work directory to it
WORKDIR /app
# Install the node packages
RUN npm install
# Run the tests
CMD nightwatch -c nightwatch.json