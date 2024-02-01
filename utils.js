import { useRef, useEffect } from 'react';

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items. 
  // Each item has the following properties: "id", "title" and "price"
 
  
  let sectionArray = [];
  
  let sectionListData = [];

  const sections = ['Appetizers', 'Salads', 'Beverages'];

  sections.forEach((section) => {    

    let sectionObject = {};

    sectionArray = data.filter(item => item["category"] === section);    

    sectionObject["title"] = section;
    sectionObject["data"] = sectionArray.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price
      }
    });
    
    sectionListData.push(sectionObject);
    
  });
    
  return sectionListData;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
