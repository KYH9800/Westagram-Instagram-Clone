import React from 'react';
import { useRouter } from 'next/router';

import AppLayout from '../../components/AppLayout/AppLayout';

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('router query: ', id);

  return (
    <AppLayout>
      <div>{id}의 페이지 / 다이나믹 라우팅</div>
    </AppLayout>
  );
};

export default User;
