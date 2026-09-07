

router.get('/tours', tourconntroller.getAlltours);
router.get('/toours/:id', tourcontroller.gettourbyid);
router.put('/tours/:id', tourcontroller.updatetour);
router.delete('/tours/:id', tourcontroller.deletetour);
router.get('/tours/search', tourcontroller.searchtour);



module.exports = router;