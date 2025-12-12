import { s as siteConfig, u as useHead } from './server.mjs';

const getFullPageTitle = (title) => {
  if (!title) {
    return siteConfig.title;
  }
  if (title.includes(siteConfig.titleSuffix)) {
    return title;
  }
  return title + siteConfig.titleSuffix;
};
const generateToolPageTitle = (toolName, toolDescription = "") => {
  if (toolDescription) {
    return `${toolName} - ${toolDescription}`;
  }
  return `${toolName} - \u5728\u7EBF\u5DE5\u5177`;
};
const generateCategoryPageTitle = (categoryName, categoryDescription = "") => {
  if (categoryDescription) {
    return `${categoryName} - ${categoryDescription}`;
  }
  return `${categoryName} - \u5DE5\u5177\u96C6\u5408`;
};
const useSEO = () => {
  const setPageTitleComposable = (title) => {
    const fullTitle = getFullPageTitle(title);
    useHead({
      title: fullTitle
    });
  };
  return {
    setPageTitle: setPageTitleComposable,
    getFullPageTitle,
    generateToolPageTitle,
    generateCategoryPageTitle,
    siteConfig
  };
};

export { useSEO as u };
//# sourceMappingURL=useSEO-DTxZRwJC.mjs.map
