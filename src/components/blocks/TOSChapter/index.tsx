import TOSParagraph from "@blocks/TOSParagraph";

const TOSChapter: Blocks.TOSChapter = ({item}) => {
  return <div>
    <h3>{item.headline}</h3>
    <ul>
      {item.list.map((data, index) => <TOSParagraph key={index} item={data} />)}
    </ul>
  </div>
}

export default TOSChapter;