interface UseProductControllerProps {
  cutText: (text: string) => string;
}

const useProductController = (): UseProductControllerProps => {
  const cutText = (text: string) => {
    return text.length > 40 ? text.substring(0, 40) + "..." : text;
  };

  return {
    cutText,
  };
};

export default useProductController;
