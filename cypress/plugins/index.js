/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  addMatchImageSnapshotPlugin(on, config)
  return processConfig(on, config)
}

function processConfig(on, config) {
  const file = config.env.configFile || 'environment'
  return getConfigurationByFile(file).then((file) => {
    return file
  })
}

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}