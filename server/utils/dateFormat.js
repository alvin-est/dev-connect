// Helper function to pad numbers
const pad = (number) => (number < 10 ? `0${number}` : number);

// Array for month abbreviations
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateFormat(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    // Extract components from the date
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    // Format the date string
    return `${month} ${day}, ${year}`;
}

module.exports = dateFormat;