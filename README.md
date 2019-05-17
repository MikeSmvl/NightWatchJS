<p align="center">
<img src="https://pbs.twimg.com/profile_images/993969044674953216/Peyxjyb2_400x400.jpg">
</p>

# NightWatchJS

Haivision - SDET Intern Node.js/JavaScript Project

### Prerequisites

1. [Docker installed](http://www.lmgtfy.com/?q=how+to+install+docker)

2. Make sure the bridge network's gateway is "172.17.0.1" in Docker. If it is not the same, make sure to change the "selenium_host" in app/nightwatch.json to match your gateway.

```
docker inspect bridge
```

### Installing

Clone the repository
```
git clone https://github.com/MikeSmvl/NightWatchJS.git 
```
Navigate inside the repository
```
cd [path-to-repo]
```
Build the image from the Dockerfile and run selenium-chrome
```
docker-compose build
docker-compose up -d chrome
```

## Running the tests

Run the nightwatch tests
```
docker-compose run --rm nightwatch
```

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
* [NightWatch](http://nightwatchjs.org) - Automated testing framework
* [Selenium Server](https://www.seleniumhq.org/download/) - Portable testing framework
* [Docker](https://www.docker.com) - Operating-system-level virtualization

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
