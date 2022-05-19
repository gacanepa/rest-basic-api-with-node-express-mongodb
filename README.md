# Basic REST API with Node, Express, and MongoDB

1. Install Node and MongoDB (refer to step 1 [here](https://guias.donweb.com/como-instalar-el-stack-mean-mongodb-express-angular-y-node-en-ubuntu-20-04/) and [the entire guide here](https://guias.donweb.com/como-instalar-y-configurar-mongodb-en-ubuntu-20-04/))
2. Secure MongoDB, create an admin user, and set up an initial database (**academy**) with an empty **teachers** collection (more details [here](https://guias.donweb.com/como-asegurar-mongodb-para-produccion/))
3. Create another MongoDB user with the `readWrite` role in the **academy** database.
4. Close this repository and run `npm install`.
5. Rename `.env.sample` to `.env` and replace the user credentials with those of the account you created in step 3.
6. Run `npm start` to launch the API.
7. Use `curl`, another command-line utility, or Postman to test.

> If using Postman, feel free to import the collection included in this repository. Note that you will need to update the `{{api_server}}` variable to point to the name or IP address of your server.

**Important**: This basic example does not provide authentication or other security measures. You are more than welcome to submit a PR with those features.
