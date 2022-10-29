import { useEffect } from 'react';

export const useScrollTop = (disable: boolean = false) => {
  useEffect(() => {
		if (disable) return;

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}, []);
};