# frontend-test-winprovit

Simple API consuming client using Angular for the WINPROVIT technical test.

## Running the application in docker

You can run this application in a docker container using:
```shell script
npm run build --prod
docker build -t frontend-test-winprovit .
docker run -d --rm -p 80:80 frontend-test-winprovit
```

The application will be available [here](http://localhost).
