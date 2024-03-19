HOME TASK PROJECT DOCUMENTATION 
 
Frontend  

  

In this section, I will provide an in-depth description of the frontend codebase for our React application. 

  

1. App Component (App.js): 

- Description: The `App` component acts as the central hub of our React application, orchestrating the routing and authentication logic. 

- Functionality: 

  - Utilizes React Router for managing navigation between different pages. 

  - Defines routes for the login, signup, and home pages. 

  - Manages the authentication state using the `isAuthenticated` state variable, ensuring proper access control throughout the application. 

- Components Used: 

  - Utilizes React Router's `BrowserRouter`, `Routes`, and `Route` components to define and handle routes. 

  - Renders child components such as `Login`, `Signup`, and `Home` based on the defined routes. 

- Props: 

  - `setIsAuthenticated`: Setter function passed down to child components to update the authentication state. 

  

 2. Home Component (Home.js): 

- Description: The `Home` component serves as the landing page of our application, welcoming authenticated users. 

- Functionality: 

  - Checks the authentication status to determine whether the user is logged in. 

  - Redirects unauthenticated users to the login page to ensure access control. 

  - Displays a welcome message to authenticated users, providing a personalized experience. 

- Props: 

  - `isAuthenticated`: Boolean flag indicating the authentication status of the user. 

  

3. Login Component (Login.js): 

- Description: The `Login` component presents users with a form to log into the application securely. 

- Functionality: 

  - Offers a user-friendly interface for entering email and password credentials. 

  - Conducts client-side validation of input fields, ensuring data integrity before submission. 

  - Initiates a POST request to the backend for user authentication, ensuring secure communication. 

  - Navigates users to the home page upon successful login, enabling seamless transition within the application. 

- Dependencies: 

  - Utilizes the Axios library for making asynchronous HTTP requests to the backend API. 

  - Leverages the `useNavigate` hook from React Router for programmatic navigation. 

- Props: 

  - `setIsAuthenticated`: Callback function to update the authentication state upon successful login. 

  

4. Signup Component (Signup.js): 

- Description: The `Signup` component empowers users to register for our application effortlessly. 

- Functionality: 

  - Presents a well-designed form for users to input their name, email, and desired password. 

  - Performs client-side validation of form inputs, ensuring data accuracy and completeness. 

  - Dispatches a POST request to the backend for user registration, securely transmitting user data. 

  - Guides users back to the login page after successful registration, streamlining the user journey. 

- Dependencies: 

  - Utilizes Axios for facilitating HTTP requests to the backend API. 

  - Relies on React Router's `useNavigate` hook for navigation within the application. 

- Props: 

  - None. 

  

5. Form Validation (LoginValidation.js, SignupValidation.js): 

- Description: These utility files house functions responsible for client-side form validation. 

- Functionality: 

  - Implements comprehensive validation rules for email, password, and name fields to ensure data integrity. 

  - Provides immediate feedback to users by returning error messages for invalid inputs. 

  - Enhances user experience by identifying and addressing input errors, fostering usability and trust. 

- Dependencies: 

  - None. 

  

6. Entry Point (index.js): 

- Description: The `index.js` file serves as the entry point for our React application, facilitating the rendering process. 

- Functionality: 

  - Renders the `App` component within the root HTML element, kickstarting the application. 

  - Configures strict mode to detect and address potential issues during development, enhancing code quality and stability. 

- **Dependencies:** 

  - Utilizes ReactDOM for rendering React components into the DOM. 

  

Backend 

  

In this section, I'll provide detailed documentation for the backend codebase of our application. 

 Server.js: 

1. Server Setup: 

- Description: The `server.js` file initializes the backend server using Express.js, defining routes and handling incoming requests. 

- Functionality: 

  - Sets up an Express application to listen for incoming HTTP requests. 

  - Implements middleware for parsing JSON data and enabling CORS (Cross-Origin Resource Sharing). 

  - Configures routes for handling user authentication and registration requests. 

