# Calendar
This is a calendar page, where user can create events he/she is planning and add it to the calendar cells to see the week schedule. It consists of 5 days from Monday till Friday and 9 time slots from 10:00 till 18:00. Each event can be planned only for a particular day and hour so it uses only one cell. The calendar can be filtered by the participants of the events. In order to create an event, user must enter the name of the event, at least one participant, one day and one time slot - a particular hour. Also, only one event can be planned to the particular time slot, so user cannot use one cell for several events. 

The calendar has a store of the time slots and members which could be participants. 
In order to push you team members to the calendar, change names in the array called "members" in the "store" object in the store.js file. 

The page is divided into 2 main subpages - "calendarWindow" and "createWindow". The first one has code for the main page with the calendar interface, the second one has code for another page where user create an event. Both of them has its own local storage for storing common data for a particular window. The first consists of filtered members, the second - filtered memebers and chosen cell id where the event is going to be added. 

Also, it is possible to move cells and in therefore change time slots for the events.
