
type Json={
    myJson:any;
}
function log({myJson}:Json) {
    // if (myJson.ReturnCode == 0) {
    //     console.log(myJson.Data);
    // } else {
    //     console.log(myJson.ReturnMessage + '(' + myJson.ReturnCode + ')');
    // }
}


export default function getCoupon() {
    const request={
        "Version":"1.0",
        "MessageType":"DriverReserve",
        "LastUpdatedDateTime":"20210219131027",
        "DriverReserve":{
           "AcctId":"364411",
           "IdNumber":"",
           "UserName":"數據中心測試",
           "Telephone":"0987987987",
           "Cellphone":"",
           "Email":"test@gmail.com",
           "CouponCode":"",
           "CouponName":"",
           "ServiceCode":"DRIVER_B",
           "Service":"商務專車",
           "DriverTimeOfArrival":"20210108131027",
           "CarType":"國產高級轎車",
           "FlightNo":"",
           "DeparturePlace":"出發地點",
           "ArrivalPlace":"抵達地點",
           "TripDescription":"行程說明",
           "Message":"其他留言",
           "Fax":"",
           "RepresentativeName":"代表人姓名",
           "NumberOfPassengers":"1",
           "PassengerPhoneNumber":"1",
           "NumberOfLargeLuggage":"1",
           "NumberOfMiddleLuggage":"1",
           "InvoiceReceiveName":"",
           "InvoiceCategory":"1",
           "InvoiceTitle":"測試",
           "InvoiceCompanyNumber":"",
           "InvoiceAddress":"",
           "RefundType":""
        }
     };
    return fetch('https://api-test.car-plus.com.tw:4443/restv2/app/driverReserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
    })
        .then((response) => response.json())
        .then((myJson) => {
            log(myJson);

            return myJson;
        });
}
