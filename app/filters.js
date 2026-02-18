//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('statusColour', status => {
    switch(status) {
        case 'Completed': 
            return 'govuk-tag--green'
        case 'Incomplete':
            return 'govuk-tag--yellow'
        default: 
            return 'govuk-tag--grey'
    }
})



