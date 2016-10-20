class RemoveCfOutputs {
  constructor(serverless, options) {
    this.options = options;
    this.serverless = serverless;

    this.hooks = {
      'before:deploy:deploy': this.removeOutputs.bind(this)
    }
  }

  async removeOutputs() {
    if (this.serverless.service.provider.compiledCloudFormationTemplate.Outputs) {
      delete this.serverless.service.provider.compiledCloudFormationTemplate.Outputs
    }
  }
}

module.exports = RemoveCfOutputs;
