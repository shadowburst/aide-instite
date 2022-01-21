import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon, TextInput } from '../../components';
import { formStyles, theme } from '../../constants';
import { prefixes } from '../../data';

const PrefixesPage = ({}) => {
  const randomIndex = () => Math.floor(Math.random() * (prefixes.length ?? 0));

  const [index, setIndex] = useState(randomIndex());
  const [answer, setAnswer] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);

  const onSubmit = () => {
    if (hasAnswered) {
      setIndex(randomIndex());
      setAnswer('');
      setHasAnswered(false);
    } else {
      if (answer) {
        setHasAnswered(true);
      } else {
        setIndex(randomIndex());
      }
    }
  };

  const [title = '', meaning = '', examples = ''] = prefixes[index];

  const renderResults = () => {
    const success = meaning.toLowerCase().includes(answer.toLowerCase());

    return (
      <View>
        <Text
          style={{
            ...formStyles.text,
            marginBottom: 25,
            fontSize: 65,
            fontWeight: 'bold',
            color: success ? theme.colors.success : theme.colors.danger,
            textTransform: 'uppercase',
          }}
        >
          {success ? 'Vrai' : 'Faux'}
        </Text>
        {meaning !== '' && (
          <Text style={{ ...formStyles.text, fontSize: 28 }}>
            {`Sens : ${meaning}`}
          </Text>
        )}
        {examples !== '' && (
          <Text style={{ ...formStyles.text, fontStyle: 'italic' }}>
            {`Exemples : ${examples}`}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ ...formStyles.title, marginBottom: 25 }}>{title}</Text>
      {hasAnswered ? (
        renderResults()
      ) : (
        <TextInput
          placeholder='Sens'
          value={answer}
          onChange={setAnswer}
          onSubmit={onSubmit}
          returnKeyType='done'
        />
      )}
      <View
        style={{
          marginTop: 15,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Button onPress={onSubmit} rounded>
          <Icon name='chevron-right' color={theme.colors.white} size={45} />
        </Button>
      </View>
    </View>
  );
};

export default PrefixesPage;
