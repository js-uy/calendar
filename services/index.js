import jsonp from 'jsonp-client';
import moment from 'moment';

export const getEvents = (groups, start, end) => {
  const url = `https://api.meetup.com/2/events?&time=${start.format('x')},${end.format('x')}&sign=false&photo-host=public&group_id=${groups.join(',')}&page=100&only=time,group.name,group.id,event_url&status=upcoming,past&callback=cb`;
  return new Promise((resolve, reject) => {
    jsonp(url, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  })
    .then(data => data.results)
    .then(events => {
      return events.map(event => ({
        start: moment(event.time).format('YYYY-MM-DD'),
        end: moment(event.time).format('YYYY-MM-DD'),
        title: event.group.name,
        data: event
      }));
    });
};
