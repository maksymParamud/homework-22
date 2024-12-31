$(document).ready(function() {
    function updateCountdown() {
        const now = new Date();
        const newYear = new Date('January 1, 2025 00:00:00');
        const timeDifference = newYear - now;

        if (timeDifference <= 0) {
            $('#countdown').html('<h1>З Новим 2025 роком!</h1>');
            $('#ringtone')[0].play();
            return;
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        $('#days').text(`${days} днів`);
        $('#hours').text(`${hours} годин`);
        $('#minutes').text(`${minutes} хвилин`);
        $('#seconds').text(`${seconds} секунд`);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
