module.exports = function setB2bData(result) {
	var data = {}

	// json response object
	data.id = result.id
	data.resourceId = result.resourceId
	data.topic = result.topic
	data.createdAt = result.created_at

	// event json
	data.eventType = result.event.type

	// resource json
	data.reference = result.event.resource.reference
	data.originationTime = result.event.resource.origination_time
	data.sendingTill = result.event.resource.sending_till

	data.amount = result.event.resource.amount
	data.currency = result.event.resource.currency
	data.tillNumber = result.event.resource.till_number
	data.system = result.event.resource.system
	data.status = result.event.resource.status

	// _links json 
	data.linkSelf = result._links.self
	data.linkResource = result._links.resource

	return data
}