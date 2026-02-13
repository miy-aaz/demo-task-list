module.exports = router => {

    router.post('/application/edit-evidence/has-evidence', (req, res) => {
        if(req.session.data.evidence.hasEvidence == "Yes") {
            res.redirect('/application/edit-evidence/upload')
        } else {
            res.redirect('/application/edit-evidence/check')
        }
    })



   









}