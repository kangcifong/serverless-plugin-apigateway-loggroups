class CustomizeLogGroupProperties {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.provider = this.serverless.getProvider('aws');

    this.hooks = {
      'before:aws:package:finalize:mergeCustomProviderResources': this.customize.bind(this)
    };
  }
  customize(){
    const template = this.serverless.service.provider.compiledCloudFormationTemplate;
    template.Resource['ApiGatewayLogGroup'].Properties.LogGroupName = this.configuration['log-group-name'];
    /*
   https://github.com/serverless/serverless/blob/3910df1ba6a8b39367ce8d51adb90216251be2ba/lib/plugins/aws/lib/naming.js#L310
    */
  }
}

module.expors = CustomizeLogGroupProperties;
