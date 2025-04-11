var goal 
let diff
let current_value = 0

function getStudyTimeGoal(){
    goal = document.getElementById('studyTimeGoal').value;

    console.log("목표 시간은:", goal);
    document.getElementById('goalText').textContent =
      `오늘의 목표 공부 시간은 ${goal}시간입니다.`
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

function calculateStudyTime(){
  const startTime = document.getElementById('startTimeSelect').value;
  const endTime = document.getElementById('endTimeSelect').value;

  function timeToMinutes(t) {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  }

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  diff = endMinutes - startMinutes;

  if(diff < 0){
    diff += 24 * 60;
  }

  current_value += diff;
  const hours = Math.floor(current_value/60);
  const minutes = current_value % 60;

  document.getElementById('result').textContent =
    `총 공부한 시간은 ${hours}시간 ${minutes}분 입니다.`;
  
}

function UpdateStudyMeter(){
  study_value = current_value / (Number(goal)*60);
  document.getElementById('studyMeter').value = study_value;
}
// 1.목표치를 입력 받기
// 2.공부한 시간을 입력받기-> 00:00~ 00:00 드롭다운 형식으로 시작시간, 마침시간 설정하면 자동으로 계산이 진행
// 3.공부한 시간 / 목표치으로 퍼센티지 만들어서 표에 적용
// 누적치를 적용해야함함