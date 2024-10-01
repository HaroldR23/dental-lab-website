import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cellRender } from "../cellRender";
import type { Dayjs } from 'dayjs';
import { AppointmentModel } from '../../../../../models/AppointmentModel';


describe('cellRender', () => {
  const mockCurrent: Dayjs = {
    format: jest.fn().mockReturnValue('01/01/2023'),
  } as unknown as Dayjs;

  const mockInfoDate = {
    type: 'date',
    originNode: <div>Original Node</div>,
  };

  const mockInfoOther = {
    type: 'other',
    originNode: <div>Original Node</div>,
  };

  const mockAppointments: Record<string, AppointmentModel[]> = {
    '01/01/2023': [
      { id: '1', time: '10:00 AM' } as AppointmentModel,
      { id: '2', time: '11:00 AM' } as AppointmentModel,
    ],
  };

  it('should render appointments for the given date', () => {
    const { container } = render(
      cellRender(mockCurrent, mockInfoDate, mockAppointments) as React.ReactElement
    );
    expect(container.querySelector('.listContainer')).toBeInTheDocument();
    expect(container.querySelectorAll('.listContainer div')).toHaveLength(2);
    expect(container).toHaveTextContent('10:00 AM');
    expect(container).toHaveTextContent('11:00 AM');
  });

  it('should return the original node for non-date types', () => {
    const { container } = render(
      cellRender(mockCurrent, mockInfoOther, mockAppointments) as React.ReactElement
    );
    expect(container).toHaveTextContent('Original Node');
  });
});
