const members = ["유민", "혁규", "시온"];
const hours = [14, 15, 16, 17, 18, 19];
const availability = {};
let isDragging = false;

// 초기화
members.forEach((member) => {
  availability[member] = {};
  hours.forEach((hour) => {
    availability[member][hour] = false;
  });
});

// 시간 블록 생성
document.querySelectorAll(".memberBlock").forEach((block) => {
  const member = block.dataset.member;
  const selectBlock = block.querySelector(".selectBlock");

  hours.forEach((hour) => {
    const div = document.createElement("div");
    div.classList.add("timeBlock");
    div.dataset.hour = hour;

    div.addEventListener("mousedown", (e) => {
      isDragging = true;
      toggleAvailability(member, hour, div);
    });

    div.addEventListener("mouseover", (e) => {
      if (isDragging) toggleAvailability(member, hour, div);
    });

    selectBlock.appendChild(div);
  });
});

// 마우스 뗄 때 드래그 종료
document.addEventListener("mouseup", () => {
  isDragging = false;
  updateResultBlock();
});

function toggleAvailability(member, hour, div) {
  availability[member][hour] = !availability[member][hour];
  div.classList.toggle("selected", availability[member][hour]);
}

// 결과 블록 생성
const resultBlock = document.querySelector(".resultBlock");
hours.forEach((hour) => {
  const div = document.createElement("div");
  div.classList.add("timeBlock");
  div.dataset.hour = hour;
  resultBlock.appendChild(div);
});

// 업데이트 함수
function updateResultBlock() {
  hours.forEach((hour) => {
    let count = 0;

    members.forEach((member) => {
      if (availability[member][hour]) count++;
    });

    const block = resultBlock.querySelector(`[data-hour="${hour}"]`);
    block.className = "timeBlock"; // 초기화
    if (count > 0) block.classList.add(`level-${count}`);
  });
}

// 시간 숫자 라벨 생성 함수
function createTimeLabels(container) {
  for (let i = 14; i <= 20; i++) {
    const label = document.createElement("span");
    label.textContent = i;
    container.appendChild(label);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".memberBlock").forEach((block) => {
    const timeLabelDiv = block.querySelector(".timeLabels");
    createTimeLabels(timeLabelDiv);
  });

  const resultLabel = document.querySelector(".resultLabel");
  createTimeLabels(resultLabel);
});
