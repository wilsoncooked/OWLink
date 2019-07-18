import React from 'react';
import IdeaMainInput from '../components/IdeaMainInput';
import IdeaCategory from '../components/IdeaCategory';
import IdeaSkills from '../components/IdeaSkills';
import SendIdea from '../components/SendIdeaButton';

export default function NewIdeaForm() {
  return (
    <div className='new-idea-form'>
      <IdeaMainInput />
      <IdeaCategory />
      <IdeaSkills />
      <SendIdea />
    </div>
  );
}
