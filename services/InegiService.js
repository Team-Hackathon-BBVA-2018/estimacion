'use strict';

const debug = require('debug')('estimacion:services:InegiService');
const request = require('request-promise');
const querystring = require('querystring');

module.exports = {
    searchByName: function(pymeName, callback) {
        const inegiBaseUri = `http://www.beta.inegi.org.mx/app/api/denue/v1/consulta/nombre`
        const inegiToken = `6ec1b6d5-e8df-44de-ab98-5c96be57ba66`;
        let searchName = pymeName.replace('.',' ').replace(',',' ');
        searchName = querystring.escape(searchName);
        let inegiUri = `${inegiBaseUri}/${searchName}/00/1/20/${inegiToken}`;
        request.get(inegiUri, {json:true, insecure: true}).then((inegiResponse)=>{
            let response = JSON.parse(JSON.stringify(inegiResponse));
            console.log(response);
            callback(response);
        }).catch((err)=>{
            debug(`ERROR: ${err}`);
            callback(err);
        });
    }
};