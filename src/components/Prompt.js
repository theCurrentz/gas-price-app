import React from "react";

/**
 * Displays prompt for user
 * @param {*} props - react props
 * @returns {JSX} - prompt component
 */
export default function Prompt(props) {
  const { isLoading, hasStations, error } = props;
  return (
    (!isLoading && !hasStations && !error && (
      <section>Click the button below to find gas stations near you</section>
    )) ||
    (error && (
      <section>
        <span role="img" aria-label="error">
          📡
        </span>{" "}
        Error finding stations | {error}
      </section>
    ))
  );
}
