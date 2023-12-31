export function formatDate(date: Date) {
  if (!date) return null;
  const options = {
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    month: "2-digit",
    year: "numeric",
  } as Intl.DateTimeFormatOptions;
  return new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
}

export function safeString(value: string, ifNull: string = "-"): string {
  return value ?? ifNull;
}
