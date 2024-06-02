const classes = [
    {
        id: 1,
        name: "Йога",
        time: "08:00 - 09:00",
        maxParticipants: 10,
        currentParticipants: 8
    },
    {
        id: 2,
        name: "Кардио",
        time: "09:00 - 10:00",
        maxParticipants: 15,
        currentParticipants: 15
    },
    {
        id: 3,
        name: "Силовая тренировка",
        time: "10:00 - 11:00",
        maxParticipants: 12,
        currentParticipants: 10
    }
];

function renderClasses() {
    const schedule = document.getElementById('schedule');
    schedule.innerHTML = '';

    classes.forEach(classItem => {
        const classCard = document.createElement('div');
        classCard.className = 'card mb-3';
        classCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${classItem.name}</h5>
                <p class="card-text">Время: ${classItem.time}</p>
                <p class="card-text">Участники: ${classItem.currentParticipants} / ${classItem.maxParticipants}</p>
                <button class="btn btn-primary enroll-btn" data-id="${classItem.id}" ${classItem.currentParticipants >= classItem.maxParticipants ? 'disabled' : ''}>Записаться</button>
                <button class="btn btn-danger cancel-btn" data-id="${classItem.id}" ${classItem.currentParticipants === 0 ? 'disabled' : ''}>Отменить запись</button>
            </div>
        `;
        schedule.appendChild(classCard);
    });
}

function enroll(event) {
    const classId = event.target.getAttribute('data-id');
    const classItem = classes.find(cls => cls.id == classId);

    if (classItem.currentParticipants < classItem.maxParticipants) {
        classItem.currentParticipants++;
    }

    renderClasses();
}

function cancelEnrollment(event) {
    const classId = event.target.getAttribute('data-id');
    const classItem = classes.find(cls => cls.id == classId);

    if (classItem.currentParticipants > 0) {
        classItem.currentParticipants--;
    }

    renderClasses();
}

document.addEventListener('DOMContentLoaded', () => {
    renderClasses();

    document.getElementById('schedule').addEventListener('click', (event) => {
        if (event.target.classList.contains('enroll-btn')) {
            enroll(event);
        } else if (event.target.classList.contains('cancel-btn')) {
            cancelEnrollment(event);
        }
    });
});
