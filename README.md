# Talent Plus

## Building and running this project using Docker

1. Click on the "Code" button and select the "download zip" option to download this repository to your local machine.

2. Extract the file to your desktop or any preferred directory of your choice.

3. Open the file with an IDE, (preferably Visual Studio Code).

4. Open the intergrated terminal on Visual Studio Code using the "control" button together with the "backtick" button.

5. Type the following command in the terminal to create a docker image (You should have docker desktop downloaded to your local machine and running in the background before proceeding. Otherwise, visit https://www.docker.com/products/docker-desktop/ to download the version recommended for your device).

`docker build -t talent-plus .`

note that the code above creates an image with the name "talent-plus" and tag name "latest". You can show the list of image(s) created by running the code below in the terminal.

`docker image ls`

6. To run a container, the code should look like this.

`docker run --name <preferredName> -d -p <port>:5173 talent-plus`

The preferredName is the name of the container.
5173 is the port exposed by the app when the container is running.
The port could be 80, 3000, 8080 etc, depending on the user.
The -d flag is optional. so we can have somthing like this in the terminal.

`docker run --name test -d -p 3000:5173 talent-plus`
or
`docker run --name test -p 3000:5173 talent-plus`

7. Open your browser and visit => 'localhost:port'

8. To exit the docker process, go to the terminal and run

`docker stop test` if you included the -d flag in step 6,
if you omitted the -d flag, open a new terminal tab by clicking the + sign in the terminal window and run
`docker stop test`.

NB: 'test' is the name of the container in this example, if you created your container with another name, replace 'test' with it.