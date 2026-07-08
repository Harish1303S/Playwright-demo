import { APIRequestContext } from '@playwright/test';

export class BookingAPI{

    constructor(private request:APIRequestContext){}

    async getBookings(){

        return await this.request.get('/booking');

    }

    async getBooking(id:number){

        return await this.request.get(`/booking/${id}`);

    }

    async createBooking(data:any){

        return await this.request.post('/booking',{

            data

        });

    }

}