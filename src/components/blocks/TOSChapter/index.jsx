import TOSParagraph from "@blocks/TOSParagraph";

const TOSChapter = ({item}) => {
  return <div>
    <h3>{item.headline}</h3>
    <ul>
      {item.list.map((item, index) => <TOSParagraph key={index} item={item} />)}
    </ul>
  </div>
}

export default TOSChapter;