var should = require('should')

var k2, pay

var TEST_ACCOUNT = {
	clientId: '1',
	clientSecret: '10af7ad062a21d9c841877f87b7dec3dbe51aeb3'
}

describe('PayService', function () {
	this.timeout(5000)

	before(function () {
		k2 = require('../lib')(TEST_ACCOUNT)
		pay = k2.PayService
	})

	describe('Pay Recipient validation', function () {
		var opts = {}

		it('#addPayRecipient() cannot be empty', function () {
			return pay.addPayRecipient(opts).should.be.rejected()
		})

		it('#addPayRecipient() has to have access_token', function () {
			opts.type = 'mobile_wallet'
			opts.firstName = 'Jane'
			opts.lastName = 'Doe'
			opts.email = 'janedoe@example.com'
			opts.phone = '07012345678'
			opts.network = 'Safaricom'

			return pay.addPayRecipient(opts).should.be.rejected()
		})
    
	})

	describe('Pay validation', function () {
		var opts = {}

		it('#sendPay() cannot be empty', function () {
			return pay.sendPay(opts).should.be.rejected()
		})

		it('#sendPay() has to have access_token', function () {
			var opts = {}
			opts.destination = 'my_destination'
			opts.currency = 'KES'
			opts.amount = 20
			opts.callback_url = 'https://your-call-bak.yourapplication.com/payment_result'  

			return pay.sendPay(opts).should.be.rejected()
		})
    
	})

	it('#sendPay()', function (done) {
		var opts = {}

		opts.destination = 'my_destination'
		opts.currency = 'KES'
		opts.amount = 20
		opts.callback_url = 'https://your-call-bak.yourapplication.com/payment_result'  
		opts.access_token= 'hardToGuessKey'

		pay.sendPay(opts)
			.then(function (response) {
				// pays.should.have.property('resourceId');
				done()
			})
			.catch(function (error) {
				console.error(error)
				done()
			})
	})

	it('#addPayRecipient()', function (done) {
		var opts = {}

		opts.type = 'mobile_wallet'
		opts.firstName = 'Jane'
		opts.lastName = 'Doe'
		opts.email = 'janedoe@example.com'
		opts.phone = '07012345678'
		opts.network = 'Safaricom'
		opts.access_token= 'hardToGuessKey'
                                
		pay.addPayRecipient(opts)
			.then(function (response) {
				// pays.should.have.property('resourceId');
				done()
			})
			.catch(function (error) {
				console.error(error)
				done()
			})
	})

	it('#payStatus()', function (done) {
		var opts = {}

		opts.access_token= 'hardToGuessKey'

		pay.payStatus(opts)
			.then(function (response) {
				// response.should.have.property('id');
				done()
			})
			.catch(function (error) {
				console.error(error)
				done()
			})
	})
})
