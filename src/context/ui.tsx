import { createContext, useState } from "react";

const UIContext = createContext<any>(null);

const UIProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false);

  return (
    <UIContext.Provider
      value={{
        showMenu,
        setShowMenu,
        open,
        setOpen
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export { UIProvider };
export default UIContext;