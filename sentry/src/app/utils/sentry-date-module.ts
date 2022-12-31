export class SentryDateModule {
    public static readonly LOCALE: string = 'en-GB';
    public static readonly DATE_FORMATS = {
        parse: {
            // you can let the user enter any type of date with any format
            // and the date adapter will reformae it to the format you specify in this attribute
            dateInput: 'EEE, MMM dd yyyy',
        },
        display: {
            // input textbox
            // Wed, Aug 06 2014
            dateInput: 'EEE, MMM dd yyyy',

            // month year top left
            // 2014 Aug
            monthYearLabel: 'yyyy MMMM',

            // input textbox accessibilty
            // Wednesday, August 6, 2014
            dateA11yLabel: 'DDDD',

            // month year top left accessibility
            // 2014 August
            monthYearA11yLabel: 'yyyy MMMM',
        },
    };
}
