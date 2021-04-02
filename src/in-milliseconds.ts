export const seconds = (seconds: number): number => seconds * 1000;
export const minutes = (minutes: number): number => minutes * 60 * 1000;
export const hours = (hours: number): number => hours * 60 * 60 * 1000;
export const days = (days: number): number => days * 60 * 60 * 24 * 1000;
export const weeks = (weeks: number): number => weeks * 60 * 60 * 24 * 7 * 1000;
export const months = (months: number, daysInMonth = 30): number => months * 60 * 60 * 24 * daysInMonth * 1000;
export const years = (years: number, daysInYear = 365): number => years * 60 * 60 * 24 * daysInYear * 1000;

export default {
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years
}
