import { createContext, useState } from "react";

const UIContext = createContext<any>(null);

const UIProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState([])

  return (
    <UIContext.Provider
      value={{
        showMenu,
        setShowMenu,
        open,
        setOpen,
        user,
        setUser
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export { UIProvider };
export default UIContext;