import "./App.css";
import { Card } from "antd";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { ContactDrawer } from "./components/ContactDrawer";
import { useState } from "react";
import type { ContactType } from "./core/models/ContactModel";
import type { ContactDrawerState } from "./core/models/DrawerStateModel";

function App() {
  const [contactFormDrawerState, setContactFormDrawerState] = useState<ContactDrawerState>({open: false, payload: null});

  const openContactFormDrawer = (payload: ContactType | null = null) => {
      setContactFormDrawerState({open: true, payload})
  }

  const closeContactFormDrawer = () => {
      setContactFormDrawerState({open: false, payload: null})
  }

  return (
    <div className="relative overflow-hidden w-full max-w-[600px]">
      <Card title={<Header addNewContact={openContactFormDrawer}/>} className="w-full min-h-[600px] max-h-[800px] overflow-auto" >
            <Content openContactFormDrawer={openContactFormDrawer}/>
      </Card>
     <ContactDrawer {...contactFormDrawerState} closeContactFormDrawer={closeContactFormDrawer} />
    </div>
  );
}

export default App;
