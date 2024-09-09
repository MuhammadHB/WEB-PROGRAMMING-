Devops

So , first of all my project it’s about 
RESIZE AND UPLOAD IMAGE TO PC
Overview:

My web application offers a powerful solution for image compression and storage optimization, designed to meet the growing needs of large organizations. With a focus on minimizing file sizes while preserving image quality, this application provides significant benefits in terms of database efficiency and server performance.
This project serves as a valuable tool for universities, schools, governments, and large corporations that manage large volumes of images daily. It enables these organizations to save money by reducing storage costs while increasing the capacity to store more images. As a result, they can optimize their resources, allowing their servers to run faster and more efficiently.



After I install or register on the tools that I needed in this subject which:
1-github + github desktop 
2-git
3-docker 
4-server(RENDER)

 what is GitHub : GitHub is a web-based platform that uses Git, a version control system, to help developers manage and collaborate on code. It provides a range of tools for version control, issue tracking, project management, and collaboration, making it easier for teams to work together on software development projects.

what is git : Git is a distributed version control system used to track changes in source code during software development. It allows multiple developers to work on a project simultaneously without interfering with each other’s work. Git is known for its speed, efficiency, and ability to handle projects of all sizes, from small to very large.

what is docker : Docker is an open-source platform that automates the deployment, scaling, and management of applications by using containerization. Containers are lightweight, portable, and self-sufficient units that bundle an application along with all its dependencies, libraries, and configuration files, enabling the application to run consistently across different environments.

What is render : Render.com is a cloud platform that provides developers with tools and services to deploy, manage, and scale web applications, APIs, static sites, background workers, and other web services. Render aims to simplify the deployment process by automating many of the tasks involved in managing infrastructure, so developers can focus more on building their applications rather than dealing with the complexities of server management.


To connect GitHub to git have many steps to write it on the terminal like clone the github repo and make login to my github account 
Set up git my info to login  on git bash:

git config --global user.name "MuhammadHB"

git config --global user.email "oop955005@gmail.com"

after that i change directory (cd)
to : cd/oneDrive/Documents/Github/


and after that clone the reop from Github to my PC :

git clone https://github.com/your-username/your-repository.git

For me : 
git clone 
https://github.com/MuhammadHB/WEB-PROGRAMMING.git

after that change directory (cd)
to:

cd WEB-PROGRAMMING/

after that write this command to oper VS code :
code .





in VS code in termenal 
 Add comment on any file to try after u make the comments :

git add .

git commit -m ‘any commit’

-Push the code to the main branch:

git push origin main


 After I done this steps I go to my GitHub repository in the browser, and I should see my files uploaded if not try to fetch and pull first from GitHub desktop 

After make the connection between them I create empty folder on my pc named DevOp and i add the folder to my GitHub by drag and drop then i fetch and pull origin from GitHub desktop to make folder appear on github and in my directory after that i go to my terminal on vscode and change directory (cd) to my empty folder DevOp i add many files :
1- index.html
git add index.html 
2-styles.css
git add styles.css
3-script.js
git add script.js
4-Dockerfile 
git add Dockerfile

After that :
git add . 
And make commit :
git commit -m ‘any commit’
And push it :
git push origin main 


Now i have folder in GitHub and i add many files inside it by use git in terminal so now i have i full folder in GitHub after i push and also i (fetch and pull origin from GitHub desktop also )

So , now i has dockerfile inside my folder DevOp and now I change directory (cd) to DevOp 

The path like this 
C:\Users\M\oneDrive\Documents\Github\WEB-PROGAMMING

After cd will be like this 

C:\Users\M\oneDrive\Documents\Github\WEB-PROGAMMING\DevOp


And also i create in docker hub new repo named: muhammadbunyarit
After that 

I build docker image by typing specific commands line in DevOp directory
C:\Users\M\oneDrive\Documents\Github\WEB-PROGAMMING\DevOp
 :

1- Docker build -t muhammadbunyarit/image-uploader:v1 .

Wait until everything it’s installed 

So , after that i push the image into docker hub repo  :

2-docker push muhammadbunyarit/image-uploader:v1

After that set the port for the project:

3- Docker run -d —name image-uploaderapp -p 8012:80 
muhammadbunyarit/image-uploader:v1

so, I go to docker hub and I pull the image of my project that I want it from docker desktop 

Now everything good if i go to my docker desktop I will see image was created and container also was created so i can run my project on port 8012 in docker desktop 

To deploy docker image from docker hub that i already created a repo and push the images inside it :
I use RENDER.COM to deploy my docker image into public server first of all 
I sign in with my GitHub account and after that I go to dashboard option and after that go to +new option click on it and select Web service and after that it’s have many options github and existing image (for docker)and other so for me I select the existing image and i put the URL of docker hub repo click on connect option to connect with the repo on docker hub that I already created and after that I select the free plan to deploy my docker image if i want more features I can upgrade the plan but I have to pay so after that I scroll down to CREATE WEB SERVICE after that it’s will start to building the project it’s actually take around 20-30 minutes to finish building so after it’s finished building it’s give me the LINK on the server that I deploy my project on it 
The link:
https://image-uploader-v1.onrender.com
Now my final project already deployed on real server 

Thanks for attention 

Name: Muhammad Bunyarit 
ID: 651431005
Advisor: Kholed Langsari
