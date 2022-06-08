# Atlas Engine

To install Atlas Engine locally, the following pre-reqs are required.

* Linux (many of us develop on Ubuntu), Mac OS X, or Windows (we recommend WSL2)
* Node.js v16 or later (we recommend installing via [`nvm`](https://github.com/nvm-sh/nvm)
  or [`asdf`](https://github.com/asdf-vm/asdf).)
* C++ (for `node-gyp`), Python >=3.6 + [PIP](https://pypi.org/project/pip/), `make`
  and other build tools, for compiling Mediasoup.
  Although most of XREngine is written in TypeScript, it uses a [Mediasoup](https://mediasoup.org/)
  engine for WebRTC conferencing. See the [Mediasoup install instructions](https://mediasoup.org/documentation/v3/mediasoup/installation/)
  for more details.
* Docker. (Although Docker is technically optional, running XREngine requires starting up
  half a dozen different services, and using Docker Compose will make your life dramatically
  easier.)
* MariaDB and Redis. (If you're using Docker, containers for MariaDB and Redis 
  will automatically be started up.)

### Getting Started

See the [Installation instructions](/docs/docs/1_installation/readme.md)
for more details.

![image](https://user-images.githubusercontent.com/18633264/172653958-7803cbab-acd8-408d-9838-cfb91a0effeb.png)
