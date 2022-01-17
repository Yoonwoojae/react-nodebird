import { Form, Input } from 'antd';
import React, {useMemo} from 'react';

const NicknameEditForm = () => {

  const FormStyle = useMemo(() => ({
    marginBottom: '20px',
    border: '1px solid #d9d9d9',
    padding: '20px'
  }));

  return (
    <Form style={FormStyle}>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;
