# Tavus Test App

Create an AI avatar using the [Replica API](https://docs.tavusapi.com/sections/introduction)

## Getting started

1. To use this test app [sign up](https://app.tavus.io/signup) to Tavus and create an API key.
2. Rename `.env.example` to `.env` and add your Tavus API key.

### Install dependencies

This project uses `npm`, run the following to install the required dependencies.

```shell
npm install
```

### Start the development server

To start the development run the following.

```shell
npm run dev
```

### Preview

To see the site running in development mode visit:

```
http://localhost:4321
```

## Usage

Fill out the form fields and click the create button. The page will automatically refresh every 5 seconds until the `status` changes to `ready`.

Copy the `download_url` from the response and paste it into a new browser window to download your rendered video.

You can also see the rendered video in your [Tavus dashboard](https://app.tavus.io/developer/videos).
