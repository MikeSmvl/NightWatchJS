<p align="center">
<img src="https://pbs.twimg.com/profile_images/993969044674953216/Peyxjyb2_400x400.jpg">
</p>

# NightWatchJS

Haivision - SDET Intern Node.js/JavaScript Project

### Prerequisites

1. [Node.js installed](https://nodejs.org/en/)

2. Chromedriver, geckodriver or safaridriver installed in the `/usr/local/bin/` directory

3. Nightwatch installed globally

```
npm install -g nightwatch
```

### Installing

Clone the repository
```
git clone https://github.com/MikeSmvl/NightWatchJS.git 
```

Install the dependencies
```
npm install
```

## Running the tests

Running using the default browser (chrome)
```
npm test
```

Running in parallel in multiple browsers (chrome,firefox,safari)
```
nightwatch -e chrome,firefox,safari
```

## Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
* [NightWatch](http://nightwatchjs.org) - Automated testing framework
* [Selenium Server](https://www.seleniumhq.org/download/) - Portable testing framework
* [Docker](https://www.docker.com) - Operating-system-level virtualization

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
