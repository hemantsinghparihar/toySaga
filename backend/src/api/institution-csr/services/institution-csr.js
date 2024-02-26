'use strict';

/**
 * institution-csr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::institution-csr.institution-csr');
