const useDocumentSize = () => {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    };
};

export default useDocumentSize;
