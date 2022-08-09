import { Loader } from '@mantine/core';

export function Spinner() {
  return <div style={{width: '100%' , height: "100vh" , display: "flex", margin: "0 auto", justifyContent: "center" , alignItems: "center"}}> <Loader  color="cyan" /></div>
}