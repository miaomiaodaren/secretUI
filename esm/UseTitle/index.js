import { useEffect } from 'react';

var useTitle = function useTitle(title) {
  useEffect(function () {
    document.title = title;
  }, [title]);
};

export default useTitle;
//# sourceMappingURL=index.js.map
