const express=require('express');
const router =express.Router();
const controller =require('./controller');

router.get('/package',controller.getPackage);
router.post('/createPackage',controller.addPackage);
router.post('/updatePackage',controller.updatePackage);
router.post('/deletePackage',controller.deletePackage);

module.exports = router;