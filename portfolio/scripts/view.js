export default {
  render: function (date) {
    const temlateElement = document.getElementById("template");

    return createTemplate(temlateElement, date);
  },
};

function createTemplate(template, object) {
  const possibleKeys = Object.keys(object);

  return template.innerHTML.replace(
    new RegExp(`\{\{(${possibleKeys.join("|")})\}\}`, "g"),
    (_, key) => object[key]
  );
}
