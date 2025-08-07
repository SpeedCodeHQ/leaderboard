export function format(timeSeconds: number): string {
  const days = Math.floor(timeSeconds / 86400);
  const hours = Math.floor((timeSeconds % 86400) / 3600);
  const minutes = Math.floor((timeSeconds % 3600) / 60);
  const seconds = Math.floor(timeSeconds % 60);

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}

export function timeAgo(timestamp: number) {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const now = Date.now();
  const diff = timestamp - now; // positive if in the future

  const seconds = Math.round(diff / 1000);
  const minutes = Math.round(diff / (1000 * 60));
  const hours = Math.round(diff / (1000 * 60 * 60));
  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  const months = Math.round(diff / (1000 * 60 * 60 * 24 * 30));
  const years = Math.round(diff / (1000 * 60 * 60 * 24 * 365));

  if (Math.abs(years) >= 1) return rtf.format(years, 'year');
  if (Math.abs(months) >= 1) return rtf.format(months, 'month');
  if (Math.abs(days) >= 1) return rtf.format(days, 'day');
  if (Math.abs(hours) >= 1) return rtf.format(hours, 'hour');
  if (Math.abs(minutes) >= 1) return rtf.format(minutes, 'minute');
  return rtf.format(seconds, 'second');
}