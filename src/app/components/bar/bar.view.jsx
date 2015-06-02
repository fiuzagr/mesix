'use strict';

export default (ctrl, attrs, children) => {

  let className = attrs.className || 'bar';
  let isHeader = attrs.isHeader || false;
  let description = attrs.description || 'Mithril ES6 boilerplate';
  let content = children || (
    <div>
      <a class="bar__title" href="/" config={m.route}>MESix</a>
      <h1 class="bar__description">{description}</h1>
    </div>
  );

  let pattern = GeoPattern.generate('MESix', {color: '#0074D9'});

  return isHeader ? (
    <header class={className} style={{backgroundImage: pattern.toDataUrl()}}>
      {content}
    </header>
  ) : (
    <div class={className}>
      {content}
    </div>
  );

}
