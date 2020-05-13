'use strict';

class CustomizeLogGroupProperties {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.provider = this.serverless.getProvider('aws');
    this.config = serverless.service.custom['serverless-plugin-apigateway-loggroups'];
    if (!this.config)
      throw new Error('serverless-plugin-apigateway-loggroups should be added in cutom field');
    this.hooks = {
      'before:aws:package:finalize:mergeCustomProviderResources': this.customize.bind(this)
    };
  }
  customize(){
    const template = this.serverless.service.provider.compiledCloudFormationTemplate;
    template.Resources['ApiGatewayLogGroup'].Properties.LogGroupName = this.config['logGroupName'];
    /*
   https://github.com/serverless/serverless/blob/3910df1ba6a8b39367ce8d51adb90216251be2ba/lib/plugins/aws/lib/naming.js#L310
    */
  }
}

module.exports = CustomizeLogGroupProperties;
