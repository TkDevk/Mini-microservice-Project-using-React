<h1 align="center"> Mini-microservice-Project-using-React</h1>
<div align="center" >
 <a  href="http://blog-s3-tk.s3-website-us-east-1.amazonaws.com/">
        Preview Site
    </a>
</div> 
<h1>Welcome</h1>

It's still in process but i was finally able to full deploy it in AWS services.

The Client Front end part is hosted in S3, it's deploy as static app.

For the post and comments microservices i use Lambda serverles and then set Api rest as triggers.

<h2>How to use it</h2>

In the Web home page you will see a navbar in the top side (is not responsive yet), in the top right part there is button that you can click and it will show you a front where you can create your post.

# !IMPORTANT

Reload the page to see your post, same goes for the comments, once you submit your comment pls reload the page and you will see it.

If you want to know more about the project inside of each carpet is .md document, there you can check the process and steps.

# LOGBOOK

`chmod 400 "bogota-devk-wo.pem"`

`ssh -i "bogota-devk-wo.pem" ubuntu@ec2-54-160-168-202.compute-1.amazonaws.com`

`rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/your-key.pem" \
. ubuntu@ip-address:~/app`


`rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/Downloads/.ssh/bogota-devk-wo.pem" \
. ubuntu@ec2-54-160-168-202.compute-1.amazonaws.com:~/app`



Install dependencies
`npm i`


Kubeadm is a tool that helps us ``bootstrap`` a Kubernetes cluster. Kubelet is an agent that runs on each node and communicates with the master node. Kubectl is a command-line tool that allows us to interact with the cluster.



https://medium.com/@ajitfawade/how-to-deploy-a-microservices-application-on-aws-ec2-using-kubernetes-a-step-by-step-guide-63b845544d39

t2.medium instances:
https://aws.amazon.com/es/ec2/instance-types/t2/

https://www.educative.io/answers/what-is-kubernetes-cluster-what-are-worker-and-master-nodes

https://platzi.com/discusiones/1787-spa-javascript/87515-strongayudastrong-el-comando-npm-run-build-no-me-genera-el-archivo-indexhtml-dentro-de-la-carpeta-dist-me-genera-la-carpeta-dist-2/

https://dev.to/adetutu/setting-up-a-react-project-with-vite-a-step-by-step-guide-329k

https://www.digitalocean.com/community/tutorials/nodejs-serving-static-files-in-express


- The concept of Terminating an EC2 instance is completely different from stopping them. Terminating is when you don’t need an instance and want to delete it completely from your AWS infrastructure which cannot be recovered. However, if you have an AWS snapshot, you can create an AWS AMI that will enable you to restore an instance to the date when you created the snapshot.

https://www.nops.io/how-to-delete-terminated-ec2-instances-in-aws/#:~:text=To%20delete%20terminated%20EC2%20Instances%2C%20locate%20the%20instance%20you%20want,Click%20%E2%80%9CYes%E2%80%9D%20to%20confirm.

`it's more complicated than i thought` :c


# How to deploy Express server on AWS lambda

-install dependencies
`npm i serverless-http`

-import serverless

`const serverless = require("serverless-http");`

-I need to add a handler at the bottom to export  my app wrapped in the serverless function

`module.exports.handler=serverless(app);`

-Remove app-listen because it won't work

```js
/*
app.listen(4000,()=>{
    console.log('Listening at post 4000');
})
*/
```
- The base route won't work when the app it's deployed in Lambda Function

- Go to Lambda web service
https://aws.amazon.com/lambda/

- Create Function

- Upload zip file of my code

-Once is submitted i need to ad a trigger

-Trigger Api Gateway

-Create Rest Api > Create Resource > Configure as Proxy request

-Proxy resource it will forward the request to my lambda function

- Proxy resources handle requests to all sub-resources. To create a proxy resource use a path parameter that ends with a plus sign, for example {proxy+}.

`Proxy resources handle requests to all sub-resources. To create a proxy resource use a path parameter that ends with a plus sign, for example {proxy+}.`

https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html

#Bucket policy

The bucket policy, written in JSON, provides access to the objects stored in the bucket. Bucket policies don't apply to objects owned by other accounts.


Static website hosting

-Enable


- Allows Permissions

Bucket Policy

