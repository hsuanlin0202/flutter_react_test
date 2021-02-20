import React, { useEffect, useState } from 'react';
import LayoutMobile from '../components/LayoutMobile';
import Select from 'react-select';
import { couponOptions } from '../mock/data';
import getCoupon from '../api/getCoupon';
import TextField from '../components/Widgets/TextField';
import { nameValidate, emailValidate, phoneValidate } from '../functions/validations';
import Button from '../components/Widgets/Button';
const acctId = 346611;
export default function DriverCare() {
    // const color="blue-700";

    useEffect(() => {
        const fetchUsers = async () => {
            // console.log(req);
            const data = await getCoupon();
            console.log(data);
        };
        fetchUsers();
        flutterCall(1213);
    }, []);

    const color = 'blue-700';


    const [acctid,setTest]=useState();

    function flutterCall(acctid:any){
         setTest(acctid);
    }
    

    const [data, setData] = useState({
        acctId: '',
        idNumber: '',
        userName: '',
        telephone: '',
        cellphone: '',
        email: '',
        couponCode: '',
        couponName: '',
        serviceCode: '',
        service: '',
        driverTimeOfArrival: '',
        carType: '',
        flightNo: '',
        departurePlace: '',
        arrivalPlace: '',
        tripDescription: '',
        message: '',
        fax: '',
        representativeName: '',
        numberOfPassengers: '',
        passengerPhoneNumber: '',
        numberOfLargeLuggage: '',
        numberOfMiddleLuggage: '',
        invoiceReceiveName: '',
        invoiceCategory: '',
        invoiceTitle: '',
        invoiceCompanyNumber: '',
        invoiceAddress: '',
        refundType: '',
    });

    function submit() {
        console.log(data);
    }

    return (
        <LayoutMobile title='長照專車-需求單'>
            {acctId && couponOptions.length > 0 && (
                <div className='w-full p-4'>
                    <div>優惠券</div>
                    <Select
                        id='coupon'
                        instanceId='coupon'
                        inputId='coupon'
                        name='coupon'
                        className='basic-single'
                        classNamePrefix='select'
                        defaultValue={couponOptions[0]}
                        options={couponOptions}
                        isSearchable={false}
                    />
                </div>
            )}

            <div className='w-full p-4'>
                <div>預約人資料 | {acctid}</div>
                <TextField
                    label='姓名'
                    name='name'
                    hint='*'
                    errorText='請輸入正確的姓名'
                    initData=''
                    validate={nameValidate}
                    onChange={(v: string) => setData({ ...data, userName: v })}
                    type='text'
                />

                <TextField
                    label='Email'
                    name='email'
                    hint='*'
                    errorText='請輸入正確的Email'
                    initData=''
                    validate={emailValidate}
                    onChange={(v: string) => setData({ ...data, email: v })}
                    type='email'
                />

                <TextField
                    label='行動電話'
                    name='phone'
                    hint='*'
                    errorText='請輸入正確的行動電話'
                    initData=''
                    validate={phoneValidate}
                    onChange={(v: string) => setData({ ...data, cellphone: v })}
                    type='tel'
                />

                <TextField
                    label='聯絡電話'
                    name='tel'
                    hint=''
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, telephone: v })}
                    type='tel'
                />

                <TextField
                    label='傳真號碼'
                    name='fax'
                    hint=''
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, fax: v })}
                    type='tel'
                />

                <TextField
                    label='出發地點'
                    name='departurePlace'
                    hint='*'
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, departurePlace: v })}
                    type='text'
                />

                <TextField
                    label='到達地點'
                    name='arrivalPlace'
                    hint='*'
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, arrivalPlace: v })}
                    type='text'
                />
                <TextField
                    label='行程概要'
                    name='tripDescription'
                    hint=''
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, tripDescription: v })}
                    type='text'
                />
                <TextField
                    label='其他留言'
                    name='message'
                    hint=''
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, message: v })}
                    type='text'
                />
                <TextField
                    label='行動電話'
                    name='passengerPhoneNumber'
                    hint=''
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, passengerPhoneNumber: v })}
                    type='tel'
                />
                <TextField
                    label='乘客人數'
                    name='numberOfPassengers'
                    hint='*'
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, numberOfPassengers: v })}
                    type='tel'
                />
                <TextField
                    label='大行李件數'
                    name='numberOfLargeLuggage'
                    hint=''
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, numberOfLargeLuggage: v })}
                    type='tel'
                />
                <TextField
                    label='中行李件數'
                    name='numberOfMiddleLuggage'
                    hint=''
                    errorText=''
                    initData=''
                    validate={() => {}}
                    onChange={(v: string) => setData({ ...data, numberOfMiddleLuggage: v })}
                    type='tel'
                />

                <Button onClick={submit} color={color}>
                    立即預約
                </Button>
            </div>
        </LayoutMobile>
    );
}
