/** @jsx React.DOM */
var React = require('react');

var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name} from React {React.version}</div>;
    }
});

React.renderComponent(
  <Hello name="World" />, document.body
);
