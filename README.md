# Stock Tracker

Sample project application written to learn the [ember.js](http://emberjs.com)
Search for stock names and view last 30 days of stock data.
In addition to ember, this app is built using 

* [Docker](https://www.docker.com/what-docker)
* [node.js](https://nodejs.org)
* [elastic](https://www.elastic.co/)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

## Installation

* `git clone https://github.com/mvpmvh/stock_tracker.git`
* change into the new directory

## Running / Development

* `docker-compose up`
* Visit your app at [http://192.168.99.100:4200/stocks](http://192.168.99.100:4200/stocks).

### Running Tests

* `docker-compose run --rm ember test`
* `docker-compose run --rm ember test --server`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* [Docker](https://www.docker.com/what-docker)
* [Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)
