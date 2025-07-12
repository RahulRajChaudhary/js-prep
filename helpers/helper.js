function add(question, answer, isCode = false) {
  const container = document.createElement("div");
  container.style.marginBottom = "20px";

  const q = document.createElement("h3");
  q.textContent = question;
  container.appendChild(q);

  const a = document.createElement(isCode ? "pre" : "p");
  if (isCode) {
    const code = document.createElement("code");
    code.textContent = answer;
    a.appendChild(code);
    a.style.backgroundColor = "#1e1e1e";
    a.style.padding = "10px";
    a.style.borderRadius = "5px";
    a.style.overflowX = "auto";
  } else {
    a.textContent = "Answer: " + answer;
    a.style.color = "orange";
  }

  container.appendChild(a);
  document.body.appendChild(container);
}
