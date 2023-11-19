function padTwoDigits(num: number) {
    return num.toString().padStart(2, "0");
}

export function dateInYyyyMmDdHhMmSs(dateToFormat: Date, dateDiveder: string = "-") {
    let date = new Date(dateToFormat)
    // :::: Exmple Usage ::::
    // The function takes a Date object as a parameter and formats the date as YYYY-MM-DD hh:mm:ss.
    // 👇️ 2023-04-11 16:21:23 (yyyy-mm-dd hh:mm:ss)
    //console.log(dateInYyyyMmDdHhMmSs(new Date()));

    //  👇️️ 2025-05-04 05:24:07 (yyyy-mm-dd hh:mm:ss)
    // console.log(dateInYyyyMmDdHhMmSs(new Date('May 04, 2025 05:24:07')));
    // Date divider
    // 👇️ 01/04/2023 10:20:07 (MM/DD/YYYY hh:mm:ss)
    // console.log(dateInYyyyMmDdHhMmSs(new Date(), "/"));
    return (
        [
            date.getFullYear(),
            padTwoDigits(date.getMonth() + 1),
            padTwoDigits(date.getDate()),
        ].join(dateDiveder) +
        " " +
        [
            padTwoDigits(date.getHours()),
            padTwoDigits(date.getMinutes()),
            padTwoDigits(date.getSeconds()),
        ].join(":")
    );
}