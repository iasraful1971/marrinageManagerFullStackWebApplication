import { Button, Group, Modal } from '@mantine/core';
import { useState } from 'react';
import { Register } from '../auth/LoginRegister';

export function AuthModel() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        mb="sm"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <Register/>
      </Modal>

      <Group position="left">
        <Button onClick={() => setOpened(true)}>Get registered</Button>
      </Group>
    </>
  );
}