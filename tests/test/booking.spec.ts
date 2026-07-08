import {test,expect} from '@playwright/test';
import {BookingAPI} from '../Page/api/BookingAPI';
import {bookingData} from '../utils/TestData';

test('Create Booking',async({request})=>{

    const booking=new BookingAPI(request);

    const response=await booking.createBooking(bookingData);

    expect(response.status()).toBe(200);

    const body=await response.json();

    expect(body.booking.firstname).toBe("Harish");

});
//