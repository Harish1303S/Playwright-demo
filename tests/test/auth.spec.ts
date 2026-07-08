import {test,expect} from '@playwright/test';
import {AuthAPI} from '../Page/api/AuthAPI';

test('Generate Token',async({request})=>{

    const auth=new AuthAPI(request);

    const response=await auth.createToken();

    expect(response.status()).toBe(200);

    const body=await response.json();

    expect(body.token).toBeTruthy();

});