const express = require('express');
const { BookingController } = require('../../controllers');

const router = express.router();

router.post('/', BookingController.createBooking);


module.express = {
    router
}