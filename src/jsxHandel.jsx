export function createElement(el, props, ...children) {
  const len = children.length;
  let virtualDOM = {
    $$typeof: null,
    ref: null,
    key: null,
    el: null,
    props: null,
  };
  if (props !== null) virtualDOM.props = { ...props };
  if (len === 1) virtualDOM.props.children = children[0];
  if (len > 1) virtualDOM.props.children = children;
  return virtualDOM;
}

const each = function (obj, callback) {
  Reflect.ownKeys(obj).forEach(key => {
    callback(key, obj[key]);
  });
};

export const render = function render(virtualDOM, container) {
  let { type, props } = virtualDOM;

  if (typeof type === 'string') {
    let element = document.createElement(type);

    each(props, (key, value) => {
      switch (key) {
        case 'className':
          element.setAttribute('class', value);
          break;
        case 'style':
          each(value, (attr, attrValue) => {
            element.style[attr] = attrValue;
          });
          break;
        case 'children':
          let children = Array.isArray(value) ? value : [value];
          children.forEach(item => {
            if (typeof item === 'string') {
              element.appendChild(document.createTextNode(item));
            } else {
              render(item, element);
            }
          });
          break;
        default:
          element.setAttribute(key, value);
      }
    });

    container.appendChild(element);
  }
};
