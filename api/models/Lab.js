/**
* Lab.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    thumbnail: {
      type: 'string'
    },
    details: {
      type: 'string'
    },
    rfid: {
      model: 'rfids'
    }
  }
};
