import React from 'react';
import IdeaMainInput from '../components/IdeaMainInput';
import IdeaCategory from '../components/IdeaCategory';
import IdeaSkills from '../components/IdeaSkills';
import SendIdea from '../components/SendIdeaButton';

export default function NewIdeaForm() {
  return (
    <div className='new-idea-form'>
      <IdeaMainInput />
      <div className='lower-idea-form'>
        <IdeaCategory />
        <IdeaSkills />
        <SendIdea />
      </div>
    </div>
  );
}
