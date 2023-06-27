## Health Check
Repository containet contains there applications:
- HealthCheck (ASP.NET Core 5)
- HealthCheckApp (Angular)

### How To Run
- Go to the root folder
- Run: ```docker-compose up```
- Once all the services are provisioned, then access these endpoint:
-- Web API: http://localhost:5000
-- Angular App: http://localhost:4200

### Build The Image and Run individually
#### Web API
- Go to *HealthCheck* folder, where the Dockerfile located
- Run: ```docker build -t my-aspnet .```
- Check the image: ```docker images```
- *my-aspnet* image expected to be there
- Run the image: ```docker run -d --rm --name my-aspnet-container -p 5000:80 my-aspnet```

#### Angular
- Go to *HealthCheckApp* folder, where the Dockerfile located
- Run: ```docker build -t my-angular .```
- Check the image: ```docker images```
- *my-angular* image expected to be there
- Run the image: ```docker run -d --rm --name my-angular-container -p 4200:80 my-angular```



Reference: [ASP.NET Core 5 with Angular](https://www.packtpub.com/product/aspnet-core-5-and-angular-fourth-edition/9781800560338)