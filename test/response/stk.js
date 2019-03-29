module.exports.status = {
	payment_request: {
		payment_channel: 'M-PESA',
		till_identifier: '444555',
		status: 'Success',
		subscriber: {
			first_name: 'Joe',
			last_name: 'Buyer',
			phone: '+254999999999',
			email: 'jbuyer@mail.net',
		},
		amount: {
			currency: 'KES',
			value: 20000,
		},
		metadata: {
			customer_id: '123456789',
			reference: '123456',
			notes: 'Payment for invoice 12345',
		},
		_links: {
			call_back_url: 'https://call_back_to_your_app.your_application.com',
		},
	},
	payment_request_result: {
		id: 'cac95329-9fa5-42f1-a4fc-c08af7b868fb',
		resourceId: 'cdb5f11f-62df-e611-80ee-0aa34a9b2388',
		topic: 'payment_request',
		created_at: '2018-06-20T22:45:12.790Z',
		status: 'Success',
		event: {
			type: 'Payment Request',
			resource: {
				reference: 'KKPPLLMMNN',
				origination_time: '2017-01-20T22:45:12.790Z',
				sender_msisdn: '+2549703119050',
				amount: 3000,
				currency: 'KES',
				till_number: '111222',
				system: 'Lipa Na M-PESA',
				status: 'Received',
				sender_first_name: 'John',
				sender_middle_name: 'O',
				sender_last_name: 'Doe',
			},
			errors: [],
		},
		metadata: {
			customer_id: '123456789',
			reference: '123456',
			notes: 'Payment for invoice 123456',
		},
		_links: {
			self: 'https://api-sandbox.kopokopo.com/payment_requests/cac95329-9fa5-42f1-a4fc-c08af7b868fb',
			payment_request_result: 'https://api-sandbox.kopokopo.com/payment_request_results/cac95329-9fa5-42f1-a4fc-c08af7b868fb',
			resource: 'https://api-sandbox.kopokopo.com/buygoods_transaction/cdb5f11f-62df-e611-80ee-0aa34a9b2388',
		},
	},
}
module.exports.statusPending = {
	payment_request: {
		payment_channel: 'M-PESA',
		till_identifier: '444555',
		status: 'Pending',
		subscriber: {
			first_name: 'Joe',
			last_name: 'Buyer',
			phone: '+254999999999',
			email: 'jbuyer@mail.net',
		},
		amount: {
			currency: 'KES',
			value: 20000,
		},
		metadata: {
			customer_id: '123456789',
			reference: '123456',
			notes: 'Payment for invoice 12345',
		},
		_links: {
			call_back_url: 'https://call_back_to_your_app.your_application.com',
		},
	},
	payment_request_result: null,
}
module.exports.location = {
	Location: 'https://api-sandbox.kopokopo.com/payment_requests/247b1bd8-f5a0-4b71-a898-f62f67b8ae1c',
	'Content-Type': 'application/json',
}
