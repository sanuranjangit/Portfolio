import { useState, useCallback } from 'react';

export function useModal() {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const open = useCallback((payload) => {
    setData(payload ?? null);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setData(null);
  }, []);

  return { isOpen, open, close, data };
}
