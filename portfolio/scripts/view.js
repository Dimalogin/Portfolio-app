export default {
  render: function (date) {
    const temlateElement = document.getElementById("template");

    const application = document.getElementById("application");

    application.innerHTML = createTemplate(temlateElement, date);
  },
};

function createTemplate(template, object) {
  const possibleKeys = Object.keys(object);

  return template.innerHTML.replace(
    new RegExp(`\{\{(${possibleKeys.join("|")})\}\}`, "g"),
    (_, key) => object[key]
  );
}
