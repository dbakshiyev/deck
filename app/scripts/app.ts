import { module } from 'angular';

import { CORE_MODULE } from '@spinnaker/core';
import { DOCKER_MODULE } from '@spinnaker/docker';
import { AMAZON_MODULE } from '@spinnaker/amazon';
import { APPENGINE_MODULE } from './modules/appengine/appengine.module';

module('netflix.spinnaker', [
  CORE_MODULE,
  AMAZON_MODULE,
  require('./modules/google/gce.module.js'),
  require('./modules/cloudfoundry/cf.module.js'),
  require('./modules/azure/azure.module.js'),
  require('./modules/kubernetes/kubernetes.module.js'),
  require('./modules/openstack/openstack.module.js'),
  DOCKER_MODULE,
  require('./modules/oracle/oraclebmcs.module.js'),
  APPENGINE_MODULE,
]);
