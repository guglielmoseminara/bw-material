export default {

  isDefined: function (value) {
    return value !== undefined && value !== null;
  },

  createAndAppendNode: function(target, tagName, attributes={}, classList=[]) {
    var node = document.createElement(tagName);
    Object.keys(attributes).forEach((attr) => {
      node.setAttribute(attr, attributes[attr]);
    });
    classList.forEach((classEl) => {
      node.classList.add(classEl);
    });
    target.appendChild(node);
    return node;
  },
}
