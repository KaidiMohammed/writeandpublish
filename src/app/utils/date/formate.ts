function padTwoDigits(num: number) {
    return num.toString().padStart(2, "0");
}

export function dateInYyyyMmDdHhMmSs(dateToFormat: Date, dateDiveder: string = "-") {
    let date = new Date(dateToFormat)
    return (
        [
            date.getFullYear(),
            padTwoDigits(date.getMonth() + 1),
            padTwoDigits(date.getDate()),
        ].join(dateDiveder)
    );
}