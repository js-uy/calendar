# [☀️.js.uy](http://js.uy) - [Calendar](https://js-uy-calendar.now.sh)

A simple app that queries meetup.com API for events and shows them on a calendar.

## Usage

The calendar is developed with the Uruguayan JS meetups in mind, that's why when you visit [the webapp](https://js-uy-calendar.now.sh) it defaults to show: ember-montevideo, ReactJS-Uruguay, Angular-MVD, montevideojs, and Front-end-MVD but it can be configured (via URL) to show any meetup group you want.

### URL configuration

| Query String Key | Query String Value                                      |
|------------------|---------------------------------------------------------|
| groups           | The meetup.com group_id (can be present multiple times) |
| year             | The year to show in the calendar                        |
| month            | The month to show in the calendar                       |

### Example

```
https://js-uy-calendar.now.sh/?groups=12641372&groups=20489638&groups=18755240&groups=5844892&groups=18200397&month=5&year=2017
```
