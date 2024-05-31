export const convertSecondstoMinutes = (value: number) => `${value / 60}m`
export const convertSecondstoHours = (value: number) => {
    const result = String(value / 60 / 60).split('.');

    return `${result[0]}h${result[1] ? ` ${result[1]}m` : ''}`;
}