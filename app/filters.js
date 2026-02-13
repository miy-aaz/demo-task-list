//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter



addFilter('statusColour', status => {
    switch (status) {
        case 'Completed': 
            return 'govuk-tag-magenta'
        case 'Incomplete':
            return 'govuk-tag--teal'
        case 'Not yet started':
            return 'govuk-tag--blue'
        default:
            return 'govuk-tag--blue'
    }
})

