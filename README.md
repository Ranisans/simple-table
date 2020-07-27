# Simple Table

## Steps To Run The Project
* clone this repo - 
  ```bash
    git clone https://github.com/Ranisans/simple-table.git
  ```

if you want to run on your computer, run these commands:

* ```bash
    npm install
  ```
   or
  ```bash
    yarn
  ```
* then 
  ```bash
    npm start
  ```
  or
  ```bash
    yarn start
  ```

* go to http://localhost:3000 in your browser

if you want to use docker, run these commands:

* ```bash
    docker build -t simple-table/react-app .
  ```
  
  to build docker image

* then 

  ```bash
    docker run \                                            
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    simple-table/react-app

  ```

* go to http://localhost:3000 in your browser