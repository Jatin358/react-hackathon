import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountDown } from './useCountDown';

const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Offer Expired!!!</span>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter text-center">
        <p className="countdown-link">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 2} />
          <p>:</p>
          <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
          <p>:</p>
          <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </p>
      </div>
    );
  };
  

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;