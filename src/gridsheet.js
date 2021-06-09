import React from 'react';

export default function GridSheet()
{
return (<div className="grid_sheet">
  Gridsheet
  <SheetContainer></SheetContainer>
</div>);
}

class SheetContainer extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}