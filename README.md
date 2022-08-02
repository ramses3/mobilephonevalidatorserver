# Simple Mobile Phone Number Validator Server

A docker image running a NodeJS/Express application to easily validate any given mobile phone number and detect its country.

## Installation

* clone the repository into your working dir
* change into directory _qrcode_
* build your docker image with ```docker build -t <imagename> .```
* run the container with ```docker run -it -p 5000:5000 <imagename>```

## Usage

Simply access your nodejs server under ```http://localhost:5000/phone/<phone number>```

