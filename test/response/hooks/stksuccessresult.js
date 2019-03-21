module.exports = {
	'id': 'cac95329-9fa5-42f1-a4fc-c08af7b868fb',
	'resourceId': 'cdb5f11f-62df-e611-80ee-0aa34a9b2388',
	'topic': 'payment_request',
	'created_at': '2018-06-20T22:45:12.790Z',
	'status': 'Success',
	'event': {
		'type': 'Payment Request',
		'resource': {
			'reference': 'KKPPLLMMNN',
			'origination_time': '2017-01-20T22:45:12.790Z',
			'sender_msisdn': '+2549703119050',
			'amount': 20000,
			'currency': 'KES',
			'till_number': '111222',
			'system': 'Lipa Na M-PESA',
			'status': 'Received',
			'sender_first_name': 'Nicollet',
			'sender_middle_name': 'N',
			'sender_last_name': 'Njora'
		},
		'errors': []
	},
	'metadata': {
		'customer_id': '123456789',
		'reference': '123456',
		'notes': 'Payment for invoice 123456'
	},
	'_links': {
		'self': 'https://api-sandbox.kopokopo.com/payment_request_results/cac95329-9fa5-42f1-a4fc-c08af7b868fb',
		'payment_request': 'https://api-sandbox.kopokopo.com/payment_requests/cac95329-9fa5-42f1-a4fc-c08af7b868fb',
		'resource': 'https://api-sandbox.kopokopo.com/buygoods_transaction/cdb5f11f-62df-e611-80ee-0aa34a9b2388'
	}
}