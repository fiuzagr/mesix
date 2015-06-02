'use strict';

import {Bar} from 'components';

export default (ctrl) => {

  return (
    <div>
      <Bar isHeader/>
      <main role="main">
        <div class="wrapper">
          <a href="/" config={m.route}>&lt; Home</a>
          <p>{ctrl.prop()}</p>
        </div>
      </main>
    </div>
  );

}
