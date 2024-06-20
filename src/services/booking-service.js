const axios = require('axios')
const ServerConfig = require('../config/server-config')
const db = require('../models');

const { BookingRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

async function createBooking(data) {

    return new Promise((resolve, reject) => {

        const result = db.sequelize.transaction(async function bookingImpl(t) {
            const flight = await axios.get(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
            if (data.noofSeats > flight.data.data.totalSeats) {
                reject(new AppError('Not enough seats available', StatusCodes.BAD_REQUEST));
            }
            resolve(true);
            // return true;
        });

    });

}


module.exports = {
    createBooking
}