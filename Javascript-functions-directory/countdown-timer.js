function countdown(targetDate) {
    const targetTime = new Date(targetDate).getTime();

    const interval = setInterval(function() {
        const currentTime = new Date().getTime();
        const timeDifference = targetTime - currentTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

        if (timeDifference < 0) {
            clearInterval(interval);
            console.log('Countdown expired!');
        }
    }, 1000);
}