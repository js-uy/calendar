import jsonp from 'jsonp-client';
import moment from 'moment';

export const getEvents = groups => {
  const urls = groups.map(
    (group, index) =>
      `https://api.meetup.com/${group}/events?&sign=false&photo-host=public&page=1&callback=cb${index}`
  );
  return new Promise((resolve, reject) => {
    jsonp(urls, (err, ...rest) => {
      if (err) reject(err);
      else resolve(rest.map(r => r.data));
    });
  })
    .then(results => results.map(result => result[0]))
    .then(events => {
      return events.map(event => ({
        start: moment(event.time).format('YYYY-MM-DD'),
        end: moment(event.time).format('YYYY-MM-DD'),
        title: event.group.name,
        data: event
      }));
    });
};
