import React, { useState, useEffect } from "react";
import getGasStations from "./../services/getGasStations";
import StationCard from "./StationCard";
import Prompt from "./Prompt";

/**
 * Displays a list of nearest gas stations
 * @param {*} props
 */
const StationList = props => {
  const { selectedDistance } = props;

  // loading state
  const [isLoading, setIsLoading] = useState(false);
  // station data state
  const [stations, setStations] = useState(null);
  // error state
  const [error, setError] = useState(null);

  // scroll index state
  const [scrollIndex, setScrollIndex] = useState(12);
  useEffect(() => {
    if (stations) {
      window.addEventListener("scroll", () => {
        if (
          document.querySelector(".list").getBoundingClientRect().bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
        ) {
          setScrollIndex(index =>
            index + 12 <= stations.stations.length
              ? index + 12
              : index + (stations.stations.length - index)
          );
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stations]);

  /**
   * render to retrieve new gas stations only on load
   */
  async function getStations(ev) {
    if ((!ev.key || ev.key === "enter") && !isLoading) {
      setIsLoading(true);
      setScrollIndex(12);
      try {
        setStations(await getGasStations(selectedDistance));
      } catch (err) {
        setError(err.message);
        document.getElementById("root").style.filter = "grayscale(1)";
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      <Prompt isLoading={isLoading} hasStations={!!stations} error={error} />
      <ul className="list" stations={stations}>
        {stations &&
          !isLoading &&
          stations.stations
            .slice(0, scrollIndex)
            .map(station => <StationCard station={station} key={station.id} />)}
        {isLoading &&
          [...Array(12)].map((e, i) => <li className="pulse-item" key={i} />)}
      </ul>
      <button autoFocus onClick={getStations} onKeyPress={getStations}>
        Find Near Me
      </button>
    </>
  );
};

export default StationList;