- Dependencies: 

  - Requires the Express.js framework for building the server. 

  - Utilizes the MySQL package for database interaction. 

  

2. Database Connection: 

- Description: The backend establishes a connection to the MySQL database to perform CRUD operations on user data. 

- Functionality: 

  - Uses the MySQL package to create a connection pool with the MySQL database. 

  - Provides database credentials such as host, user, password, and database name. 

- Dependencies: 

  - Relies on the MySQL package for interacting with the MySQL database. 

  

 3. User Registration Endpoint: 

- Description: Defines an endpoint to handle user registration requests, allowing users to sign up for the application. 

- Functionality: 

  - Accepts POST requests containing user registration data (name, email, password). 

  - Inserts the user data into the MySQL database after validation. 

  - Responds with success or error messages based on the outcome of the registration process. 

- Dependencies: 

  - Requires Express.js for route handling. 

  - Relies on the MySQL package for database interaction. 

  

4. User Login Endpoint: 

- Description: Implements an endpoint to handle user login requests, facilitating user authentication. 

- Functionality: 

  - Receives POST requests containing user credentials (email, password) for authentication. 

  - Queries the MySQL database to verify user credentials. 

  - Responds with a success message upon successful authentication or an error message if authentication fails. 

- Dependencies: 

  - Depends on Express.js for defining routes. 

  - Utilizes the mysql package for database querying. 

  

5. Environment Configuration: 

- Description: Configures environment variables for database connection parameters to ensure security and flexibility. 

- Functionality: 

  - Defines environment variables for database host, user, password, and database name. 

  - Ensures sensitive information such as database credentials are not hard-coded into the codebase. 

- Dependencies: 

  - None. 

 

Frontend DockerFile 

 

FROM node:18.17.1 

I selected the Node.js version 18.17.1 as the base image for my Docker container. This specific version of Node.js will ensure compatibility with my frontend application. 

  

WORKDIR /usr/src/app 

I set the working directory within the container to `/usr/src/app`. This directory will serve as the base directory for all subsequent commands in the Dockerfile. 

  

COPY /Frontend/frontend/package.json /usr/src/app/package.json 

COPY /Frontend/frontend/package-lock.json /usr/src/app/package-lock.json 

I copied the `package.json` and `package-lock.json` files from the `Frontend/frontend` directory on my local machine into the `/usr/src/app` directory inside the container. These files contain the dependencies required for my frontend application. 

RUN npm install 

I executed the `npm install` command inside the container to install all the dependencies listed in the `package.json` file. This ensures that all necessary Node.js packages are installed for my frontend application to function correctly. 

  

COPY . /usr/src/app 

I copied all the remaining files and directories from the root directory of my local machine into the `/usr/src/app` directory inside the container. This includes all the frontend application code and any other files necessary for its execution. 

  

EXPOSE 3000 

I specified that the container will listen on port 3000. Although this instruction doesn't actually publish the port, it informs Docker that this port will be used by my frontend application. 

  

CMD ["npm", "start"] 

Finally, I set the default command to run when the container starts. It executes `npm start`, assuming that the `start` script is defined in the `scripts` section of my `package.json` file. This command will start my frontend application inside the container, making it accessible externally on port 3000. 

 
Backend DockerFile 
 
FROM node:20-alpine 

I chose to start my Dockerfile with a base image that provides Node.js version 20 running on Alpine Linux. Alpine is a lightweight distribution, which helps keep my container small and efficient. 

WORKDIR /usr/src/app 

I set the working directory within the container to `/usr/src/app`. This is where I'll be copying my application files and where subsequent commands will be executed. 

COPY /Backend/package.json /usr/src/app/package.json 

COPY /Backend/package-lock.json /usr/src/app/package-lock.json 

I copied the `package.json` and `package-lock.json` files from my local `Backend` directory into the `/usr/src/app` directory inside the container. These files are crucial for installing dependencies for my Node.js application. 

  

RUN npm install 

