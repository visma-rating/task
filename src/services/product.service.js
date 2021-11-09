const data = require('../payload.json');
var translator = require('translate-json-object')(); 

translator.init({
  googleApiKey: 'api_key',
});



// translator.translate(example, 'es')
//     .then(function(data) {
//       console.log(data);
//     }).catch(function(err) {
//       console.log('error ', err)
//     });
    
const get = function(attr, value){
    return getAll().filter(product => hasAttribute(product, attr) && containsValue(product, attr, value));
}

const getAll = function(){
    return data;
}

const containsValue = function(product, attribute, value){
    return (product[attribute] == value) || isMember(product[attribute], value);
}

const isMember = function(attribute, value){
    return attribute.toLowerCase().includes(value.toLowerCase());
}

const hasAttribute  = function(product, attribute){
    if(product.hasOwnProperty(attribute)){
        return true;    
   }
    console.log(`GET failed for product: ${JSON.stringify(product, null, 2)}, invalid attr: ${attribute} in data`);
    return false;
}

module.exports = {
    get,
    getAll
};