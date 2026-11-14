"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Lagos",
});

/** Re-checks the clock a few times a minute; the text only changes when the minute does. */
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

const getTime = () => formatter.format(new Date());

/** The server cannot know the visitor's "now", so it renders no time. */
const getServerTime = () => "";

/** The current time in Lagos, so visitors can tell whether it's a good moment to reach out. */
export function LocalTime({ className = "" }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, getTime, getServerTime);

  return (
    <span className={className}>
      {time && (
        <>
          <time>{time}</time>{" "}
        </>
      )}
      WAT (UTC+1)
    </span>
  );
}