I ran `npm install` inside the container to install all the dependencies listed in the `package.json` file. This ensures that all required Node.js packages are installed and ready for my application to run smoothly. 

COPY /Backend /usr/src/app 

Next, I copied the rest of my application files from the `Backend` directory on my local machine into the `/usr/src/app` directory inside the container. This includes all the code and additional files necessary for my application to function correctly. 

 

EXPOSE 8801 

I specified that my container will listen on port 8801. Although this instruction doesn't actually publish the port, it informs Docker that this port will be used by my application. 

  

CMD ["npm", "start"] 

Finally, I set the default command to run when the container starts. It executes `npm start`, assuming that the `start` script is defined in the `scripts` section of my `package.json` file. This command will kickstart my Node.js application inside the container, allowing it to be accessed externally on port 8801. 

 

Docker Compose File 

  

version: "3.8" 

This indicates the version of Docker Compose file syntax I'm using. 

services: 

Here, I define the services that will run as part of my Docker Compose setup. 

  

  frontend: 

    build: 

      context: . 

      dockerfile: ./Frontend/frontend/Dockerfile 

For the `frontend` service, I specify how to build it using the Dockerfile located at `./Frontend/frontend/Dockerfile`. The `context: .` tells Docker to use the current directory as the build context. 

  

    volumes: 

      - ./Frontend/frontend/:/usr/src/app 

      - /usr/src/app/node_modules/ 

I mount two volumes into the container: one for the local frontend directory mapped to `/usr/src/app` inside the container, and another for the `node_modules` directory to avoid overwriting it with the local `node_modules`. 

  

    ports: 

      - "3000:3000" 

This line exposes port 3000 on the host and forwards it to port 3000 inside the container, making the frontend accessible. 

  

    depends_on: 

      - backend  

I specify that the `frontend` service depends on the `backend` service. Docker Compose will ensure that the `backend` service is started before the `frontend` service. 

  

  backend: 

    build: 

      context: . 

      dockerfile: ./Backend/Dockerfile 

Similar to the frontend service, I define the configuration for the `backend` service and specify how to build it using its Dockerfile located at `./Backend/Dockerfile`. 

  

    ports: 

      - "8801:8801" 

This line exposes port 8801 on the host and forwards it to port 8801 inside the container, enabling access to the backend service. 

  

    depends_on: 

      - database  

I specify that the `backend` service depends on the `database` service. Docker Compose will ensure that the `database` service is started before the `backend` service. 

  

    environment: 

      - DB_HOST=database 

      - DB_USER=root 

      - DB_PASSWORD=zuheb101625 

      - DB_NAME=signup  

These lines set environment variables for the `backend` service, configuring the database connection details. 

  

  database: 

    image: mariadb:10.4.32  

For the `database` service, I specify to use the `mariadb:10.4.32` Docker image from Docker Hub. 

 

    ports: 

      - "3306:3306" 

This line exposes port 3306 on the host and forwards it to port 3306 inside the container, allowing access to the MariaDB database. 

  

    environment: 

      MYSQL_ROOT_PASSWORD: zuheb101625 

      MYSQL_DATABASE: signup 

These lines set environment variables for configuring the MariaDB root password and the database name. 

  

    volumes: 

      - ./data:/var/lib/mysql 

This line mounts a volume named `data` into the container for persistent storage of the database. 

  

    command: --character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci 

Here, I provide additional configuration options to the MariaDB server when it starts up. 

  

volumes: 

  data: 

Finally, I define a volume named `data` which is used by the `database` service for persistent storage. 

 

Docker Run(Linux): 

  

1. Update Package Repository: 

 

   sudo apt update 

   - Update the package repository to ensure the latest package information. 

  

2. Install Git: 

 

   sudo apt install git 

   - Install Git, a version control system, which is required for cloning the project repository. 

  

3. Verify Git Installation: 

 

   git --version 

   - Check the version of Git to verify that it's installed correctly. 

  

4. Configure Git User: 

 

   git config --global user.name "your_username" 

   git config --global user.email "your_email" 

   - Set up Git user configuration with username and email. 

  

