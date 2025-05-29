export const options = {
    timeZone: "Europe/Rome",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  } as Intl.DateTimeFormatOptions;
  
  export function getTimeInItaly(): string {
    const date = new Date();
    const hour = date.toLocaleString("en-US", {
      timeZone: "Europe/Rome",
      hour: "numeric",
      hour12: false,
    });
  
    const minute = date.toLocaleString("en-US", {
      timeZone: "Europe/Rome",
      minute: "numeric",
      hour12: false,
    });
  
    return `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
  }
  
  export function getIsSleeping(): boolean {
    const hour = parseInt(
      new Date().toLocaleString("en-US", {
        timeZone: "Europe/Rome",
        hour: "numeric",
        hour12: false,
      }),
      10
    );
  
    return hour >= 3 && hour < 10;
  }
  
  export function getFormattedDate(): string {
    const date = new Date();
    return new Intl.DateTimeFormat("it-IT", options).format(date);
  }
  