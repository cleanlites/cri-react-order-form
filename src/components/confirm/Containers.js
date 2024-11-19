import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Containers = ({ getInputValue, setInputValue }) => {
  const potentialValues = useRef(
    [
      {
        label: '4ft Boxes',
        name: 'containers_4ftBox',
        value: getInputValue('containers_4ftBox') ?? null,
      },
      {
        label: '8ft Boxes',
        name: 'containers_8ftBox',
        value: getInputValue('containers_8ftBox') ?? null,
      },
      {
        label: 'U-bend Boxes',
        name: 'containers_uBendBox',
        value: getInputValue('containers_uBendBox') ?? null,
      },
      {
        label: '55 Gallon Drum',
        name: 'containers_55GallonDrums',
        value: getInputValue('containers_55GallonDrums') ?? null,
      },
      {
        label: '5 Gallon Pail',
        name: 'containers_5GallonPail',
        value: getInputValue('containers_5GallonPail') ?? null,
      },
      {
        label: 'Cubic Yard Box',
        name: 'containers_gaylords',
        value: getInputValue('containers_gaylords') ?? null,
      },
      {
        label: 'Small Batt Box',
        name: 'containers_smallBatteryBox',
        value: getInputValue('containers_smallBatteryBox') ?? null,
      },
      {
        label: 'Other 1',
        name: 'containers_other1',
        value: getInputValue('containers_other1') ?? null,
      },
      {
        label: 'Other 2',
        name: 'containers_other2',
        value: getInputValue('containers_other2') ?? null,
      },
    ]
      .filter((c) => c.value)
      .map((c) => (
        <>
          <label>{c.label}</label>
          <input
            readOnly
            type="text"
            name={c.name}
            placeholder="Qty Needed"
            value={c.value}
          />
        </>
      ))
  );
  return (
    <section className="section--containers" data-name="containers">
      {potentialValues.current.length > 0 && (
        <>
          <div className="section--title">Containers</div>
          <div className="container-fluid">
            <div className="row container--content">
              <div className="col-md-3 col-sm-6 px-0">
                {potentialValues.current.slice(0, 3)}
              </div>
              <div className="col-md-3 col-sm-6 px-0">
                {potentialValues.current.slice(3, 6)}
              </div>
              <div className="col-md-3 col-sm-6 px-0">
                {potentialValues.current.slice(6, 8)}
              </div>

              <div className="col-md-3 col-sm-6 px-0">
                {potentialValues.current.slice(8, 10)}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

Containers.propTypes = {};

export default Containers;