5. List Git Configuration: 

 

   git config --list 

   - List the global Git configurations to confirm the changes. 

  

6. Clone Repository: 

    

   mkdir Assignment 

   cd Assignment/ 

   git clone https://github.com/zuhebahmed88091/Assignment.git 

   - Create a directory named `Assignment`, navigate into it, and clone the repository containing the project files. 

  

7. Navigate to Project Directory: 

    

   cd Assignment 

   - Enter the cloned project directory. 

  

8. Check Docker Version: 

    

   docker --version 

   - Verify the Docker installation by checking its version. 

  

9. Remove Conflicting Docker Packages: 

 

   for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done 

   - Remove conflicting Docker packages to avoid conflicts during installation. 

  

10. Update and Install Dependencies: 

     

    sudo apt-get update 

    sudo apt-get install ca-certificates curl 

    - Update package lists and install necessary dependencies for Docker installation. 

  

11. Configure Docker Repository: 

    

    sudo install -m 0755 -d /etc/apt/keyrings 

    sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc 

    sudo chmod a+r /etc/apt/keyrings/docker.asc 

    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null 

    sudo apt-get update 

    - Set up Docker repository and update package lists. 

  

12. Install Docker: 

    

    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin 

    - Install Docker Engine, CLI, Containerd, and additional Docker plugins. 

  

13. Verify Docker Installation: 

    

    docker --version 

    - Check the installed Docker version to confirm successful installation. 

  

14. Install Docker using Snap (Optional): 

     

    sudo snap install docker 

    - Alternatively, can Install Docker using Snap package manager. 

  

15. Verify Docker Compose Version: 

    

    docker compose version 

    - Verify the installed Docker Compose version. 

  

16. Build and Run Docker Containers: 

     

    sudo docker-compose up -d --build 

    - After installing all the required software, initiate the building and execution of Docker containers as defined in the `docker-compose.yml` file. This command is executed in detached mode, allowing the containers to run in the background. 

  

17. Check Running Containers: 

    

    sudo docker ps 

    - List all running Docker containers to ensure they are up and healthy. 

  

18. Access MySQL Container: 

     

    sudo docker exec -it < MySQL _container_id> bash 

    - To access the MySQL container and perform tasks such as table creation, enter the bash shell of the MySQL container to directly interact with the MySQL server. 

  

19. Access MySQL Database: 

 

    mysql -u root -p 

    - Log into MySQL server with the root user and prompts for password as per backend configuration(zuheb101625) 

  

20. Create Database and Table: 

    

    CREATE DATABASE IF NOT EXISTS signup; 

    USE signup; 

    CREATE TABLE IF NOT EXISTS login ( 

        id INT AUTO_INCREMENT PRIMARY KEY, 

        name VARCHAR(255) NOT NULL, 

        email VARCHAR(255) NOT NULL, 

        password VARCHAR(255) NOT NULL 

    ); 

    - Ensure the existence of the `signup` database according to the backend logic, and then proceed to create a table named `login` with the necessary fields. 

  

21. Access Frontend Application: 

    - After creating the database table, open a web browser and navigate to http://localhost:3000/ to access the frontend interface of the application. 

    - After entering my name, email, and password to sign up, redirected to the login page. Upon successful login with credentials, gain access to the application's features. 

  

22. View Container Logs: 

     

    sudo docker logs <container_id> 

    - Display logs of a specific Docker container to troubleshoot any issues. 

 

Docker Run (Windows): 

  

