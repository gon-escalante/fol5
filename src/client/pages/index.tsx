import React, { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '../components/Layout';

const MAX_HISTORY_LENGTH = 3;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home: NextPage = () => {
  const [text, setText] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const [history, setHistory] = useState<Array<string>>([]);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter' && text.length > 0) {
      setHistory([
        ...(history.length >= MAX_HISTORY_LENGTH
          ? history.slice(1, MAX_HISTORY_LENGTH)
          : history),
        text,
      ]);
      setText('');
    }
  };

  return (
    <Layout>
      <HistoryList>
        {history.map((el, index) => (
          <span key={`history_${index}`}>{el}</span>
        ))}
      </HistoryList>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        value={text}
        onChange={handleChange}
      />
    </Layout>
  );
};

export default Home;
