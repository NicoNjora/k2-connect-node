const validate  = require('validate.js')
const errorBuilder = require('../helpers/errorbuilder')

function paymentRequestValidate(opts){
	var constraints = {
		'tillNumber': {
			presence: true,
			isString: true
		},
		'firstName': {
			presence: true,
			isString: true
		},
		'lastName': {
			presence: true,
			isString: true
		},
		'phone': {
			presence: true
		},
		'currency': {
			presence: true,
			isString: true
		},
		'amount': {
			presence: true,
			isString: false
		},
		'callbackUrl': {
			presence: true,
			isString: true,
			url: {
				allowLocal: true
			}
		},
		'accessToken': {
			presence: true,
			isString: true
		}
	}

	return errorBuilder(validate(opts, constraints))
    
}

module.exports = {
	paymentRequestValidate
}