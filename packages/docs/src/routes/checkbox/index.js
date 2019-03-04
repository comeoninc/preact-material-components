// Dependencies
import {h, Component} from 'preact';

// Material Components
import {Checkbox} from '@preact-material-components/checkbox';
import {FormField} from '@preact-material-components/form-field';
import {Typography} from '@preact-material-components/typography';

import '@preact-material-components/typography/sass';
import '@preact-material-components/checkbox/sass';
import '@preact-material-components/form-field/sass';

// Components
import ComponentTable from '../../components/component-table';
import CodeBlock from '../../components/code-block';

// Styles
import './style';

// Samples
import sample from './sample.txt';
import basicExample from './basic-example.txt';
import indeterminateExample from './indeterminate-example.txt';
import controlledExample from './controlled-example.txt';

// Class
export default class CheckboxPage extends Component {
  constructor() {
    super();
    this.propsTable = [
      {
        component: 'Checkbox',
        props: [
          {
            name: 'disabled',
            description: 'This makes the checkbox disabled'
          },
          {
            name: 'checked',
            description: 'This makes the checkbox checked'
          },
          {
            name: 'indeterminate',
            description: 'This makes the checkbox indeterminate'
          }
        ]
      }
    ];
  }
  reflectValue = e => {
    this.setState({
      cboxvalue: e.checked
    });
  };
  render() {
    return (
      <div className="page-checkbox">
        <ComponentTable data={this.propsTable} />

        <div className="mdc-typography--display1">Sample code </div>
        <CodeBlock>
          <code class="lang-js">{sample}</code>
        </CodeBlock>

        <div className="mdc-typography--display1">Original documentation</div>
        <div className="mdc-typography--body">
          This component encapsulates{' '}
          <span className="strong">mdc-checkbox</span>, you can refer to its
          documentation
          <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox">
            {' '}
            here
          </a>
          .
        </div>

        <div className="mdc-typography--display1">Demo </div>

        <div className="mdc-typography--title">Basic Checkbox </div>
        <FormField>
          <Checkbox id="basic-checkbox" />
          <label for="basic-checkbox">Basic checkbox</label>
        </FormField>
        <CodeBlock>
          <code class="lang-html">{basicExample}</code>
        </CodeBlock>

        <div className="mdc-typography--title">Indeterminate Checkbox </div>
        <FormField>
          <Checkbox
            id="inderminate-checkbox"
            indeterminate={true}
            onChange={this.reflectValue}
          />
          <label for="inderminate-checkbox">Indeterminate checkbox</label>
        </FormField>
        <div>
          <Typography body>
            Value: {this.state.cboxvalue ? 'checked' : 'unchecked'}
          </Typography>
        </div>
        <CodeBlock>
          <code class="lang-html">{indeterminateExample}</code>
        </CodeBlock>

        <div className="mdc-typography--title">Checked </div>
        <FormField>
          <Checkbox id="controlled-checkbox" checked={true} />
          <label for="controlled-checkbox">Controlled checkbox</label>
        </FormField>
        <CodeBlock>
          <code class="lang-html">{controlledExample}</code>
        </CodeBlock>
      </div>
    );
  }
}
