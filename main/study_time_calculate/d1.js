var goal;
let diff;

function getStudyTimeGoal() {
    goal = document.getElementById('studyTimeGoal').value;
    console.log("목표 시간은:", goal);
    document.getElementById('goalText').textContent =
        `오늘의 목표 공부 시간은 ${goal}시간입니다.`;
}

function fillTimeOptions(selectElement) {
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const h = hour.toString().padStart(2, '0');
            const m = minute.toString().padStart(2, '0');
            const time = `${h}:${m}`;

            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            selectElement.appendChild(option);
        }
    }
}

const startSelect = document.getElementById('startTimeSelect');
const endSelect = document.getElementById('endTimeSelect');

fillTimeOptions(startSelect);
fillTimeOptions(endSelect);

function calculateStudyTime() {
    const startTime = document.getElementById('startTimeSelect').value;
    const endTime = document.getElementById('endTimeSelect').value;

    function timeToMinutes(t) {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
    }

    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);

    diff = endMinutes - startMinutes;

    if (diff < 0) {
        diff += 24 * 60;
    }

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    document.getElementById('result').textContent =
        `총 공부한 시간은 ${hours}시간 ${minutes}분 입니다.`;
}

function UpdateStudyProgress() {
    const study_value = diff / (Number(goal) * 60) * 100;
    document.getElementById('studyProgress').value = study_value;
}
