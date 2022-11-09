# Simple MERN app

## Basic REST API with Node, Express, and MongoDB

1. Install Node and MongoDB (refer to step 1 [here](https://guias.donweb.com/como-instalar-el-stack-mean-mongodb-express-angular-y-node-en-ubuntu-20-04/) and [the entire guide here](https://guias.donweb.com/como-instalar-y-configurar-mongodb-en-ubuntu-20-04/)).
2. Secure MongoDB, create an admin user, and set up an initial database (**academy**) with an empty **teachers** collection (more details [here](https://guias.donweb.com/como-asegurar-mongodb-para-produccion/)).
3. Create another MongoDB user with the `readWrite` role in the **academy** database.
4. Clone this repository and run `npm install` inside of **api/**.
5. Rename `.env.sample` to `.env` and replace the user credentials with those of the account you created in step 3.
6. Install [PM2](https://pm2.keymetrics.io/) to manage the API: `npm install pm2@latest -g`.
7. Run `pm2 start index.js` to launch the API. You can view the status and stop the process by replacing `start` with `status` and `stop`, respectively.

![PM2 start, status, and stop](/images/pm2-start-status-stop.png)

7. Use `curl`, another command-line utility, or Postman to test.

> If using Postman, feel free to import the collection included in this repository. Note that you will need to update the `{{api_server}}` variable to point to the name or IP address of your server.

## React frontend

1. Move into **client/**: `cd client`.
2. Run `npm install` to put the Node modules in place.
3. Launch the app in development mode with `npm start`. To stop it, hit Ctrl+C.

**Important**: This app does not implement any form of authentication or other security measures. You are more than welcome to submit a PR with those features.

## To do:

- Build the app and serve it through Nginx.
- Implement CI/CD using Github actions and deploy to a cloud provider.
