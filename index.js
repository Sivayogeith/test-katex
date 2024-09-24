const tex = document.getElementById("tex");

const splitTex = (tex) => {
  const splitContent = tex.split(/(\$\$.*?\$\$)/);

  return splitContent.map((part) => {
    if (part.startsWith("$$")) {
      return { math: true, value: part.slice(2, -2) };
    } else {
      return { math: false, value: part };
    }
  });
};

tex.addEventListener("change", (event) => {
  const result = document.getElementById("result-tex");
  const parts = splitTex(event.target.value);

  result.innerHTML = "";
  parts.forEach((part) => {
    if (part.math) {
      const span = document.createElement("span");
      katex.render(part.value, span);
      result.appendChild(span);
    } else {
      const span = document.createElement("span");
      span.textContent = part.value;
      result.appendChild(span);
    }
  });
});
