function formatTime(minutes) {
    const minInHour = 60;
    const hourInDay = 24;

    let hours = 0;
    let days = 0;

    if (minutes >= minInHour) {
        hours = Math.floor(minutes /minInHour);
        minutes = minutes % minInHour;
        
        if (hours >= hourInDay) {
            days = Math.floor(hours /hourInDay);
            hours = hours % hourInDay;
        }
    }

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}