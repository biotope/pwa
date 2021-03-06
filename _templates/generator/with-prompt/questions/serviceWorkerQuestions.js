// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types

module.exports = [
  {
    type: 'path',
    name: 'workerPath',
    message: 'Where should we put the service worker? (Remember the scoping! )',
    when: (answers) => answers.features.includes('Push Notifications') || answers.features.includes('Offline Caching')
  }
];