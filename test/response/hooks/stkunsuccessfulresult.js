module.exports = {
	id: 'cac95329-9fa5-42f1-a4fc-c08af7b868fb',
	resourceId: null,
	topic: 'payment_request',
	created_at: '2018-06-20T22:45:12.790Z',
	status: 'Failed',
	event: {
		type: 'Payment Request',
		resource: null,
		errors: [
			{
				code: '501',
				description: 'Insufficient funds',
			},
		],
	},
	metadata: {
		customer_id: '123456789',
		reference: '123456',
		notes: 'Payment for invoice 123456',
	},
	_links: {
		self: 'https://api-sandbox.kopokopo.com/payment_request_results/cac95329-9fa5-42f1-a4fc-c08af7b868fb',
		payment_request: 'https://api-sandbox.kopokopo.com/payment_requests/cac95329-9fa5-42f1-a4fc-c08af7b868fb',
	},
}
