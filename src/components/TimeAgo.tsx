import { format, isToday, isYesterday } from "date-fns";

interface TimeAgoProps {
  date: string | number | Date;
  className?: string;
  grouped?: boolean;
}

const TimeAgo = ({ date, className = "", grouped = false }: TimeAgoProps) => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return <span className={`text-zinc-500 dark:text-zinc-400 ${className}`}>Recently</span>;
  }

  const getTimeAgo = (d: Date) => {
    const now = new Date().getTime();
    const past = d.getTime();
    const diff = now - past;

    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const month = 30 * day;
    const year = 365 * day;

    const formatUnit = (value: number, unit: string) =>
      `${value} ${unit}${value > 1 ? "s" : ""} ago`;

    if (diff < minute) return formatUnit(Math.max(1, Math.floor(diff / second)), "sec");
    if (diff < hour) return formatUnit(Math.floor(diff / minute), "min");
    if (diff < day) return formatUnit(Math.floor(diff / hour), "hour");
    if (diff < week) return formatUnit(Math.floor(diff / day), "day");
    if (diff < month) return formatUnit(Math.floor(diff / week), "week");
    if (diff < year) return formatUnit(Math.floor(diff / month), "month");
    return formatUnit(Math.floor(diff / year), "year");
  };

  const formatDateLabel = (d: Date) => {
    if (isToday(d)) return "Today";
    if (isYesterday(d)) return "Yesterday";
    return format(d, "dd MMM yyyy");
  };

  return (
    <span className={`text-zinc-500 dark:text-zinc-400 font-mono text-xs ${className}`}>
      {grouped ? formatDateLabel(parsedDate) : getTimeAgo(parsedDate)}
    </span>
  );
};

export default TimeAgo;

