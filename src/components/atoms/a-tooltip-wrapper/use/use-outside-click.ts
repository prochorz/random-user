function useOutsideClick() {
    function setClickOutsideListener(targets: Array<any>, handler: Function) {
        const listener = (event: Event) => {
            const isContains = targets.some(target => {
                const item = target?.value || target;
                return (item && (item === event.target || item.contains(event.target)));
            });

            if (!isContains) {
                handler();
                document.removeEventListener('click', listener);
            }
        };

        document.addEventListener('click', listener);
    }

    return {
        setClickOutsideListener
    };
}

export default useOutsideClick;
