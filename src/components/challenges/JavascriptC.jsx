import jsData from "/src/database/Challenges/javascript.json";
const jsonData = jsData;
import Card from "../Card";
export const JavascriptC = () => {
  const cardComponents = jsonData.map((item, i) => (
    //  CARD
    <Card
      key={item.id}
      title={item.title}
      link={item.link}
      description={item.description}
      i={i}
    />
  ));
  return (
    <div className="grid grid-cols-3 gap-x-12 gap-y-16  px-36 my-12">
      {cardComponents}
    </div>
  );
};
