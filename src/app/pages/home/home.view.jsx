'use strict';

import {Bar, Button} from 'components';

export default (ctrl) => {

  return (
    <div>
      <Bar isHeader className="bar--jumbo"/>
      <main role="main">
        <div class="wrapper">
          <a href="/another" config={m.route}>Another Page &gt;</a>
          <p>{ctrl.prop()}</p>

          <Button onclick={ctrl.bind('changeProp', 'param')}>
            Button!
          </Button>
        </div>
      </main>
    </div>
  );

};
