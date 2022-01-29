import React from 'react';
import { EditorState, Modifier } from 'draft-js';

import * as Styled from './styles';

// import Button from '../../../../button';

const ButtonToolbar = ({ editorState, text, value, onChange }) => {
  const addValue = () => {
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      value,
      editorState.getCurrentInlineStyle()
    );
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  return (
    <Styled.Container>
      {/* <Button type="toolbar" small text={text} onClick={addValue} /> */}
    </Styled.Container>
  );
};

export default ButtonToolbar;
