import { Tabs } from '@mantine/core';
import { IconMessageCircle, IconPhoto } from '@tabler/icons';
import { Login } from '../auth/Login';
import { Register } from '../auth/Register';
import Footer from '../basc/footer/Footer';
import Navbar from '../basc/navbar/Navbar';
export function AuthTab() {
  return (
   <>
      <Navbar/>
      <div className="tab">
    <Tabs color="teal" defaultValue="register">
      <Tabs.List>
        <Tabs.Tab value="register" icon={<IconPhoto size={14} />}><h4>Register</h4></Tabs.Tab>
        <Tabs.Tab value="login" icon={<IconMessageCircle size={14} />}><h4>Login</h4></Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="register" pt="xs">
            <Register/>
      </Tabs.Panel>

      <Tabs.Panel value="login" pt="xs">
       <Login/>
      </Tabs.Panel>

 
    </Tabs>
    </div>
      <Footer/>
   </>
  );
}