1. Install Git for Windows: 

   - Download the Git installer from the official website: (https://git-scm.com/downloads). 

   - Double-click the downloaded `.exe` file to run the installer. 

   - Follow the installation wizard instructions, leaving the default settings unchanged. 

   - Open Command Prompt or Git Bash and verify the installation: 

     git --version 

    

2. Install Docker Desktop: 

   - Ensure that Windows Subsystem for Linux (WSL) 2 is enabled on the system. 

   - Download Docker Desktop Installer.exe from the official Docker website:(https://docs.docker.com/desktop/install/windows-install/). 

   - Run Docker Desktop Installer.exe. 

   - On the Configuration page of the installation wizard, ensure that the "Use WSL 2 instead of Hyper-V" option is selected or deselected based on the preference for the backend. 

   - Follow the instructions on the installation wizard, authorizing the installer if prompted, and proceed with the installation. 

   - Select Close once the installation is complete. 

  

3. Add User to docker-users Group (if necessary): 

   - If the admin account is different from the user account, add the user to the `docker-users` group to grant Docker permissions. 

   - Run "Computer Management" as an administrator. 

   - Navigate to Local Users and Groups > Groups > docker-users, and add the user to the group. 

   - Sign out and sign back in for the changes to take effect. 

  

4. Clone Repository: 

   - Open Command Prompt or Git Bash. 

   - Navigate to the directory where you want to clone the repository:  

     cd path\to\desired\directory 

   - Clone the repository using Git: 

     git clone https://github.com/zuhebahmed88091/Assignment.git 

     

5. Navigate to Project Directory: 

   - Change directory to the cloned project directory: 

     cd Assignment 

  

6. Build and Run Docker Containers: 

   - Open Docker Desktop from the Start menu. 

   - If Docker Desktop is not already running, start it. 

   - Navigate to the project directory using Command Prompt or PowerShell. 

   - Run the following command to build and run Docker containers specified in the `docker-compose.yml` file: 

     docker-compose up -d –build 

 

7. Access MySQL Container: 

   - Open Command Prompt or PowerShell. 

   - Use the following command to enter the MySQL container's bash shell: 

     docker exec -it <container_id> bash 

 

8. Access MySQL Database: 

 

    mysql -u root -p 

    - Log into MySQL server with the root user and prompts for password as per backend configuration(zuheb101625) 

  

9. Create Database and Table: 

    

    CREATE DATABASE IF NOT EXISTS signup; 

    USE signup; 

    CREATE TABLE IF NOT EXISTS login ( 

        id INT AUTO_INCREMENT PRIMARY KEY, 

        name VARCHAR(255) NOT NULL, 

        email VARCHAR(255) NOT NULL, 

        password VARCHAR(255) NOT NULL 

    ); 

    - Ensure the existence of the `signup` database according to the backend logic, and then proceed to create a table named `login` with the necessary fields. 

 

  

10. Access Frontend Application: 

  - After creating the database table, open a web browser and navigate to http://localhost:3000/ to access the frontend interface of the application. 

    - After entering my name, email, and password to sign up, redirected to the login page. Upon successful login with credentials, gain access to the application's features. 

  

11. View Container Logs: 

   - Open Command Prompt or PowerShell. 

   - Use the following command to display logs of a specific Docker container: 

     docker logs <container_id> 

 

Conclusion: 

  

In this comprehensive documentation, I've provided detailed insights into both the frontend and backend components of our application, along with instructions for setting up the development environment using Docker on both Linux and Windows operating systems. 

For the frontend, I elaborated on the key components such as `App`, `Home`, `Login`, and `Signup`, highlighting their functionalities and dependencies. Additionally, I outlined the form validation logic and the entry point for the React application. 

Moving on to the backend, I described the essential aspects of the `server.js` file, including server setup, database connection, and endpoints for user registration and login. I also emphasized the importance of environment configuration for secure database connections. 

Furthermore, I provided Dockerfiles for both frontend and backend, detailing the Docker build process and container setup. Additionally, I explained the Docker Compose file configuration for orchestrating multiple services, such as frontend, backend, and database, within a single environment. 

Lastly, I presented step-by-step instructions for running the application using Docker on Linux and Windows systems, covering everything from installing dependencies to accessing the frontend interface and viewing container logs. 

By following these instructions, developers can seamlessly set up the development environment, build Docker containers, and deploy the application with ease, ensuring efficient development and deployment workflows. 