import React from 'react';
import RadioGroup from '../../../components/RadioGroup';

const options = [
  { value: 'with-icon', label: 'With an Icon', icon: 'thumb_up' },
  { value: 'default', label: 'Default' },
];

class Group extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: undefined };
  }

  render() {
    const { value } = this.state;

    return (
      <RadioGroup
        name="inline-example"
        value={value}
        onChange={({ value: opValue }) => this.setState({ value: opValue })}
        options={options}
        type="button"
        inline
      />
    );
  }
}

const buttonGroup = {
  code: `<RadioGroup
  name="groceries"
  type="button"
  options={options}
  inline
>
...
</RadioGroup>`,
  component: <Group />,
};

export default buttonGroup;
