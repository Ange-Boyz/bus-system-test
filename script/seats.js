document.addEventListener('DOMContentLoaded', () => {
  const seats = document.querySelectorAll('.seat.available');
  const selectedSeats = [];

  seats.forEach(seat => {
    seat.addEventListener('click', () => {
      seat.classList.toggle('selected');
      const seatNumber = seat.dataset.seat;

      if (seat.classList.contains('selected')) {
        selectedSeats.push(seatNumber);
      } else {
        const index = selectedSeats.indexOf(seatNumber);
        if (index > -1) {
          selectedSeats.splice(index, 1);
        }
      }

      updateSummary(selectedSeats);
    });
  });

  function updateSummary(selectedSeats) {
    const summaryList = document.getElementById('selected-seats');
    summaryList.innerHTML = '';
    selectedSeats.forEach(seat => {
      const listItem = document.createElement('li');
      listItem.textContent = seat;
      summaryList.appendChild(listItem);
    });

    const totalPrice = selectedSeats.length * 5000; // Assuming each seat is 5000XAF
    document.getElementById('total-price').textContent = `${totalPrice}XAF`;

    const totalseat = selectedSeats.length;
    document.getElementById('total-seats').textContent = `${totalseat}seat(s)`;
  }


});
