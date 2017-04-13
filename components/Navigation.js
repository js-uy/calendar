import React from 'react';
import Link from 'next/link';
import moment from 'moment';

export default ({ month, year, groups }) => {
  const date = moment({ month, year, day: 1 });
  const previous = date.clone().subtract(1, 'month');
  const next = date.clone().add(1, 'month');

  return (
    <div className="container">
      <Link
        href={{
          pathname: '/',
          query: { groups, month: previous.month() + 1, year: previous.year() }
        }}
      >
        <a className="link">Previous</a>
      </Link>
      <h1>{date.format('MMM, YYYY')}</h1>
      <Link
        href={{
          pathname: '/',
          query: { groups, month: next.month() + 1, year: next.year() }
        }}
      >
        <a className="link">Next</a>
      </Link>
      <style jsx>
        {
          `
          .container {
            display: flex;
            margin: 20px 0;
          }

          .container .link {
            flex: 1;
            padding-left: 20px;
          }

          .container .link:last-child {
            text-align: right;
            padding-right: 20px;
          }

          h1 {
            margin: 0;
          }
        `
        }
      </style>
    </div>
  );
};
