import React from 'react';

const TextWithLineBreak = ({ text }: any) => {
  return (
    <>
      {text.split('\n').map((line:string, index:number) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default TextWithLineBreak;