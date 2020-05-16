
https://www.serverless.com/blog/framework-release-v142/

# serverless-plugin-apigateway-loggroups

THIS WORKS ONLY FOR SLS PACKAGE STAGE!!

Plugin for the Serverless framework that suppliments the APIGateway logGroup properties settings.

The Serverless framework supports AWS APIGateway access log from 1.42.0, but there are some shortcomings:

* The logGroupName is in a fixed format as shown below, which may limit the practical use if the LogGroupName should be further distinguished.
```
LogGroupName: `/aws/api-gateway/${service}-${stage}`, 
```

This plugin add the flexibility to decide the logGroupName by user definition.

The original serverless.yaml contains the following configs.

```
provider:
  logs:
    RestApi:
      roleManagedExternally: true
      level: ERROR
```
To use this plugin, please specify the following

```
plugins:
  - serverless-plugin-apigateway-loggroups
  
custom:
  serverless-plugin-apigateway-loggroups:
    logGroupName: /aws/{namespace}/{the_format_you_like}
    
```
