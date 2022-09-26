import { isSameDay, format } from 'date-fns';

import { OpeningSchedule } from 'types/store';

export const isClosedStore = (schedule: OpeningSchedule): boolean => {
  const { closed_days } = schedule;

  const specificallyClosedToday = closed_days.some(day => {
    const formattedToday = format(new Date(), 'yyyy-MM-dd');
    const dataDay = new Date(day).toLocaleString('en-US', {
      timeZone: 'America/Araguaina',
    });
    const today = new Date(formattedToday).toLocaleString('en-US', {
      timeZone: 'America/Araguaina',
    });

    return isSameDay(new Date(dataDay), new Date(today));
  });

  if (specificallyClosedToday) {
    return true;
  }

  return false;
};
