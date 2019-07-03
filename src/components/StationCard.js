import React, { useState } from "react";

/**
 *
 */
export default function StationCard(props) {
  const { station } = props;
  const {
    station: name,
    address,
    reg_price,
    mid_price,
    pre_price,
    distance,
    lat,
    lng
  } = station;

  const [imgError, setError] = useState(false);
  /**
   *
   */
  const gotoMaps = () => {
    const isAppleMobile = ["iPhone", "iPad"].every(
      e => navigator.platform.indexOf(e) !== -1
    );
    window.open(
      `${
        isAppleMobile ? "maps" : "https"
      }://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`
    );
  };

  return (
    <li onClick={gotoMaps}>
      <div>
        <h2>{name}</h2>
        <img
          alt={name}
          src={`//logo.clearbit.com/${name}.com`}
          style={{ display: imgError && "none" }}
          onError={() => setError(true)}
        />
      </div>
      <div>
        <span>{address}</span>
      </div>
      <div>
        <span>
          <strong>Regular</strong>
          <br />${reg_price}
        </span>
        <span>
          <strong>Mid</strong>
          <br />${mid_price}
        </span>
        <span>
          <strong>Premium</strong>
          <br />${pre_price}
        </span>
      </div>
      <div>
        <span className="proximity">{distance} away</span>
      </div>
    </li>
  );
}
