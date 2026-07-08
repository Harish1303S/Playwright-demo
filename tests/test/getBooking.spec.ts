import {test,expect} from '@playwright/test';
import {BookingAPI} from '../Page/api/BookingAPI';

test('Get Booking',async({request})=>{

    const booking=new BookingAPI(request);

    const response=await booking.getBooking(1);

    expect(response.status()).toBe(200);

});