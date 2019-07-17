import React from 'react';
import IdeaMainInput from '../components/IdeaMainInput';
import SelectButton from '../components/SelectButton';

export default function NewIdeaForm() {
  return (
    <React.Fragment>
      <IdeaMainInput />
      <SelectButton />
    </React.Fragment>
  );
}
