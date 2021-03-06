import React from 'react';
import renderer from 'react-test-renderer';
import CommonPicker from '../CommonPicker';
import constants from '../../../configs/constants';

it('CommonPicker renders correctly', () => {
  const tree = renderer.create(
    <CommonPicker
      value={'e-book-fiction'}
      onValueChange={() => null}
      data={constants.bookList}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
