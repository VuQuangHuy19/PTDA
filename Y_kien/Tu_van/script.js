document.addEventListener("DOMContentLoaded", function () {
  // Button for feedback submission
  document
    .getElementById("feedback-btn")
    .addEventListener("click", function () {
      alert("Gửi ý kiến của bạn!");
    });

  // Sample questions array
  const questions = [
    "Câu hỏi 1 của khách hàng",
    "Câu hỏi 2 của khách hàng",
    "Câu hỏi 3 của khách hàng",
    "Câu hỏi 4 của khách hàng",
  ];

  let currentPage = 0;
  const itemsPerPage = 2;

  function renderQuestions() {
    const questionList = document.getElementById("question-list");
    questionList.innerHTML = "";
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedQuestions = questions.slice(start, end);

    paginatedQuestions.forEach((question) => {
      const div = document.createElement("div");
      div.className = "question-item";
      div.textContent = question;
      questionList.appendChild(div);
    });
  }

  document.getElementById("prev-btn").addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
      renderQuestions();
    }
  });

  document.getElementById("next-btn").addEventListener("click", function () {
    if ((currentPage + 1) * itemsPerPage < questions.length) {
      currentPage++;
      renderQuestions();
    }
  });

  // Initial render
  renderQuestions();
});
