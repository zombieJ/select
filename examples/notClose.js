/* eslint no-console: 0 */

import React from 'react';
import Select, { Option } from 'rc-select';
import 'rc-select/assets/index.less';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  state = { value: '' };

  handleChange = value => {
    this.setState({ value });
  }
  render() {
    console.log('[Page render]');

    return (
      <div>
        controlled:
        <Select style={{ width: 120 }} onChange={this.handleChange} value={this.state.value}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('__react-content'));
