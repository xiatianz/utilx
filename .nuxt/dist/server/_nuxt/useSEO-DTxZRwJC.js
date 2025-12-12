import { s as siteConfig, u as useHead } from "../server.mjs";
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
  return `${toolName} - 在线工具`;
};
const generateCategoryPageTitle = (categoryName, categoryDescription = "") => {
  if (categoryDescription) {
    return `${categoryName} - ${categoryDescription}`;
  }
  return `${categoryName} - 工具集合`;
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
export {
  useSEO as u
};
//# sourceMappingURL=useSEO-DTxZRwJC.js.map
