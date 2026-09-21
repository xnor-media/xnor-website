"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface ContactOpenOptions {
  /** Pre-filled text for the message box */
  message?: string;
}

interface ContactModalContextValue {
  isOpen: boolean;
  prefill: string;

  /**
   * Opens the contact modal.
   * - open()                              -> empty form
   * - open({ message: "Hi, ..." })        -> message pre-filled
   * - onClick={open}                      -> also works (the click event is ignored)
   */
  open: (opts?: ContactOpenOptions | React.MouseEvent) => void;
  close: () => void;
}

const ContactModalContext =
  createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefill, setPrefill] = useState("");

  const open = useCallback(
    (opts?: ContactOpenOptions | React.MouseEvent) => {
      const message =
        opts && "message" in opts && typeof opts.message === "string"
          ? opts.message
          : "";

      setPrefill(message);
      setIsOpen(true);
    },
    []
  );

  const close = useCallback(() => {
    setIsOpen(false);
    setPrefill("");
  }, []);

  const value = useMemo(
    () => ({ isOpen, prefill, open, close }),
    [isOpen, prefill, open, close]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);

  if (!ctx) {
    throw new Error(
      "useContactModal must be used inside <ContactModalProvider>"
    );
  }

  return ctx;
}