import React, { useState } from 'react';
import { KeyboardView, RadioButton } from '../../components';
import PrefixesPage from './prefixes-page';
import RootsPage from './roots-page';
import SuffixesPage from './suffixes-page';

const HomeScreen = ({}) => {
  const [mode, setMode] = useState('roots');
  const modes = [
    {
      value: 'roots',
      text: 'Racines',
    },
    {
      value: 'prefixes',
      text: 'Préfixes',
    },
    {
      value: 'suffixes',
      text: 'Suffixes',
    },
  ];

  const pages = {
    roots: () => <RootsPage />,
    prefixes: () => <PrefixesPage />,
    suffixes: () => <SuffixesPage />,
  };

  return (
    <KeyboardView style={{ padding: 25 }}>
      {pages[mode] !== null && pages[mode]()}
      <RadioButton
        value={mode}
        setValue={setMode}
        options={modes}
        style={{ flexDirection: 'row', justifyContent: 'flex-end' }}
      />
    </KeyboardView>
  );
};

export default HomeScreen;
